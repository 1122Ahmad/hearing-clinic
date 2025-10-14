import { useState } from 'react';

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const result = await response.json();
      console.log('Response data:', result);

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">
        Looking for a Hearing Aid Center Near You?
      </h2>
      <h3 className="text-xl text-blue-700 border-b border-green-500 pb-2">
        Contact The Hearing Clinic Islamabad
      </h3>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h4 className="text-lg font-semibold text-blue-700">Send Us a Message</h4>

          {/* Status Messages */}
          {submitStatus && (
            <div className={`p-4 rounded-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="xxxx-xxxxxxx*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="Your Message*"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-700 hover:bg-blue-800'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Clinic Info */}
        <div className="p-6 border rounded-md bg-white shadow-sm">
          <h4 className="text-lg font-semibold text-blue-700">Our Office</h4>

          <p className="text-gray-700 mt-4">
            <strong>Address:</strong> Shop no 02 Main PWD Road Near London Baker Opposite Sitara Studio<br />
            Islamabad
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Phone:</strong> 03001232863
          </p>

          <h5 className="mt-6 font-semibold text-blue-700">Business Hours</h5>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>Monday: 10:00am – 10:00pm</li>
            <li>Tuesday: 10:00am – 10:00pm</li>
            <li>Wednesday: 10:00am – 10:00pm</li>
            <li>Thursday: 10:00am – 10:00pm</li>
            <li>Friday: 10:00am – 10:00pm</li>
            <li>Saturday: 10:00am – 10:00pm</li>
            <li>Sunday: 10:00am – 10:00pm</li>
          </ul>
        </div>
      </div>



    </div>
  );
};

export default Contact;