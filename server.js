import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow requests from your frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://hearingclinicisb_db_user:Ej45C4XaJRO3W9dl@cluster0.p1hocil.mongodb.net/hearing-clinic?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new'
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  time: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'completed', 'cancelled'],
    default: 'scheduled'
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hearing Clinic API Server is running!' });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update contact status
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
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Book appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Check if slot is already booked
    const existingAppointment = await Appointment.findOne({
      date: date,
      time: time,
      status: { $in: ['scheduled', 'confirmed'] }
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: 'This time slot is already booked'
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      date,
      time
    });

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
        createdAt: appointment.createdAt
      }
    });

  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all appointments (for admin purposes)
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: appointments
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get appointments for a specific date
app.get('/api/appointments/date/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const appointments = await Appointment.find({ 
      date: date,
      status: { $in: ['scheduled', 'confirmed'] }
    });
    res.json({
      success: true,
      data: appointments
    });
  } catch (error) {
    console.error('Error fetching appointments for date:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
