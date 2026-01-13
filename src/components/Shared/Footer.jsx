import React from 'react';
import { Github, Linkedin, Facebook, ArrowUp, Heart, Instagram } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            
            {/* Brand & Tagline */}
            <div className="text-center md:text-left">
                <div 
                    className="text-3xl font-bold cursor-pointer flex items-center justify-center md:justify-start gap-1 mb-4"
                    onClick={scrollToTop}
                >
                    <span className="text-slate-100">&lt;</span>
                    <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-wider">
                        Shuvo
                    </span>
                    <span className="text-slate-100">/&gt;</span>
                </div>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    Building digital experiences that matter. Focused on performance, accessibility, and modern aesthetics.
                </p>
            </div>

            {/* Quick Links */}
            <div className="flex gap-8 text-sm font-medium text-slate-300">
                <ScrollLink to="home" smooth={true} duration={500} className="hover:text-green-400 cursor-pointer transition-colors">Home</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="hover:text-green-400 cursor-pointer transition-colors">About</ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-green-400 cursor-pointer transition-colors">Skills</ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-green-400 cursor-pointer transition-colors">Projects</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-green-400 cursor-pointer transition-colors">Contact</ScrollLink>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
                <SocialLink href="https://github.com/shuvostack" icon={<Github size={18} />} />
                <SocialLink href="https://www.linkedin.com/in/shuvostack/" icon={<Linkedin size={18} />} />
                <SocialLink href="https://www.instagram.com/myself_shuvo766/" icon={<Instagram size={18} />} />
                <SocialLink href="https://www.facebook.com/shuvo574/" icon={<Facebook size={18} />} />
            </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Mehedi Hasan Shuvo. All rights reserved.</p>
            
            <p className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
            </p>

            {/* Scroll To Top Button (Mobile Optimized) */}
            <button 
                onClick={scrollToTop}
                className="p-3 bg-slate-800 rounded-full text-green-400 border border-slate-700 hover:bg-slate-700 hover:border-green-500 transition-all shadow-lg hover:shadow-green-500/20"
                title="Back to Top"
            >
                <ArrowUp size={20} />
            </button>
        </div>

      </div>
    </footer>
  );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-cyan-600 hover:border-transparent transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/25"
    >
        {icon}
    </a>
);

export default Footer;