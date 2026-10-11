
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Otpnesia saved us weeks of development time. It's the most reliable OTP service we've ever used.",
      author: "Sarah Chen",
      role: "CTO, Fintech Solutions",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "Bisakode is a game changer for hiring. We found our top senior dev through one of their bounty challenges.",
      author: "Marcus Thorne",
      role: "Engineering Manager, CloudScale",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "KlyroByte brings a level of design polish that is rare in the developer tools space.",
      author: "Elena Rodriguez",
      role: "Product Designer, DevFlow",
      avatar: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by 1,000+ companies globally</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale mt-8">
             <span className="text-2xl font-bold">GOOGLE</span>
             <span className="text-2xl font-bold">STRIPE</span>
             <span className="text-2xl font-bold">AIRBNB</span>
             <span className="text-2xl font-bold">GITHUB</span>
             <span className="text-2xl font-bold">VERCEL</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col"
            >
              <p className="text-lg text-slate-700 mb-8 italic">"{t.quote}"</p>
              <div className="mt-auto flex items-center">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
