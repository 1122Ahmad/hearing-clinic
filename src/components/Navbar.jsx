import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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
            href="/appointment"
            className="bg-[#DC2626] text-white px-3 py-1 rounded-md font-semibold hover:bg-white hover:text-[#DC2626] border border-white transition"
          >
            Schedule Appointment
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Clinic Name */}
          <Link to="/" className="flex items-center mb-3 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="ml-3 text-xl font-bold text-[#1D4ED8]">
              Hearing Clinic Islamabad
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm font-medium relative">
            <Link to="/hearingLoss" className="text-gray-700 hover:text-[#1D4ED8] transition py-2">Hearing Loss</Link>
            
            {/* Hearing Aids Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#1D4ED8] transition py-2">
                Hearing Aids
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 min-w-[200px] border border-gray-100 z-[9999]">
                <Link
                  to="/hearing-aids/faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#1D4ED8] hover:text-white transition"
                >
                  Hearing Aids FAQ
                </Link>
                <Link
                  to="/hearing-aids"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#1D4ED8] hover:text-white transition"
                >
                  Best Hearing Aids
                </Link>
                <Link
                  to="/hearing-aids/brands"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#1D4ED8] hover:text-white transition"
                >
                  Hearing Aid Brands
                </Link>
                <Link
                  to="/hearing-aids/otc"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#1D4ED8] hover:text-white transition"
                >
                  Over-the-Counter Hearing Aids
                </Link>
              </div>
            </div>

            <Link to="/services" className="text-gray-700 hover:text-[#1D4ED8] transition py-2">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#1D4ED8] transition py-2">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#1D4ED8] transition py-2">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
