
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '50k+', icon: <Users size={20} /> },
    { label: 'Projects Completed', value: '1.2k', icon: <Briefcase size={20} /> },
    { label: 'Global Presence', value: '24+', icon: <Globe size={20} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">About the Company</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Driven by the passion to make digital complexity feel effortless.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2022, KlyroByte is a digital-first startup headquartered in the heart of tech innovation. We bridge the gap between heavy technical systems and user-friendly interfaces.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our team believes that software should be intuitive by design and fun by nature. We don't just solve problems; we redefine how those problems are approached in the digital age.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
               <img 
                 src="https://picsum.photos/seed/klyrobyte-team/800/800" 
                 alt="KlyroByte Office" 
                 className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
               <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-3xl font-bold italic">"Simplicity is the ultimate sophistication."</p>
               </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-slate-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
