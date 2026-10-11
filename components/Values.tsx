
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Sparkles, Target } from 'lucide-react';

const Values: React.FC = () => {
  const coreValues = [
    {
      title: 'Precision',
      description: 'We care about the smallest details to ensure robust digital solutions.',
      icon: <Target className="text-blue-600" size={24} />
    },
    {
      title: 'Scalability',
      description: 'Built to grow with your business, from local startups to global giants.',
      icon: <Zap className="text-amber-500" size={24} />
    },
    {
      title: 'Trust',
      description: 'Security and transparency are at the core of every service we launch.',
      icon: <ShieldCheck className="text-emerald-500" size={24} />
    },
    {
      title: 'Human-Centric',
      description: 'We build for humans, ensuring every interaction feels natural and fun.',
      icon: <Heart className="text-rose-500" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4 uppercase tracking-widest">
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Vision & Mission</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                  <Sparkles className="mr-2 text-blue-600" size={20} /> Vision
                </h3>
                <p className="text-slate-600 text-lg">
                  To become the global standard for intuitive digital tools, making professional-grade technology accessible and enjoyable for everyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                  <Target className="mr-2 text-blue-600" size={20} /> Mission
                </h3>
                <p className="text-slate-600 text-lg">
                  To engineer scalable digital infrastructures that empower developers and businesses to focus on creation rather than configuration.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:pl-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
