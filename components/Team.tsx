
import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const members = [
    { name: "Adrian Klyro", role: "CEO & Founder", bio: "Ex-Google, passionate about user experience and distributed systems.", image: "https://picsum.photos/seed/member1/400/400" },
    { name: "Linnea Byte", role: "Head of Product", bio: "Award-winning designer with 10+ years in SaaS product strategy.", image: "https://picsum.photos/seed/member2/400/400" },
    { name: "David Chen", role: "CTO", bio: "Cryptography enthusiast and advocate for open-source scalability.", image: "https://picsum.photos/seed/member3/400/400" },
    { name: "Amara Okoro", role: "DevRel Lead", bio: "Building communities and ensuring developer happiness globally.", image: "https://picsum.photos/seed/member4/400/400" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">Leadership</h2>
          <h3 className="text-4xl font-bold text-slate-900">The minds behind the code</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-square bg-slate-100 relative group overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
