
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Klyro<span className="text-blue-600">Byte</span>
            </span>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Making the most complicated digital tasks feel easy, intuitive, and fun.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Otpnesia</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Bisakode</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">API Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Connected</h4>
            <p className="text-slate-500 mb-6">Subscribe to our monthly tech journal.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-slate-50 border border-slate-200 rounded-l-full px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="bg-slate-900 text-white px-5 py-3 rounded-r-full font-bold hover:bg-slate-800 transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 italic">© 2024 KlyroByte Inc. Built for the modern web.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-blue-600">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
