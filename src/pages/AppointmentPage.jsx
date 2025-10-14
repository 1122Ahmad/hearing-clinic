import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { motion } from "framer-motion";
import { Phone, Clock, Calendar as CalendarIcon, User, CheckCircle, Sparkles } from "lucide-react";

const doctors = ["Luqman, Au.D."];

// Mock booked slots data (replace with API)
let bookedSlotsData = [
  { date: "2025-10-15", slot: "10:00 AM" },
  { date: "2025-10-15", slot: "11:00 AM" },
];

const allSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];

const appointmentTypes = [
  { 
    name: "10 Minute Phone Consultation", 
    duration: "10 minutes",
    icon: Phone,
    description: "Quick consultation over the phone",
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "Existing Patients", 
    duration: "30 minutes",
    icon: User,
    description: "Follow-up appointment for existing patients",
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "New Patients", 
    duration: "90 minutes",
    icon: Sparkles,
    description: "Comprehensive initial consultation",
    color: "from-blue-600 to-blue-800"
  },
];

const PHONE_NUMBER = "+923001232863"; // Replace with your phone number

const AppointmentPage = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  // Fetch booked slots
  useEffect(() => {
    setBookedSlots(bookedSlotsData);
  }, []);

  // Update available slots when date or bookedSlots change
  useEffect(() => {
    if (!showCalendar) return;
    const dateStr = date.toISOString().split("T")[0];
    const bookedForDate = bookedSlots
      .filter((s) => s.date === dateStr)
      .map((s) => s.slot);
    setAvailableSlots(allSlots.filter((slot) => !bookedForDate.includes(slot)));
    setSelectedSlot(null);
  }, [date, bookedSlots, showCalendar]);

  const handleBookSlot = () => {
    if (!selectedSlot) return alert("Please select a time slot!");
    const dateStr = date.toISOString().split("T")[0];

    // Prevent double booking
    const isBooked = bookedSlots.some(
      (s) => s.date === dateStr && s.slot === selectedSlot
    );
    if (isBooked) return alert("This slot is already booked!");

    const newBooking = { date: dateStr, slot: selectedSlot };
    bookedSlotsData.push(newBooking);
    setBookedSlots([...bookedSlots, newBooking]);
    alert(`Successfully booked ${selectedSlot} on ${dateStr}`);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type.name);
    if (type.name === "10 Minute Phone Consultation") {
      // Open phone dialer
      window.location.href = `tel:${PHONE_NUMBER}`;
      setShowCalendar(false);
    } else {
      // Show calendar for patients
      setShowCalendar(true);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-4 md:px-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg">
            <CalendarIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred appointment type and schedule a time that works best for you
          </p>
        </motion.div>

        {/* Appointment Types */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            Select Appointment Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appointmentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.name}
                  onClick={() => handleTypeClick(type)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedType === type.name 
                      ? "shadow-2xl scale-105 ring-4 ring-blue-400 ring-opacity-50" 
                      : "shadow-lg hover:shadow-xl hover:scale-102"
                  }`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-br ${type.color} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      {selectedType === type.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-white rounded-full p-1"
                        >
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        </motion.div>
                      )}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{type.name}</h3>
                    <p className="text-blue-50 text-sm mb-3">{type.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {type.duration}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Doctor Selection */}
        {showCalendar && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-blue-100"
          >
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-800">
              <User className="w-6 h-6 text-blue-600" />
              Select Your Audiologist
            </h3>
            <select
              className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              {doctors.map((doc) => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </motion.div>
        )}

        {/* Calendar */}
        {showCalendar && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-blue-100"
          >
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-800">
              <CalendarIcon className="w-6 h-6 text-blue-600" />
              Choose Your Date
            </h3>
            <div className="calendar-wrapper">
              <style>{`
                .calendar-wrapper .react-calendar {
                  width: 100%;
                  border: none;
                  border-radius: 12px;
                  font-family: inherit;
                  padding: 1rem;
                }
                .calendar-wrapper .react-calendar__tile {
                  padding: 1rem;
                  border-radius: 8px;
                  transition: all 0.2s;
                }
                .calendar-wrapper .react-calendar__tile:enabled:hover {
                  background-color: #DBEAFE;
                }
                .calendar-wrapper .react-calendar__tile--active {
                  background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
                  color: white;
                }
                .calendar-wrapper .react-calendar__tile--now {
                  background-color: #EFF6FF;
                  color: #1D4ED8;
                  font-weight: 600;
                }
                .calendar-wrapper .react-calendar__navigation button {
                  color: #1D4ED8;
                  font-weight: 600;
                  font-size: 1rem;
                }
                .calendar-wrapper .react-calendar__navigation button:enabled:hover {
                  background-color: #DBEAFE;
                  border-radius: 8px;
                }
              `}</style>
              <Calendar
                value={date}
                onChange={setDate}
                tileDisabled={({ date, view }) => {
                  const dateStr = date.toISOString().split("T")[0];
                  const bookedCount = bookedSlots.filter(s => s.date === dateStr).length;
                  return bookedCount >= allSlots.length;
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Available Slots */}
        {showCalendar && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-gray-800">
              <Clock className="w-6 h-6 text-blue-600" />
              Available Time Slots
            </h3>
            {availableSlots.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <CalendarIcon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-lg">No slots available on this date.</p>
                <p className="text-gray-400 text-sm mt-2">Please select another date</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {availableSlots.map((slot, index) => (
                    <motion.button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all duration-200 ${
                        selectedSlot === slot
                          ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white border-blue-700 shadow-lg scale-105"
                          : "bg-white text-blue-700 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  onClick={handleBookSlot}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedSlot}
                >
                  <CheckCircle className="w-6 h-6" />
                  Confirm Appointment
                </motion.button>
              </>
            )}
          </motion.div>
        )}

        {/* Info Banner */}
        {!showCalendar && selectedType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl"
          >
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to Connect?</h3>
            <p className="text-blue-100">
              You've selected a phone consultation. Click the appointment type again to call us directly.
            </p>
          </motion.div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AppointmentPage;