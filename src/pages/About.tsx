import { motion } from 'motion/react';
import { Heart, Target, Shield, Lightbulb, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/config';
import { TestimonialCarousel } from '../components/ui/profile-card-testimonial-carousel';

export default function About() {
  const principles = [
    {
      title: "Patient-Centric Care",
      description: "Your comfort and health are our top priorities.",
      icon: Heart,
      color: "bg-rose-100 text-rose-600"
    },
    {
      title: "Excellence in Dentistry",
      description: "We strive for perfection in every treatment.",
      icon: Target,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Integrity & Transparency",
      description: "Honest advice and clear pricing.",
      icon: Shield,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Continuous Innovation",
      description: "Utilizing the latest technology for better outcomes.",
      icon: Lightbulb,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="Clinic Team" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">You're in the best hands.</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">About Our Hospital</h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                Our team of highly qualified dentists and oral hygienists provide exceptional quality dental services, staying up-to-date with the latest advances. They listen to your concerns, give written treatment options and find the best way to solve any dental issues.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                We offer early bird and after-hours appointments, SMS reminders and sedation dentistry. Our expertise in general dentistry is combined with extensive experience in the latest cosmetic dentistry techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Our Purpose</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Mission & Vision</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                "To provide the highest quality dental care in a comfortable, relaxing environment, ensuring every patient leaves with a confident smile."
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-emerald-100"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                "To be the leading dental care provider in Maharashtra, known for our expertise, compassion, and commitment to patient well-being."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Guiding Principles</h3>
            <p className="text-base md:text-lg text-slate-600">The foundation of our commitment to your dental health.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl transition-all bg-white"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${principle.color}`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h4>
                  <p className="text-slate-600 flex-grow text-base">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet The Specialists */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-3">Our Experts</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Meet The Specialists</h3>
            <p className="text-base md:text-lg text-slate-600">Highly qualified specialists dedicated to providing the best care possible.</p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
    </motion.div>
  );
}
