import { useState } from 'react';
import { motion } from 'motion/react';
import { Smile, Heart, ShieldCheck, Gamepad2, Sparkles, Star, CheckCircle2, CalendarHeart, Gift, Stethoscope } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';
import PageTransition from '../components/PageTransition';

export default function Kids() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-blue-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-full md:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-yellow-950 font-bold text-sm mb-6 shadow-md"
                >
                  <Smile className="w-5 h-5 mr-2" />
                  Pediatric Dentistry
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
                >
                  Making Dental Visits <span className="text-blue-600 relative inline-block">
                    Fun & Fearless
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-6 -right-8 w-10 h-10 md:w-12 md:h-12 text-yellow-400"
                    >
                      <Sparkles className="w-full h-full" />
                    </motion.div>
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
                >
                  We specialize in gentle, compassionate dental care for children of all ages. Our kid-friendly environment ensures your little ones leave with a big smile.
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg md:text-xl hover:bg-blue-700 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Book a Kid's Appointment
                </motion.button>
              </div>
              <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
                <motion.img 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="Happy child at dentist" 
                  className="rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full"
                />
                
                {/* Playful floating elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl z-20"
                >
                  <Star className="w-10 h-10 md:w-12 md:h-12 text-yellow-900 fill-yellow-900" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-emerald-400 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-xl z-20 rotate-12"
                >
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-emerald-900 fill-emerald-900" />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-yellow-300 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-blue-300 opacity-40 blur-3xl"></div>
        </section>

        {/* Why choose us for kids */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Kid-Approved</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Why Kids Love Us</h3>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">We've designed every aspect of our pediatric care to be welcoming, engaging, and completely stress-free.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-yellow-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-center border-4 border-yellow-100 shadow-lg"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-400 text-yellow-900 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-6 shadow-md">
                  <Gamepad2 className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">Playful Environment</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">Waiting areas equipped with games, books, and activities to keep them entertained and relaxed.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-blue-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-center border-4 border-blue-100 shadow-lg md:-mt-8 md:mb-8"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 -rotate-6 shadow-md">
                  <Heart className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">Gentle Approach</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">Our staff is trained to explain procedures in kid-friendly terms to eliminate fear and build trust.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-center border-4 border-emerald-100 shadow-lg"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-400 text-emerald-900 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-6 shadow-md">
                  <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">Preventive Care</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">Focus on education, sealants, and fluoride treatments to prevent cavities early and ensure healthy growth.</p>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2U1ZTdlYiIgLz4KCTwvc3ZnPg==')] opacity-50"></div>
          </div>
        </section>

        {/* Specialized Pediatric Services */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Specialized Pediatric Care</h3>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Everything your child needs for a healthy, growing smile.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Dental Sealants", desc: "A protective coating applied to the chewing surfaces of back teeth to prevent cavities.", icon: ShieldCheck, color: "text-blue-600 bg-blue-100" },
                { title: "Fluoride Treatments", desc: "Strengthens tooth enamel and makes teeth more resistant to decay.", icon: Sparkles, color: "text-emerald-600 bg-emerald-100" },
                { title: "Space Maintainers", desc: "Keeps space open for permanent teeth if a baby tooth is lost too early.", icon: Stethoscope, color: "text-purple-600 bg-purple-100" },
                { title: "Habit Counseling", desc: "Gentle guidance to help children stop thumb sucking or pacifier use.", icon: Smile, color: "text-yellow-600 bg-yellow-100" }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-4 md:gap-6"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.color}`}>
                    <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* First Visit Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Welcome</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">What to Expect on the First Visit</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Warm Welcome", desc: "A friendly greeting and a tour of our fun, kid-centric office.", icon: Smile },
                { step: "2", title: "Gentle Exam", desc: "A non-invasive check of their teeth, gums, and jaw development.", icon: Stethoscope },
                { step: "3", title: "Cleaning", desc: "A soft cleaning to remove plaque and polish their new teeth.", icon: Sparkles },
                { step: "4", title: "Prize Time!", desc: "Every brave patient gets to pick a prize from our treasure chest.", icon: Gift }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="relative text-center p-6"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 relative z-10 border-4 border-white shadow-md">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm md:text-base">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-blue-100 -z-10"></div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-yellow-950 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5 mr-2" />
                Schedule Their First Visit
              </motion.button>
            </div>
          </div>
        </section>

        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </PageTransition>
  );
}
