import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { clinicData } from '../data/config';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-6"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
              We're Here for You
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              We're here to help you achieve your best smile. Reach out to us for appointments, inquiries, or emergencies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 relative z-10">Get in Touch</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">307, Akshaydeep Plaza, Near CIDCO Bus Stand, Nagpur-Aurangabad-Mumbai Hwy, Cidco, Aurangabad, Maharashtra 431003</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                    <p className="text-slate-600 text-lg font-medium">0240 248 5832</p>
                    <p className="text-sm text-slate-500 mt-1">For emergencies, call us directly.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                    <p className="text-slate-600 text-lg">smilecareindia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
                    <p className="text-slate-600 text-lg">Mon–Sat: 10:30 AM–1:00 PM and 4:00 PM–8:00 PM | Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-50 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 relative z-10">Send a Message</h2>
              
              <div className="relative z-10 h-full">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                      <Send className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                        <input type="text" id="name" required className="w-full border border-slate-200 bg-slate-50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="contactNo" className="block text-sm font-bold text-slate-700 mb-2">Contact No</label>
                        <input type="tel" id="contactNo" required className="w-full border border-slate-200 bg-slate-50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Your Phone Number" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-bold text-slate-700 mb-2">Reason</label>
                      <input type="text" id="reason" required className="w-full border border-slate-200 bg-slate-50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Reason for contact" />
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-sm font-bold text-slate-700 mb-2">Comment</label>
                      <textarea id="comment" rows={5} required className="w-full border border-slate-200 bg-slate-50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full flex items-center justify-center px-8 py-5 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer uppercase tracking-wider"
                    >
                      {formStatus === 'submitting' ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                      ) : null}
                      {formStatus === 'submitting' ? 'Sending...' : 'SEND'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white h-[500px] relative z-20"
          >
            <iframe 
              src={clinicData.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
