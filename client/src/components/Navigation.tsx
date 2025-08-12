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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    scrollToTop();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
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
    <nav id="navbar" className="nav-transition fixed top-0 left-0 right-0 z-50 bg-white/45 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 py-2" onClick={handleNavClick}>
            <img 
              src={tartechLogo} 
              alt="Tartech Contracting - Industrial Solutions for Mining, Construction & Agriculture"
              className="h-8 lg:h-11 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={handleNavClick}>
                  <span className={`nav-font nav-link-hover text-sm xl:text-base text-industrial-black hover:text-construction-yellow cursor-pointer transition-colors duration-300 ${
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
                <button className="nav-font nav-link-hover text-sm xl:text-base text-industrial-black hover:text-construction-yellow flex items-center transition-colors duration-300">
                  SERVICES <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className={`services-dropdown absolute top-full left-0 mt-3 w-52 xl:w-56 rounded-xl shadow-xl transition-all duration-300 ${
                  servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={handleNavClick}>
                      <span className="services-dropdown-item nav-font block px-4 xl:px-5 py-3 xl:py-4 text-xs xl:text-sm text-industrial-black hover:bg-construction-yellow hover:text-white cursor-pointer first:rounded-t-xl last:rounded-b-xl transition-all duration-200">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Navigation (md-lg breakpoint) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-4">
              {navLinks.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} onClick={handleNavClick}>
                  <span className={`nav-font nav-link-hover text-sm text-industrial-black hover:text-construction-yellow cursor-pointer transition-colors duration-300 ${
                    location === link.href ? 'text-construction-yellow' : ''
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
              <button
                onClick={toggleMobileMenu}
                className="nav-font text-sm text-industrial-black hover:text-construction-yellow transition-colors duration-300"
              >
                MORE
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-industrial-black hover:text-construction-yellow focus:outline-none focus:text-construction-yellow p-2 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu" 
        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-construction-yellow/20 opacity-0 invisible transition-all duration-300 transform -translate-y-4 shadow-lg"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick}>
              <span 
                className={`nav-font block px-4 py-3 text-base rounded-lg transition-all duration-300 cursor-pointer ${
                  location === link.href 
                    ? 'bg-construction-yellow text-industrial-black font-medium' 
                    : 'text-industrial-black hover:bg-construction-yellow/10 hover:text-construction-yellow'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          
          <div className="pt-3 pb-2">
            <div className="nav-font px-4 py-2 text-sm font-medium text-construction-yellow uppercase tracking-wider">Services</div>
            <div className="space-y-1">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={handleNavClick}>
                  <span 
                    className="nav-font block px-6 py-2 text-sm text-industrial-gray hover:bg-construction-yellow/10 hover:text-construction-yellow rounded-md transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
