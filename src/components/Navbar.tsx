import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clinicData } from '../data/config';
import AppointmentModal from './AppointmentModal';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'For Kids', path: '/kids' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-lg border-b border-blue-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Logo className="h-12" />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-300 relative ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-blue-100">
                <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-blue-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  {clinicData.phone}
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-blue-600 hover:bg-blue-50 focus:outline-none cursor-pointer transition-colors"
              >
                {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive(link.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-blue-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full text-center block px-4 py-3 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
