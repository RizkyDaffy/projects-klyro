
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code, CheckCircle2, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">Our Ecosystem</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Products that empower creators</h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">
            We solve real-world problems with specialized tools designed for high performance and low friction.
          </p>
        </div>

        {/* Otpnesia */}
        <div className="relative mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-green-700 bg-green-50 mb-6">
                Featured Integration
              </div>
              <h4 className="text-5xl font-bold text-slate-900 mb-4">Otpnesia</h4>
              <p className="text-xl text-slate-600 mb-8 italic">"WhatsApp OTP made effortless."</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Integrating authentication shouldn't be a hurdle. Otpnesia provides a robust API for WhatsApp OTP verification with a fair pay-as-you-go quota model.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Direct WhatsApp API integration', 'Pay-as-you-go pricing (no monthly fees)', 'Node.js, Python, & Go SDKs', '99.9% Delivery success rate'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-green-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button className="bg-slate-900 text-white px-6 py-3.5 rounded-full font-semibold flex items-center hover:bg-slate-800 transition-all">
                  Documentation <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all">
                  Get Started
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 flex items-center justify-center border border-green-100">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                   <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                         <MessageSquare size={24} />
                      </div>
                      <div className="text-xs font-mono text-slate-400">STATUS: ACTIVE</div>
                   </div>
                   <div className="space-y-3">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-10 bg-green-50 rounded-lg mt-6 flex items-center px-4">
                         <span className="text-xs font-mono text-green-700">API_KEY: klyro_otp_••••••••</span>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bisakode */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-3xl p-8 flex items-center justify-center border border-blue-100">
                <div className="w-full max-w-md space-y-4">
                   <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-blue-400 shadow-2xl border border-slate-800">
                      <p><span className="text-purple-400">function</span> solveChallenge(id) {"{"}</p>
                      <p className="pl-4">  <span className="text-purple-400">const</span> reward = getBounty(id);</p>
                      <p className="pl-4">  <span className="text-green-400">// Happy coding!</span></p>
                      <p className="pl-4">  <span className="text-purple-400">return</span> submit(code);</p>
                      <p>{"}"}</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">$</div>
                      <div>
                        <p className="text-xs text-slate-500">Earnings Today</p>
                        <p className="text-lg font-bold">+$142.50</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 mb-6">
                Developer Community
              </div>
              <h4 className="text-5xl font-bold text-slate-900 mb-4">Bisakode</h4>
              <p className="text-xl text-slate-600 mb-8 italic">"Skill over Degrees."</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Bisakode is a code bounty platform where developers earn while they learn. Solve real-world engineering challenges, build your portfolio, and get paid for your expertise.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Thousands of curated coding challenges', 'Real-world project bounties', 'Skill-based leaderboard & reputation', 'Direct developer-to-reward pipeline'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-blue-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button className="bg-slate-900 text-white px-6 py-3.5 rounded-full font-semibold flex items-center hover:bg-slate-800 transition-all">
                  Join Platform <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all">
                  Browse Bounties
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
