const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1D4ED8" }} className="text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left side text */}
        <p className="text-lg font-semibold mb-4 md:mb-0">
          Don’t Wait to Hear Better.
        </p>

        {/* Right side button */}
        <a
          href="tel:+923001234567"
          style={{ backgroundColor: "#DC2626" }}
          className="text-white px-5 py-2 rounded-md border border-white hover:bg-green-600 transition"
        >
          CALL OR TEXT US
        </a>
      </div>

    </footer>
    
  );
};

export default Footer;