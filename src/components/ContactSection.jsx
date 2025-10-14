const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-16 px-4 md:px-6 text-center">
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-bold">The Hearing Clinic Islamabad</h2>
        <h3 className="text-xl font-semibold">Islamabad Office</h3>
        <p>Shop no 02 Main PWD Road Near London Baker Opposite Sitara Studio</p>
        <p>Islamabad</p>
        <p>
          <a href="tel:03001232863" className="underline hover:text-blue-200">
            03001232863
          </a>
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center mt-6">
          <input
            type="text"
            placeholder="Search…"
            className="w-2/3 px-4 py-2 rounded-l-md text-gray-800"
          />
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </button>
        </div>

        {/* Facebook Icon */}
        <div className="mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;