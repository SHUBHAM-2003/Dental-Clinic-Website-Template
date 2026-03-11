import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, User, Phone, Stethoscope } from 'lucide-react';
import { clinicData } from '../data/config';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
              aria-hidden="true" 
              onClick={onClose}
            ></motion.div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="inline-block align-bottom bg-white rounded-[2rem] text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-blue-100"
            >
              <div className="bg-white px-6 pt-8 pb-6 sm:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2" id="modal-title">
                      Book Appointment
                    </h3>
                    <p className="text-base text-slate-500 mb-8">
                      Fill out the form below and our team will get back to you to confirm your appointment.
                    </p>

                    {status === 'success' ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-8 text-center"
                      >
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-xl font-bold mb-2">Thank you!</p>
                        <p className="text-sm">Your appointment request has been received. We will contact you shortly.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                          <label htmlFor="name" className="sr-only">Full Name</label>
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-slate-400" />
                          </div>
                          <input type="text" id="name" required placeholder="Full Name" className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" />
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="phone" className="sr-only">Phone Number</label>
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-slate-400" />
                          </div>
                          <input type="tel" id="phone" required placeholder="Phone Number" className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" />
                        </div>

                        <div className="relative">
                          <label htmlFor="service" className="sr-only">Service Needed</label>
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Stethoscope className="h-5 w-5 text-slate-400" />
                          </div>
                          <select id="service" required defaultValue="" className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white appearance-none">
                            <option value="" disabled>Select a service...</option>
                            {clinicData.services.map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <label htmlFor="date" className="sr-only">Preferred Date</label>
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Calendar className="h-5 w-5 text-slate-400" />
                            </div>
                            <input type="date" id="date" required className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" />
                          </div>
                          <div className="relative">
                            <label htmlFor="time" className="sr-only">Preferred Time</label>
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Clock className="h-5 w-5 text-slate-400" />
                            </div>
                            <select id="time" required defaultValue="" className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white appearance-none">
                              <option value="" disabled>Time...</option>
                              <option>Morning</option>
                              <option>Afternoon</option>
                              <option>Evening</option>
                            </select>
                          </div>
                        </div>

                        <div className="pt-6">
                          <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full inline-flex justify-center items-center rounded-xl border border-transparent px-6 py-4 bg-blue-600 text-lg font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 cursor-pointer shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                          >
                            {status === 'submitting' ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                            ) : null}
                            {status === 'submitting' ? 'Submitting...' : 'Confirm Request'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
