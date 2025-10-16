import { Home, Wrench, Info, Ear, Phone, Mail, MapPin, Calendar, Instagram, Facebook, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Hearing Clinic Islamabad</h3>
            <p className="text-blue-100 mb-4 leading-relaxed text-sm">
              Professional hearing care services with state-of-the-art technology and personalized treatment plans.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+923001234567" className="btn-accent text-xs px-3 py-2 flex items-center justify-center gap-2">
                <Phone className="w-3 h-3" />
                Call Us Now
              </a>
              <a href="/appointment" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-800 text-xs px-3 py-2 flex items-center justify-center gap-2">
                <Calendar className="w-3 h-3" />
                Book Appointment
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-blue-100 hover:text-white transition flex items-center text-sm sm:text-base">
                <Home className="w-4 h-4 mr-2" />
                Home
              </a></li>
              <li><a href="/services" className="text-blue-100 hover:text-white transition flex items-center text-sm sm:text-base">
                <Wrench className="w-4 h-4 mr-2" />
                Services
              </a></li>
              <li><a href="/about" className="text-blue-100 hover:text-white transition flex items-center text-sm sm:text-base">
                <Info className="w-4 h-4 mr-2" />
                About Us
              </a></li>
              <li><a href="/hearingLoss" className="text-blue-100 hover:text-white transition flex items-center text-sm sm:text-base">
                <Ear className="w-4 h-4 mr-2" />
                Hearing Loss
              </a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white transition flex items-center text-sm sm:text-base">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/hearingclinic.isb?igsh=MnVkYWN6YTc2M2U5&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 mr-3" />
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@hearingclinic7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="text-sm sm:text-base">TikTok</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1DFDtXfrVN/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 mr-3" />
                <span className="text-sm sm:text-base">Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <a 
                  href="tel:+923001232863" 
                  className="text-sm sm:text-base hover:text-white transition-colors"
                >
                  +92 300 123 2863
                </a>
              </div>
              <div className="flex items-center">
                <PhoneCall className="w-4 h-4 mr-3" />
                <a 
                  href="tel:+92515975059" 
                  className="text-sm sm:text-base hover:text-white transition-colors"
                >
                  0515975059
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <a 
                  href="mailto:info@hearingclinicislamabad.com" 
                  className="text-sm sm:text-base hover:text-white transition-colors"
                >
                  info@hearingclinicislamabad.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base leading-relaxed">
                  <div>Shop no 02 Main PWD Road</div>
                  <div>Near London Baker</div>
                  <div>Opposite Sitara Studio</div>
                </div>
              </div>
            </div>
          </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-blue-200 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Hearing Clinic Islamabad. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs sm:text-sm text-center sm:text-right">
            Professional Hearing Care Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;