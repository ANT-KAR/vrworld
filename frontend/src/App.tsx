import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, Rocket, ChevronRight, Menu, X, Play, Twitter, Linkedin, Send } from 'lucide-react';
import VRExperience from './components/VRExperience';
import './App.css';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated backend call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="glass p-8 rounded-2xl max-w-xl mx-auto neon-border mt-12 mb-20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <h3 className="text-2xl font-bold mb-2 text-center">Join the Core Nexus</h3>
      <p className="text-gray-400 text-center mb-6">Gain early access to exclusive virtual dimensions and a limited-edition explorer badge.</p>
      
      {status === 'success' ? (
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/50">
          <p className="text-green-400 font-semibold flex items-center justify-center gap-2">
            <Send size={18} /> You're on the list, Explorer.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            required
            placeholder="Enter your email address"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap px-8 py-3 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : 'Secure Beta Access'}
          </button>
        </form>
      )}
    </div>
  );
};

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
             <Link to="/vr" className="btn-primary text-xl flex items-center justify-center gap-2 px-10 py-5 group">
               Enter Nexus <Play className="group-hover:translate-x-1 transition-transform" fill="white" size={20} />
             </Link>
             <button className="glass border-white/10 text-white font-semibold px-10 py-5 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
               Watch Trailer
             </button>
          </div>

          {/* Social Proof / Sharing */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Spread the Vision:</span>
            <a href="https://twitter.com/intent/tweet?text=I'm%20about%20to%20explore%20the%20infinite%20with%20@VRWorld." target="_blank" rel="noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/shareArticle?mini=true&url=https://vrworld.nexus" target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
        
        <WaitlistForm />
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
