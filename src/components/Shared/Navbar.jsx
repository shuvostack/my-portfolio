import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../../assets/resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* --- Logo --- */}
        <div 
          className="text-2xl font-bold cursor-pointer flex items-center gap-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-slate-100">&lt;</span>
          <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-wider">
            Shuvo
          </span>
          <span className="text-slate-100">/&gt;</span>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {location.pathname === '/' ? (
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-green-400"
                  className="text-slate-300 hover:text-white font-medium cursor-pointer transition-colors text-sm uppercase tracking-wide"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavClick(item.to)}
                  className="text-slate-300 hover:text-white font-medium cursor-pointer transition-colors text-sm uppercase tracking-wide"
                >
                  {item.name}
                </button>
              )}
              {/* Gradient Underline Effect on Hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          {/* Resume Button */}
          <a
            href={resume}
            download="Mehedi_Resume.pdf"
            className="px-5 py-2 rounded-full border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 font-medium text-sm"
          >
            Resume
          </a>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-100 hover:text-green-400 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 md:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navItems.map((item) => (
                location.pathname === '/' ? (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-300 hover:text-green-400 font-medium text-lg cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.to)}
                    className="text-slate-300 hover:text-green-400 font-medium text-lg cursor-pointer"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold shadow-lg shadow-green-500/20"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;