import React from "react";
import {
  Download,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../../assets/Me2.jpg";
import Resume from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 pt-20 overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl md:text-2xl font-medium text-slate-300 mb-2">
            Hello, I am
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-100 tracking-tight">
            Mehedi Hasan Shuvo
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Frontend Developer
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            I build pixel-perfect, engaging, and accessible digital experiences.
            Passionate about MERN Stack and modern web technologies.
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href={Resume}
              download="Mehedi_Resume.pdf"
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold shadow-lg shadow-green-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume{" "}
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <div className="flex items-center gap-4">
              <SocialIcon
                href="https://github.com/shuvostack"
                icon={<Github size={20} />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/shuvostack/"
                icon={<Linkedin size={20} />}
              />
              <SocialIcon
                href="https://www.instagram.com/myself_shuvo766/"
                icon={<Instagram size={20} />}
              />
              <SocialIcon
                href="https://www.facebook.com/shuvo574/"
                icon={<Facebook size={20} />}
              />
            </div>
          </div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Abstract Blob Shape Border */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob blur-md opacity-70"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-slate-700/50 z-10">
              <img
                src={profileImg}
                alt="Mehedi Hasan"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-green-400 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
