
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogProps {
  onBlogClick?: (id: number) => void;
  onViewAllClick?: () => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogClick, onViewAllClick }) => {
  // Only show first 3 for preview
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">Insights</h2>
            <h3 className="text-4xl font-bold text-slate-900">Latest from our journal</h3>
          </div>
          <button 
            onClick={onViewAllClick}
            className="hidden sm:flex items-center text-blue-600 font-bold hover:underline group"
          >
            View All Posts <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              onClick={() => onBlogClick?.(post.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-slate-100 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-slate-400 font-medium mb-3 uppercase">{post.date}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-slate-50">
                  <button className="text-sm font-bold text-slate-900 flex items-center">
                    Read More <ArrowUpRight className="ml-1" size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All button */}
        <div className="mt-12 text-center sm:hidden">
           <button 
             onClick={onViewAllClick}
             className="inline-flex items-center text-blue-600 font-bold"
           >
             View All Posts <ArrowUpRight className="ml-1" size={18} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
