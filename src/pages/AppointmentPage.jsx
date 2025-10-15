import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, CheckCircle, XCircle } from "lucide-react";
import API from '../api';

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
            const result = await API.getAppointmentsByDate(dateStr);
            
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
          const result = await API.bookAppointment({
            ...bookingForm,
            date: dateStr,
            time: selectedSlot
          });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Slot booked successfully. Please come 10 minutes before your checkup' });
        setBookingForm({ name: '', email: '', phone: '' });
        setShowBookingForm(false);
        setSelectedSlot(null);
            // Refresh booked slots
            const dateStr = date.toISOString().split("T")[0];
            const result = await API.getAppointmentsByDate(dateStr);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Book an Appointment</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Schedule your hearing consultation with our specialists and take the first step towards better hearing health.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">

          {/* Success/Error Messages */}
          {submitStatus && (
            <div className={`mb-8 p-6 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              <div className="flex items-center">
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 mr-3 text-red-600" />
                )}
                <span className="font-semibold">{submitStatus.message}</span>
              </div>
            </div>
          )}

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Calendar */}
            <div className="card p-6 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <CalendarIcon className="w-5 h-5 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Select Date</h3>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <Calendar
                  value={date}
                  onChange={setDate}
                  minDate={new Date()} // Prevent past dates
                  className="w-full"
                />
              </div>
            </div>

            {/* Right: Available Slots */}
            <div className="card p-6 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Available Time Slots</h3>
              </div>
              {availableSlots.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-body text-gray-500">No slots available on this date.</p>
                  <p className="text-sm text-gray-400 mt-2">Please select a different date.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                    {availableSlots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 font-medium ${
                          selectedSlot === slot
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105"
                            : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={handleBookSlot}
                    disabled={!selectedSlot}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedSlot 
                        ? 'btn-primary' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileTap={{ scale: selectedSlot ? 0.95 : 1 }}
                  >
                    <CalendarIcon className="w-4 h-4" />
                    {selectedSlot ? `Book ${selectedSlot} Slot` : 'Select a Time Slot'}
                  </motion.button>
                </div>
              )}
            </div>
          </div>

          {/* Booking Form Modal */}
          {showBookingForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <motion.div 
                className="bg-white rounded-xl shadow-2xl max-w-md w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="w-8 h-8 text-blue-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Book Your Appointment</h3>
                    <p className="text-body text-gray-600">
                      {selectedSlot} on {date.toLocaleDateString()}
                    </p>
                  </div>

                  <form onSubmit={handleSubmitBooking} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2 text-blue-600" />
                        Your Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleFormChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Full Name*"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-600" />
                        Your Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleFormChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="example@email.com*"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-600" />
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleFormChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="xxxx-xxxxxxx*"
                        required
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={closeBookingForm}
                        className="flex-1 btn-secondary flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed text-white' 
                            : 'btn-primary'
                        }`}
                      >
                        <CalendarIcon className="w-4 h-4" />
                        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;