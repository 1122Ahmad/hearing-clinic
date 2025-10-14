import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { motion } from "framer-motion";

const allSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", 
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
];

// Mock booked slots
let bookedSlotsData = [];

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    setBookedSlots(bookedSlotsData);
  }, []);

  // Update available slots when date changes
  useEffect(() => {
    const dateStr = date.toISOString().split("T")[0];
    const bookedForDate = bookedSlots
      .filter(s => s.date === dateStr)
      .map(s => s.slot);
    setAvailableSlots(allSlots.filter(slot => !bookedForDate.includes(slot)));
    setSelectedSlot(null);
  }, [date, bookedSlots]);

  const handleBookSlot = () => {
    if (!selectedSlot) return alert("Please select a time slot!");
    const dateStr = date.toISOString().split("T")[0];

    const isBooked = bookedSlots.some(
      s => s.date === dateStr && s.slot === selectedSlot
    );
    if (isBooked) return alert("This slot is already booked!");

    const newBooking = { date: dateStr, slot: selectedSlot };
    bookedSlotsData.push(newBooking);
    setBookedSlots([...bookedSlots, newBooking]);
    alert(`Successfully booked ${selectedSlot} on ${dateStr}`);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Book an Appointment</h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Calendar */}
          <div className="md:w-1/2 border p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Select Date</h3>
            <Calendar
              value={date}
              onChange={setDate}
              minDate={new Date()} // Optional: prevent past dates
            />
          </div>

          {/* Right: Available Slots */}
          <div className="md:w-1/2 border p-4 rounded-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Available Slots</h3>
            {availableSlots.length === 0 ? (
              <p className="text-gray-500">No slots available on this date.</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map(slot => (
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
                ))}
              </div>
            )}
            <motion.button
              onClick={handleBookSlot}
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
              whileTap={{ scale: 0.95 }}
            >
              Book Selected Slot
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
