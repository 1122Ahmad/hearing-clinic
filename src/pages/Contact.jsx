import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import API from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log('Submitting form with data:', formData);

    try {
      const result = await API.submitContact(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Ready to improve your hearing? Get in touch with our hearing specialists for a consultation.
          </p>
        </div>
      </section>

          {/* Main Content */}
          <section className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-5 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Send className="w-4 h-4 text-blue-800" />
                </div>
                <h2 className="text-lg font-bold text-blue-900">Send Us a Message</h2>
              </div>
              
              {/* Status Messages */}
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Full Name*"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="example@email.com*"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="xxxx-xxxxxxx*"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your Message*"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'btn-primary'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Clinic Info */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="card p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Our Office</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Address</p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Shop no 02 Main PWD Road Near London Baker<br />
                        Opposite Sitara Studio, Islamabad
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Phone</p>
                      <p className="text-gray-600 text-sm">03001232863</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Email</p>
                      <p className="text-gray-600 text-sm">info@hearingclinic.pk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Monday', hours: '10:00am – 10:00pm' },
                    { day: 'Tuesday', hours: '10:00am – 10:00pm' },
                    { day: 'Wednesday', hours: '10:00am – 10:00pm' },
                    { day: 'Thursday', hours: '10:00am – 10:00pm' },
                    { day: 'Friday', hours: '10:00am – 10:00pm' },
                    { day: 'Saturday', hours: '10:00am – 10:00pm' },
                    { day: 'Sunday', hours: '10:00am – 10:00pm' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-800 text-sm">{schedule.day}</span>
                      <span className="text-gray-600 text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Section - Moved below the main grid */}
          <div className="mt-8">
            <div className="card p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl max-w-md mx-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Quick Contact</h3>
              <div className="space-y-3">
                <a href="tel:+923001232863" className="btn-primary w-full text-center block py-3">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Us Now
                </a>
                <a href="/appointment" className="btn-secondary w-full text-center block py-3">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;