import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { motion } from "framer-motion";

const doctors = ["Luqman, Au.D."];

// Mock booked slots data (replace with API)
let bookedSlotsData = [
  { date: "2025-10-15", slot: "10:00 AM" },
  { date: "2025-10-15", slot: "11:00 AM" },
];

const allSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];

const appointmentTypes = [
  { name: "10 Minute Phone Consultation", duration: "10 minutes" },
  { name: "Existing Patients", duration: "30 minutes" },
  { name: "New Patients", duration: "90 minutes" },
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
    <section className="py-16 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center">Book an Appointment</h2>

        {/* Appointment Types */}
        <div className="space-y-2">
          {appointmentTypes.map((type) => (
            <motion.div
              key={type.name}
              onClick={() => handleTypeClick(type)}
              className={`p-4 border rounded-md cursor-pointer transition-shadow ${
                selectedType === type.name ? "shadow-lg border-blue-500" : "border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold text-lg">{type.name}</h3>
              <p className="text-gray-600">{type.duration}</p>
            </motion.div>
          ))}
        </div>

        {/* Doctor Selection */}
        {showCalendar && (
          <div className="border p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Select Doctor</h3>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              {doctors.map((doc) => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </div>
        )}

        {/* Calendar */}
        {showCalendar && (
          <div className="border p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Select Date</h3>
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
        )}

        {/* Available Slots */}
        {showCalendar && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-blue-700">Available Slots</h3>
            {availableSlots.length === 0 ? (
              <p className="text-gray-500">No slots available on this date.</p>
            ) : (
              availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`px-4 py-2 rounded-md border transition ${
                    selectedSlot === slot
                      ? "bg-blue-700 text-white"
                      : "bg-white text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {slot}
                </button>
              ))
            )}
            <motion.button
              onClick={handleBookSlot}
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
              whileTap={{ scale: 0.95 }}
            >
              Book Selected Slot
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentPage;
