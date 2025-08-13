import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import tartechLogoSymbol from '@assets/tartech-logo-symbol_1755071044733.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-industrial-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src={tartechLogoSymbol} 
                alt="Tartech Contracting - Industrial Excellence"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base max-w-sm">
              Zimbabwe's premier industrial contractor delivering excellence in construction, mining, and agriculture with three decades of proven expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-construction-yellow hover:text-industrial-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-construction-yellow mb-4 lg:mb-6">OUR SERVICES</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <Link href="/services/mining" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Mining Operations</span>
                </Link>
              </li>
              <li>
                <Link href="/services/construction" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Construction Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/agriculture" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Agricultural Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/services/borehole-drilling" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Borehole Drilling</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-construction-yellow mb-4 lg:mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <Link href="/" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={scrollToTop}>
                  <span className="footer-link text-sm lg:text-base">Contact</span>
                </Link>
              </li>
              <li>
                <span className="footer-link text-sm lg:text-base">Safety Standards</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-construction-yellow mb-4 lg:mb-6">CONTACT INFO</h3>
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    6 Beryl Road, Msasa<br />
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-construction-yellow mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm lg:text-base hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 881 520</p>
                  <p className="text-gray-300 text-sm lg:text-base hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 990 836</p>
                  <p className="text-gray-300 text-sm lg:text-base hover:text-construction-yellow transition-colors duration-300 cursor-pointer">+263 785 834 557</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-yellow flex-shrink-0" />
                <a href="mailto:info@tartech.co.zw" className="text-gray-300 text-sm lg:text-base hover:text-construction-yellow transition-colors duration-300">
                  info@tartech.co.zw
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-construction-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    <span className="block">Mon - Fri: 7:00 AM - 6:00 PM</span>
                    <span className="block">Sat: 8:00 AM - 4:00 PM</span>
                    <span className="block text-construction-yellow font-medium">Emergency: 24/7</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
              © 2025 Tartech Contracting. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
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