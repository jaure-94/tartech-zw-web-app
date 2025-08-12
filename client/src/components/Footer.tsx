import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import tartechLogo from '@assets/tartech-logo-cropped_1754990578081.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-industrial-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 py-2">
              <img 
                src={tartechLogo} 
                alt="Tartech Contracting"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Zimbabwe's premier industrial contractor delivering excellence in construction, mining, and agriculture with three decades of proven expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-construction-yellow mb-6">OUR SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/mining" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    Mining Operations
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/construction" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    Construction Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/agriculture" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    Agricultural Solutions
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                  Project Management
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                  Equipment Rental
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                  Maintenance & Repair
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-construction-yellow mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={scrollToTop}>
                  <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                  Safety Standards
                </span>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-construction-yellow mb-6">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Industrial Avenue<br />
                    Harare, Zimbabwe<br />
                    PO Box 456
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-construction-yellow flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+263 4 123 4567</p>
                  <p className="text-gray-300">+263 77 890 1234</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-yellow flex-shrink-0" />
                <p className="text-gray-300">info@tartechcontracting.co.zw</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-construction-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mon - Fri: 7:00 AM - 6:00 PM<br />
                    Sat: 8:00 AM - 4:00 PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Tartech Contracting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-construction-yellow transition-colors duration-300 cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}