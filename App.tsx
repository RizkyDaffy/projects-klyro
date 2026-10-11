
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import BlogList from './components/BlogList';
import Careers from './components/Careers';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<{ type: 'home' | 'blog' | 'blog-list'; id?: number }>({ type: 'home' });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateToBlog = (id: number) => setView({ type: 'blog', id });
  const navigateToBlogList = () => setView({ type: 'blog-list' });
  const navigateHome = () => setView({ type: 'home' });

  return (
    <div className="relative min-h-screen bg-white">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar onHomeClick={navigateHome} />

      <main>
        <AnimatePresence mode="wait">
          {view.type === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <About />
              <Values />
              <Products />
              <WhyChooseUs />
              <Testimonials />
              <Team />
              <FAQ />
              <Blog onBlogClick={navigateToBlog} onViewAllClick={navigateToBlogList} />
              <Careers />
            </motion.div>
          ) : view.type === 'blog-list' ? (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <BlogList onBlogClick={navigateToBlog} onBack={navigateHome} />
            </motion.div>
          ) : (
            <motion.div
              key="blog-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <BlogDetail blogId={view.id!} onBack={navigateHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
