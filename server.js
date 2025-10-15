import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =========================
// Middleware
// =========================
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.FRONTEND_URL 
      : ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Note: Static file serving removed for separate deployment
// Frontend is now served by Render Static Site service

// =========================
// MongoDB Connection
// =========================
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://hearingclinicisb_db_user:Ej45C4XaJRO3W9dl@cluster0.p1hocil.mongodb.net/hearing-clinic?retryWrites=true&w=majority&appName=Cluster0';

const connectWithRetry = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 5,
      maxIdleTimeMS: 30000,
      connectTimeoutMS: 10000,
      tls: true,
      tlsAllowInvalidCertificates: false,
      tlsAllowInvalidHostnames: false,
    });

    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⏳ Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

// Initial connection
connectWithRetry();

// =========================
// Contact Schema
// =========================
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new',
  },
});

const Contact = mongoose.model('Contact', contactSchema);

// =========================
// Appointment Schema
// =========================
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  time: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'completed', 'cancelled'],
    default: 'scheduled',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// =========================
// Routes
// =========================

// API Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Hearing Clinic API Server is running!' });
});

// Note: Catch-all route removed for separate deployment
// Frontend routing is now handled by Render Static Site service

// --------------------
// Contact Routes
// --------------------
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.patch('/api/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: 'Contact not found' });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// --------------------
// Appointment Routes
// --------------------
app.post('/api/appointments', async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;

    if (!name || !email || !phone || !date || !time) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message:
          'Database connection is not available. Please try again later.',
      });
    }

    const existingAppointment = await Appointment.findOne({
      date,
      time,
      status: { $in: ['scheduled', 'confirmed'] },
    });

    if (existingAppointment) {
      return res
        .status(400)
        .json({ success: false, message: 'This time slot is already booked' });
    }

    const appointment = new Appointment({ name, email, phone, date, time });
    await appointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: {
        id: appointment._id,
        name: appointment.name,
        email: appointment.email,
        date: appointment.date,
        time: appointment.time,
        createdAt: appointment.createdAt,
      },
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/appointments/date/:date', async (req, res) => {
  try {
    const { date } = req.params;

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message:
          'Database connection is not available. Please try again later.',
      });
    }

    const appointments = await Appointment.find({
      date,
      status: { $in: ['scheduled', 'confirmed'] },
    });

    res.json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments for date:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// =========================
// Start Server
// =========================
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
