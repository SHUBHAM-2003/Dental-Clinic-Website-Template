import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, Stethoscope, Sparkles, Smile, Activity, Baby, HeartPulse } from 'lucide-react';
import { clinicData } from '../data/config';
import AppointmentModal from '../components/AppointmentModal';
import PageTransition from '../components/PageTransition';

const iconMap: Record<string, any> = {
  Stethoscope, Sparkles, Smile, Activity, Baby, HeartPulse
};

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <Star className="w-4 h-4 mr-2 text-blue-600 fill-blue-600" />
              Premium Dental Care
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              We offer a comprehensive range of dental services using the latest technology to ensure you receive the best possible care in a comfortable environment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicData.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Star;
              const colorClasses = service.color.split(' ');
              const bgClass = colorClasses[0];
              const textClass = colorClasses[1];

              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all flex flex-col group"
                >
                  <div className="p-8 flex-grow relative">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${bgClass} rounded-bl-full opacity-20 group-hover:scale-110 transition-transform`}></div>
                    
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${bgClass} ${textClass}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                    
                    <ul className="space-y-4">
                      {[
                        "Expert consultation & diagnosis",
                        "State-of-the-art equipment",
                        "Painless treatment options"
                      ].map((detail, i) => (
                        <li key={i} className="flex items-start text-base text-slate-700 font-medium">
                          <CheckCircle2 className={`w-5 h-5 ${textClass} mr-3 mt-0.5 flex-shrink-0`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-slate-50 border-t border-slate-100">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full py-4 px-4 bg-white border-2 ${textClass.replace('text-', 'border-')} ${textClass} rounded-xl font-bold hover:${bgClass} transition-colors cursor-pointer shadow-sm`}
                    >
                      Book this service
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </PageTransition>
  );
}
