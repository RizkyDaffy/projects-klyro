
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, Headset, Lock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Enterprise-Grade Security',
      desc: 'Bank-level encryption and SOC2 compliant processes protect all user data.',
      icon: <Lock className="text-blue-600" size={24} />
    },
    {
      title: 'Ultra-Low Latency',
      desc: 'Our distributed edge network ensures your requests are processed in milliseconds.',
      icon: <Zap className="text-blue-600" size={24} />
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden fees. You only pay for what you actually use, with full visibility.',
      icon: <DollarSign className="text-blue-600" size={24} />
    },
    {
      title: '24/7 Expert Support',
      desc: 'Direct access to engineers who actually built the platform, not just bot support.',
      icon: <Headset className="text-blue-600" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-blue-400 uppercase mb-4">Why KlyroByte</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A commitment to <br /> reliability & trust.
            </h3>
            <div className="space-y-10">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-white/10">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                    <p className="text-slate-400">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 w-full max-w-md"
             >
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-400">System Performance</span>
                      <span className="text-sm font-bold text-blue-400">Optimal</span>
                   </div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        className="h-full bg-blue-500"
                      />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                         <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Response Time</p>
                         <p className="text-2xl font-bold">18ms</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                         <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Global Uptime</p>
                         <p className="text-2xl font-bold">99.99</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
