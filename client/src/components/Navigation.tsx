import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import tartechLogo from '@assets/tartech-logo-cropped_1754990578081.png';

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    scrollToTop();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      if (newState) {
        gsap.to(mobileMenu, {
          duration: 0.3,
          opacity: 1,
          visibility: 'visible',
          y: 0,
          ease: "power2.out"
        });
      } else {
        gsap.to(mobileMenu, {
          duration: 0.3,
          opacity: 0,
          visibility: 'hidden',
          y: -16,
          ease: "power2.in"
        });
      }
    }
  };

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'WHO WE ARE' },
    { href: '/contact', label: 'CONTACT' }
  ];

  const serviceLinks = [
    { href: '/services', label: 'Borehole Drilling' },
    { href: '/services/mining', label: 'Mining' },
    { href: '/services/construction', label: 'Construction' },
    { href: '/services/agriculture', label: 'Agriculture' }
  ];

  return (
    <nav id="navbar" className="nav-transition fixed top-0 left-0 right-0 z-50 bg-white/45 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 py-3 px-2" onClick={handleNavClick}>
            <img 
              src={tartechLogo} 
              alt="Tartech Contracting - Industrial Solutions for Mining, Construction & Agriculture"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={handleNavClick}>
                  <span className={`nav-font nav-link-hover font-medium text-industrial-black hover:text-construction-yellow cursor-pointer ${
                    location === link.href ? 'text-construction-yellow' : ''
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="nav-font nav-link-hover font-medium text-industrial-black hover:text-construction-yellow flex items-center transition-all duration-300">
                  SERVICES 
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-all duration-300 ${
                      servicesDropdownOpen ? 'rotate-180 text-construction-yellow' : ''
                    }`} 
                  />
                </button>
                
                {/* Enhanced Professional Dropdown */}
                <div className={`absolute top-full left-0 mt-3 w-72 transition-all duration-400 ease-out transform ${
                  servicesDropdownOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'
                }`}>
                  
                  {/* Backdrop with sophisticated blur and gradient */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
                    
                    {/* Premium header section */}
                    <div className="bg-gradient-to-r from-construction-yellow/8 via-construction-yellow/5 to-transparent px-6 py-4 border-b border-construction-yellow/15">
                      <h3 className="nav-font text-sm font-semibold text-industrial-black tracking-wider uppercase">
                        Our Services
                      </h3>
                      <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-construction-yellow to-construction-yellow/50 rounded-full"></div>
                    </div>
                    
                    {/* Service links with sophisticated animations */}
                    <div className="py-2">
                      {serviceLinks.map((link, index) => (
                        <Link key={link.href} href={link.href} onClick={handleNavClick}>
                          <div 
                            className="group relative overflow-hidden mx-2 rounded-xl transition-all duration-400 ease-out hover:bg-gradient-to-r hover:from-construction-yellow/8 hover:to-construction-yellow/3 hover:shadow-lg cursor-pointer"
                            style={{ 
                              animationDelay: `${index * 50}ms`,
                              animation: servicesDropdownOpen ? 'slideInRight 0.3s ease-out forwards' : ''
                            }}
                          >
                            {/* Animated background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow/20 via-construction-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></div>
                            
                            {/* Content container */}
                            <div className="relative z-10 px-4 py-4 flex items-center">
                              {/* Service indicator dot */}
                              <div className="w-2 h-2 rounded-full bg-construction-yellow/30 group-hover:bg-construction-yellow group-hover:scale-125 transition-all duration-300 mr-4 flex-shrink-0"></div>
                              
                              {/* Service text */}
                              <div className="flex-1">
                                <span className="nav-font text-base font-medium text-industrial-black group-hover:text-construction-yellow transition-all duration-300 tracking-wide">
                                  {link.label}
                                </span>
                              </div>
                              
                              {/* Hover arrow indicator */}
                              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                <div className="w-1 h-4 bg-gradient-to-b from-construction-yellow to-construction-yellow/70 rounded-full"></div>
                              </div>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-construction-yellow/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Elegant bottom accent */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-construction-yellow/30 to-transparent"></div>
                  </div>
                  
                  {/* Subtle drop shadow enhancement */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-2xl -z-10 translate-y-1"></div>
                </div>
              </div>


            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              className="text-industrial-black hover:text-construction-yellow"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Redesigned */}
      <div 
        id="mobile-menu" 
        className="md:hidden bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl border-t border-construction-yellow/20 shadow-2xl opacity-0 invisible transition-all duration-300 transform -translate-y-4"
      >
        <div className="px-6 py-6 space-y-2">
          {/* Main Navigation Links */}
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick}>
              <div 
                className="group relative overflow-hidden rounded-xl px-4 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-construction-yellow/8 hover:to-construction-yellow/12 hover:shadow-lg cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="nav-font relative z-10 text-lg font-light text-industrial-black group-hover:text-construction-yellow transition-all duration-300 tracking-wide">
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-construction-yellow to-construction-yellow/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleMobileServices}
              className="group w-full relative overflow-hidden rounded-xl px-4 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-construction-yellow/8 hover:to-construction-yellow/12 hover:shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="nav-font text-lg font-light text-industrial-black group-hover:text-construction-yellow transition-all duration-300 tracking-wide">
                  SERVICES
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-industrial-black group-hover:text-construction-yellow transition-all duration-300 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-construction-yellow to-construction-yellow/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
            
            {/* Services Submenu */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 mt-2 space-y-1 border-l-2 border-construction-yellow/20 pl-4">
                {serviceLinks.map((link, index) => (
                  <Link key={link.href} href={link.href} onClick={handleNavClick}>
                    <div 
                      className="group relative overflow-hidden rounded-lg px-3 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-construction-yellow/5 hover:to-construction-yellow/8 cursor-pointer"
                      style={{ animationDelay: `${(index + 3) * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="nav-font relative z-10 text-base font-light text-industrial-gray group-hover:text-construction-yellow transition-all duration-300">
                        {link.label}
                      </span>
                      <div className="absolute left-0 top-1/2 w-1 h-0 bg-construction-yellow transform -translate-y-1/2 group-hover:h-6 transition-all duration-300"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border Accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-construction-yellow to-transparent"></div>
      </div>
    </nav>
  );
}
