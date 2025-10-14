import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Contact Bar */}
      <div
        style={{ backgroundColor: "#1D4ED8" }}
        className="text-white px-4 py-2 flex justify-between items-center text-sm"
      >
        <div>
          <p className="font-medium">Contact at</p>
          <p className="text-xs">0515975059</p>
        </div>
        <div className="flex space-x-3">
          <a
            href="tel:+923001234567"
            className="bg-[#DC2626] text-white px-3 py-1 rounded-md font-semibold hover:bg-white hover:text-[#DC2626] border border-white transition"
          >
            Call or Text Us
          </a>
          <a
            href="/contact"
            className="bg-[#DC2626] text-white px-3 py-1 rounded-md font-semibold hover:bg-white hover:text-[#DC2626] border border-white transition"
          >
            Schedule Appointment
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Clinic Name */}
          <Link to="/" className="flex items-center mb-3 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="ml-3 text-xl font-bold text-[#1D4ED8]">
              Hearing Clinic Islamabad
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm font-medium">
            <Link to="/services" className="text-gray-700 hover:text-[#1D4ED8] transition">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#1D4ED8] transition">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#1D4ED8] transition">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;