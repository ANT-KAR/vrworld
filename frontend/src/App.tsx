import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, Rocket, ChevronRight, Menu, X, Play } from 'lucide-react';
import VRExperience from './components/VRExperience';
import './App.css';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="bg-gradient"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-none rounded-none py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center neon-border">
            <Globe className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter vibrant-text">VRWorld</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#experiences" className="nav-link">Experiences</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#about" className="nav-link">About</a>
          <Link to="/vr" className="btn-primary flex items-center gap-2">
            Enter Nexus <ChevronRight size={18} />
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-indigo-500/20">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-300 uppercase tracking-widest">Next Generation Learning</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            EXPLORE THE <br />
            <span className="vibrant-text">INFINITE.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Step into immersive educational worlds. Break the boundaries of space and time to learn through direct experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/vr" className="btn-primary text-lg flex items-center justify-center gap-2 px-10 py-4">
               Launch VR <Play fill="white" size={20} />
             </Link>
             <button className="glass border-white/10 text-white font-semibold px-10 py-4 rounded-lg hover:bg-white/5 transition-colors">
               View Gallery
             </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="experiences" className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-16">The VRWorld Ecosystem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: <Rocket className="text-indigo-400" />, 
              title: "Educational Quests", 
              desc: "Historical recreations, scientific simulations, and interactive learning." 
            },
            { 
              icon: <Users className="text-purple-400" />, 
              title: "Social Learning", 
              desc: "Collaborate with peers globally in shared virtual lecture halls." 
            },
            { 
              icon: <Shield className="text-pink-400" />, 
              title: "Safe Moderation", 
              desc: "Advanced AI-powered moderation ensures a healthy environment." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 border-none hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 glass flex items-center justify-center mb-6 neon-border bg-transparent">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 px-6 md:px-12 text-center text-gray-500">
        <p>© 2026 VRWorld. Built for the Future.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vr" element={<VRExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
