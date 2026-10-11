
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogListProps {
  onBlogClick: (id: number) => void;
  onBack: () => void;
}

const BlogList: React.FC<BlogListProps> = ({ onBlogClick, onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <button 
            onClick={onBack}
            className="group inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Insights <span className="text-blue-600">&</span> Journal
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Deep dives into technology, security, design, and the future of digital life solutions.
          </p>
        </div>

        {/* Filter/Search Bar (Aesthetic placeholder) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
           <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Technology', 'Security', 'Startup', 'Engineering', 'Design'].map((cat) => (
                <button 
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat === 'All' ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
              />
           </div>
        </div>

        {/* Full Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => onBlogClick(post.id)}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">
                   <span>{post.date}</span>
                   <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                   <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 line-clamp-2 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-slate-900 font-bold text-sm">
                  Read Article 
                  <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Promo Card */}
        <div className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Stay ahead of the curve</h2>
              <p className="text-xl text-blue-50 mb-10 leading-relaxed">
                Get monthly deep dives into the technologies we're building and the future of digital product engineering.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" 
                   placeholder="your@email.com" 
                   className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-lg"
                 />
                 <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all text-lg shadow-xl shadow-blue-900/20">
                   Subscribe
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
