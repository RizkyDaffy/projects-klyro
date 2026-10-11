
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

interface BlogDetailProps {
  blogId: number;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onBack }) => {
  // Mock data for the selected blog
  const blogData = {
    category: "TECHNOLOGY",
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    author: {
      name: "Mario Sanchez",
      role: "Lead Systems Architect",
      bio: "Mario is a Senior Staff Engineer specializing in high-performance digital architectures at KlyroByte. Prior to this, he was a Senior Engineer at Google and focused on distributed scaling.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    date: "October 21, 2024",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-8 text-slate-700 leading-[1.8] text-lg lg:text-xl">
        <p className="font-semibold text-slate-900">
          Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, digital infrastructure, a field with well-established principles for decades, is back in the limelight.
        </p>
        <p>
          Simply understood, digital architecture is the art and science of structuring systems to meet your strategic goals, defining the component number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a System Architecture is only as good as it is well-suited for the purpose it strives to achieve.
        </p>
        <p>
          In today's day and age, companies like Google or Amazon do not pursue growth through incremental market share gains; rather, they focus on understanding their customers' needs and creating entirely new markets to answer them. This requires a foundation that is flexible yet resilient.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">There are 3 key imperatives to build this type of digital architecture — to be clear, meaningful and stretchable.</h3>
        
        <div className="space-y-6">
          <p>
            <span className="font-bold text-slate-900">Clear:</span> Just as modern architecture thrives on clear and clean lines, so does system design. In the age of micro-segmentation, you need a clear and loud voice in order to stand out. The technology space understood this early, where clear and simple architectures that bring together simple design, as Apple, with complex technology, always under the discipline of a rigorously simple way to organize.
          </p>
          <p>
            <span className="font-bold text-slate-900">Meaningful:</span> Just as modern architecture prioritizes function over embellishments, a solid system architecture is founded on values meaningful to users. System architecture needs to be re-organized around brands that have a "reason for being" compelling enough to elicit passion.
          </p>
          <p>
            <span className="font-bold text-slate-900">Stretchable:</span> Modern architecture is dynamic — it finds its force in the midst of usage; movement is often embedded into its very bones. In today's fast-changing world, architecture is a moving target — clients increasingly ask to design systems that fit their growth ambitions, thinking through future growth scenarios.
          </p>
        </div>

        <p>
          Traditionally, companies considered a house of brands architecture as a risk management tool — a way not to put all your eggs in one basket. It turns out, in the age of platforms and digital disruption, a masterbrand-led architecture can help you build a bigger basket, to hold more eggs.
        </p>
      </div>
    )
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          View all posts
        </button>

        {/* Blog Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-6 block">
            {blogData.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.15]">
            {blogData.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4">
            <img src={blogData.author.image} alt={blogData.author.name} className="w-12 h-12 rounded-full border border-slate-100" />
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">{blogData.author.name}</p>
              <div className="flex items-center text-xs text-slate-400 space-x-3 mt-1">
                <span className="flex items-center"><Calendar size={12} className="mr-1" /> {blogData.date}</span>
                <span className="flex items-center"><Clock size={12} className="mr-1" /> {blogData.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <img 
            src={blogData.featuredImage} 
            alt="Blog Featured" 
            className="w-full h-auto rounded-3xl shadow-sm"
          />
        </div>

        {/* Content Body */}
        <article className="max-w-3xl mx-auto prose prose-slate prose-lg">
          {blogData.content}
        </article>

        {/* Author Bio Box */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img 
            src={blogData.author.image} 
            alt={blogData.author.name} 
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">About {blogData.author.name}</h4>
            <p className="text-slate-700 text-lg mb-4 leading-relaxed">
              {blogData.author.bio}
            </p>
            <button className="text-blue-600 font-bold hover:underline text-sm">
              View Profile
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
           <button 
             onClick={onBack}
             className="text-slate-500 hover:text-slate-900 flex items-center transition-colors text-sm font-medium"
           >
             <ArrowLeft size={16} className="mr-2" />
             Return to Insights
           </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
