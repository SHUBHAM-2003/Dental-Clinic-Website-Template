import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, Clock, Award, Sparkles, Heart, Stethoscope, Activity, Smile, Baby, HeartPulse } from 'lucide-react';
import { clinicData } from '../data/config';
import AppointmentModal from '../components/AppointmentModal';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';

const iconMap: Record<string, any> = {
  Stethoscope, Sparkles, Smile, Activity, Baby, HeartPulse
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % clinicData.heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-4 md:pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
          <div className="relative min-h-[85vh] md:min-h-[80vh] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col justify-center pb-24 md:pb-32">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={clinicData.heroImages[currentImageIndex]}
                alt="Clinic Background"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/40 md:to-transparent" />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-[10%] w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 flex items-center justify-center shadow-xl hidden md:flex"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-40 right-[20%] w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-xl hidden md:flex"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>

            <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24 mt-12 md:mt-0">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-xs md:text-sm mb-6 border border-white/30"
                >
                  <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
                  Top Rated Dental Clinic in Sambhajinagar
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
                >
                  {clinicData.tagline}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-blue-50 mb-10 max-w-xl leading-relaxed"
                >
                  Experience world-class dental care in a soothing, modern environment. We bring healthy smiles to your entire family.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-yellow-950 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg cursor-pointer"
                  >
                    Book an Appointment
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Link 
                      to="/services"
                      className="block w-full text-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-colors shadow-lg"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Bar - Adjusted margin to prevent overlap issues on mobile */}
          <div className="relative -mt-16 md:-mt-24 z-20 max-w-5xl mx-auto px-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-50 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {clinicData.stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-blue-50/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinic Interior" 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-yellow-400 p-6 md:p-8 rounded-[2rem] shadow-xl max-w-[200px] md:max-w-[250px] border-4 border-white"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                    </div>
                    <div className="font-bold text-yellow-950 text-lg md:text-xl">Certified</div>
                  </div>
                  <p className="text-yellow-900 font-medium leading-tight text-sm md:text-base">Top Dental Professionals in Maharashtra</p>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 mt-8 lg:mt-0"
              >
                <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Welcome to {clinicData.name}</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Your Smile is Our Top Priority</h3>
                <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                  Located in the heart of Sambhajinagar, we are committed to providing exceptional dental care in a relaxing and comfortable environment. Our modern clinic is designed to make you feel at ease from the moment you walk in.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Comprehensive dental care for all ages",
                    "Strict sterilization and hygiene protocols",
                    "Transparent pricing with no hidden costs",
                    "Comfortable, anxiety-free environment"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-slate-700 font-medium"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-md">
                    Learn more about us <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Comprehensive Dental Services</h3>
              <p className="text-base md:text-lg text-slate-600">Advanced treatments tailored to your unique needs, delivered with care and precision.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clinicData.services.slice(0, 5).map((service, i) => {
                const Icon = iconMap[service.icon] || Star;
                const isLarge = i === 0 || i === 4;
                
                return (
                  <motion.div 
                    key={service.id} 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl transition-all ${isLarge ? 'md:col-span-2' : 'col-span-1'} ${service.color.split(' ')[0]} bg-opacity-20`}
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:bg-white/60 transition-all"></div>
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm ${service.color.split(' ')[1]}`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow text-base md:text-lg">{service.description}</p>
                    <Link to="/services" className={`inline-flex items-center font-bold ${service.color.split(' ')[1]} group-hover:underline`}>
                      Explore Treatment <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center bg-slate-900 text-white col-span-1 md:col-span-3 lg:col-span-1 shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">Need something else?</h3>
                <p className="text-slate-400 mb-8 text-sm md:text-base">We offer a wide range of specialized treatments.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Link to="/services" className="block px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors w-full">
                    View All Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Kids Teaser Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            ></motion.div>
            <motion.div 
              animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            ></motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 border border-white/20 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-yellow-950 font-bold text-sm mb-6">
                    <Smile className="w-4 h-4 mr-2" />
                    Pediatric Dentistry
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Making Dental Visits Fun & Fearless</h2>
                  <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                    We specialize in gentle, compassionate dental care for children. Our kid-friendly environment ensures your little ones leave with a big smile.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                    <Link to="/kids" className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg">
                      Discover Kids Care <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
                <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                  <motion.img 
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy child at dentist" 
                    className="rounded-[2rem] shadow-2xl border-4 border-white/30 rotate-3 transition-all duration-500"
                  />
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-900 fill-yellow-900" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Our Experts</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Meet Your Dentists</h3>
              <p className="text-base md:text-lg text-slate-600">Highly qualified specialists dedicated to providing the best care possible.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {clinicData.dentists.map((dentist, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col"
                >
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <img src={dentist.image} alt={dentist.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)} 
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                      >
                        Book with {dentist.name.split(' ')[1]}
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{dentist.name}</h4>
                    <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">{dentist.qualifications}</p>
                    <p className="text-slate-600 mb-6 flex-grow text-sm md:text-base">{dentist.description}</p>
                    <div className="flex items-center text-xs md:text-sm font-bold text-slate-500 bg-slate-50 inline-flex px-4 py-2 rounded-lg w-fit">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      {dentist.experience} Experience
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Testimonials</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">What Our Patients Say</h3>
              <p className="text-slate-600 text-base md:text-lg">Trusted by thousands of happy smiles in Sambhajinagar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Priya M.", text: "The best dental experience I've ever had. The clinic is spotless and the staff is incredibly welcoming. Highly recommend Dr. Sharma!" },
                { name: "Rahul S.", text: "Got my braces done here. The team is fantastic and explained the whole process clearly. My smile has never looked better." },
                { name: "Sneha K.", text: "My kids used to be terrified of the dentist, but Dr. Deshmukh made them feel so comfortable! Now they actually look forward to visits." }
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-blue-50 p-6 md:p-8 rounded-[2rem] relative"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex text-yellow-400 mb-4 md:mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 mb-6 md:mb-8 text-base md:text-lg italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg md:text-xl mr-4">
                      {t.name.charAt(0)}
                    </div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </PageTransition>
  );
}
