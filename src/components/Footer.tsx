import { Link } from 'react-router-dom';
import { clinicData } from '../data/config';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="h-12 mb-6" />
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {clinicData.tagline}
            </p>
            <div className="flex space-x-4">
              {Object.entries(clinicData.socials).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <span className="sr-only">{platform}</span>
                  {/* Simple placeholder for social icons */}
                  <div className="w-4 h-4 bg-current rounded-sm opacity-80"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Services</Link></li>
              <li><Link to="/kids" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>For Kids</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Services</h3>
            <ul className="space-y-3">
              {clinicData.services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-400 mt-1">{clinicData.address}</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-400">{clinicData.phone}</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-400">{clinicData.email}</span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <Clock className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-400 mt-1">{clinicData.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; Smile Care Hospital. All rights reserved 2015.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-slate-600 font-medium">Designed for Dental Professionals by - Infinity Innovations</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
