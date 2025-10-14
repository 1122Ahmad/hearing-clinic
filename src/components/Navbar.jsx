import { Link } from "react-router-dom";
import { ChevronDown, Phone, Calendar, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Clinic Name */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto sm:h-14 md:h-16" />
            <div className="ml-3">
              <h1 className="text-lg sm:text-xl font-bold text-blue-800">Hearing Clinic Islamabad</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Professional Hearing Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link to="/" className="text-gray-700 hover:text-blue-800 transition py-2 font-semibold">Home</Link>
              <Link to="/hearingLoss" className="text-gray-700 hover:text-blue-800 transition py-2">Hearing Loss</Link>
              
              {/* Hearing Aids Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout) {
                    clearTimeout(dropdownTimeout);
                    setDropdownTimeout(null);
                  }
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsDropdownOpen(false);
                  }, 150);
                  setDropdownTimeout(timeout);
                }}
              >
                <button 
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-800 transition py-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Hearing Aids
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-100 z-[9999]">
                  <Link
                    to="/hearing-aids/faq"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    Hearing Aids FAQ
                  </Link>
                  <Link
                    to="/hearing-aids"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    Best Hearing Aids
                  </Link>
                  <Link
                    to="/hearing-aids/brands"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    Hearing Aid Brands
                  </Link>
                  <Link
                    to="/hearing-aids/otc"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    Over-the-Counter Hearing Aids
                  </Link>
                  </div>
                )}
              </div>

              <Link to="/services" className="text-gray-700 hover:text-blue-800 transition py-2">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-800 transition py-2">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition py-2">Contact Us</Link>
              
              {/* Action Buttons at the end */}
              <div className="flex items-center space-x-3 ml-4">
                <a
                  href="tel:+923001234567"
                  className="btn-accent text-sm px-4 py-2 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="/appointment"
                  className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-800 transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-blue-800 transition py-2 font-semibold">Home</Link>
              <Link to="/hearingLoss" className="text-gray-700 hover:text-blue-800 transition py-2">Hearing Loss</Link>
              
              {/* Mobile Hearing Aids Dropdown */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium py-2">Hearing Aids</div>
                <div className="ml-4 space-y-2">
                  <Link to="/hearing-aids/faq" className="block text-gray-600 hover:text-blue-800 transition py-1">
                    Hearing Aids FAQ
                  </Link>
                  <Link to="/hearing-aids" className="block text-gray-600 hover:text-blue-800 transition py-1">
                    Best Hearing Aids
                  </Link>
                  <Link to="/hearing-aids/brands" className="block text-gray-600 hover:text-blue-800 transition py-1">
                    Hearing Aid Brands
                  </Link>
                  <Link to="/hearing-aids/otc" className="block text-gray-600 hover:text-blue-800 transition py-1">
                    Over-the-Counter Hearing Aids
                  </Link>
                </div>
              </div>

              <Link to="/services" className="text-gray-700 hover:text-blue-800 transition py-2">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-800 transition py-2">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition py-2">Contact Us</Link>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+923001234567"
                  className="btn-accent text-sm px-4 py-3 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="/appointment"
                  className="btn-primary text-sm px-4 py-3 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
