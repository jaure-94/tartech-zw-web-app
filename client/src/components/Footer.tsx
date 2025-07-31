import { Link } from 'wouter';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-industrial-black border-t border-construction-yellow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black text-white mb-4">
              TARTECH <span className="text-construction-yellow">CONTRACTING</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Zimbabwe's premier industrial contractor delivering excellence in construction, mining, and agricultural sectors for over three decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold text-construction-yellow mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/mining">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Mining Operations
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/construction">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Construction
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/agriculture">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Agriculture
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Get Quote
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-construction-yellow mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Who We Are
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Safety Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tartech Contracting. All rights reserved. | Engineering Excellence in Harsh Environments
          </p>
        </div>
      </div>
    </footer>
  );
}
