
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Activity, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden flex flex-col items-center">
      {/* Background elements - Subtle and minimalist */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50/50 border border-blue-100/50 mb-8"
          >
            Digital Excellence Redefined
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
            Simplifying digital life <br />
            <span className="gradient-text">one byte at a time.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed font-normal">
            KlyroByte engineers high-performance tools that transform complex operations into 
            seamless, intuitive experiences for the modern enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center shadow-xl hover:shadow-2xl active:scale-95">
              Start Building
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center">
              Our Products
              <ChevronRight className="ml-1" size={20} />
            </button>
          </div>
        </motion.div>

        {/* Minimalist Trust/Signal indicators below CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-slate-400 border-t border-slate-100 pt-12"
        >
          <div className="flex items-center space-x-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Activity size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-300">Availability</p>
              <p className="text-sm font-bold text-slate-700">99.9% Uptime</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
              <Zap size={16} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-300">Performance</p>
              <p className="text-sm font-bold text-slate-700">&lt; 10ms Latency</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
              <Shield size={16} className="text-slate-400 group-hover:text-green-500 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-300">Security</p>
              <p className="text-sm font-bold text-slate-700">AES-256 Encrypted</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative ultra-subtle line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
