const Contact = () => {
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
        <form className="space-y-6">
          <h4 className="text-lg font-semibold text-blue-700">Send Us a Message</h4>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="Ahmad Ali*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="ahmadali123@email.com*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="123.456.7890*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              className="w-full border rounded-md px-4 py-2 mt-1"
              placeholder="Your Message*"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Send Message
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