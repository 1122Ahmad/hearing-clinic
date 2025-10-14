import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { motion } from "framer-motion";

const allSlots = [
  "10:00 AM", "10:20 AM", "10:40 AM", "11:00 AM", "11:20 AM", "11:40 AM",
  "12:00 PM", "12:20 PM", "12:40 PM", "01:00 PM", "01:20 PM", "01:40 PM",
  "02:00 PM", "02:20 PM", "02:40 PM", "03:00 PM", "03:20 PM", "03:40 PM",
  "04:00 PM", "04:20 PM", "04:40 PM", "05:00 PM", "05:20 PM", "05:40 PM",
  "06:00 PM", "06:20 PM", "06:40 PM", "07:00 PM", "07:20 PM", "07:40 PM",
  "08:00 PM", "08:20 PM", "08:40 PM", "09:00 PM", "09:20 PM", "09:40 PM",
  "10:00 PM", "10:20 PM", "10:40 PM"
];

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Fetch booked slots for the selected date
  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const dateStr = date.toISOString().split("T")[0];
        const response = await fetch(`/api/appointments/date/${dateStr}`);
        const result = await response.json();
        
        if (result.success) {
          const bookedTimes = result.data.map(appointment => appointment.time);
          setBookedSlots(bookedTimes);
        }
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      }
    };

    fetchBookedSlots();
  }, [date]);

  // Update available slots when date or booked slots change
  useEffect(() => {
    const dateStr = date.toISOString().split("T")[0];
    setAvailableSlots(allSlots.filter(slot => !bookedSlots.includes(slot)));
    setSelectedSlot(null);
  }, [date, bookedSlots]);

  const handleBookSlot = () => {
    if (!selectedSlot) {
      alert("Please select a time slot!");
      return;
    }
    setShowBookingForm(true);
  };

  const handleFormChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const dateStr = date.toISOString().split("T")[0];
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingForm,
          date: dateStr,
          time: selectedSlot
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Slot booked successfully. Please come 10 minutes before your checkup' });
        setBookingForm({ name: '', email: '', phone: '' });
        setShowBookingForm(false);
        setSelectedSlot(null);
        // Refresh booked slots
        const dateStr = date.toISOString().split("T")[0];
        const response = await fetch(`/api/appointments/date/${dateStr}`);
        const result = await response.json();
        if (result.success) {
          const bookedTimes = result.data.map(appointment => appointment.time);
          setBookedSlots(bookedTimes);
        }
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to book appointment. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSubmitStatus(null);
    setBookingForm({ name: '', email: '', phone: '' });
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Book an Appointment</h2>

        {/* Success/Error Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-md ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Calendar */}
          <div className="md:w-1/2 border p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Select Date</h3>
            <Calendar
              value={date}
              onChange={setDate}
              minDate={new Date()} // Prevent past dates
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
              disabled={!selectedSlot}
              className={`mt-4 px-6 py-3 rounded-md transition ${
                selectedSlot 
                  ? 'bg-green-600 text-white hover:bg-green-500' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
              whileTap={{ scale: selectedSlot ? 0.95 : 1 }}
            >
              Book Selected Slot
            </motion.button>
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Book Your Appointment</h3>
              <p className="text-gray-600 mb-4">
                Selected: {selectedSlot} on {date.toLocaleDateString()}
              </p>

              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleFormChange}
                    className="w-full border rounded-md px-4 py-2 mt-1"
                    placeholder="Full Name*"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    className="w-full border rounded-md px-4 py-2 mt-1"
                    placeholder="example@email.com*"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleFormChange}
                    className="w-full border rounded-md px-4 py-2 mt-1"
                    placeholder="xxxx-xxxxxxx*"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeBookingForm}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-4 py-2 rounded-md text-white font-medium ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-700 hover:bg-blue-800'
                    }`}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentPage;