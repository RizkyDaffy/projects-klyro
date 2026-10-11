
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-sm font-bold tracking-wider text-blue-400 uppercase mb-4">Careers</h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Come build the future of digital life.</h3>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  We're a remote-first company looking for passionate engineers, designers, and thinkers who want to make the digital world a simpler place.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                     <Users size={18} className="text-blue-400" />
                     <span className="text-sm font-medium">10+ Open Roles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                     <span className="text-sm font-medium">Hiring Remotely</span>
                  </div>
                </div>
             </div>
             <div className="lg:text-right">
                <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/25 inline-flex items-center group">
                  See All Positions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
