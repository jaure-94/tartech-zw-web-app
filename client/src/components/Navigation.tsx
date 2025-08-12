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
                <button className="nav-font nav-link-hover font-medium text-industrial-black hover:text-construction-yellow flex items-center">
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`services-dropdown absolute top-full left-0 mt-2 w-56 rounded-xl transition-all duration-300 ${
                  servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={handleNavClick}>
                      <span className="services-dropdown-item nav-font block px-5 py-4 text-sm font-medium text-industrial-black hover:bg-construction-yellow hover:text-white cursor-pointer first:rounded-t-xl last:rounded-b-xl">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/contact" onClick={handleNavClick}>
                <Button className="bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold">
                  GET QUOTE
                </Button>
              </Link>
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

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu" 
        className="md:hidden bg-white border-t opacity-0 invisible transition-all duration-300 transform -translate-y-4"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick}>
              <span 
                className="block px-3 py-2 text-base font-bold text-industrial-black hover:text-construction-yellow transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </span>
            </Link>
          ))}
          
          <div className="px-3 py-2 text-base font-bold text-industrial-black">SERVICES</div>
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick}>
              <span 
                className="block px-6 py-2 text-sm text-industrial-gray hover:text-construction-yellow transition-colors duration-300 cursor-pointer"
              >
                - {link.label}
              </span>
            </Link>
          ))}
          
          <Link href="/contact" onClick={handleNavClick}>
            <Button 
              className="mx-3 mt-4 w-[calc(100%-1.5rem)] bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold"
            >
              GET QUOTE
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
