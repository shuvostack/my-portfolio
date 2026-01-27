import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Globe, BookOpen } from 'lucide-react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
// import myImg from '../../assets/Me2.jpg';
import myImg3 from '../../assets/Me3.png';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === Left Side: Orbiting Skills Animation === */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-[400px] md:h-[500px]"
          >
             {/* Central Image Container */}
             <div className="relative z-20 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-slate-800 shadow-[0_0_40px_rgba(34,197,94,0.3)] bg-slate-900">
                <img src={myImg3} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 mix-blend-overlay"></div>
             </div>

             {/* --- Inner Orbit Ring (Core Skills) --- */}
             <div className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border border-slate-700/30 animate-[spin_10s_linear_infinite] z-10">
                <OrbitIcon icon={<FaReact size={24} className="text-cyan-400"/>} position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <OrbitIcon icon={<FaNodeJs size={24} className="text-green-500"/>} position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
                <OrbitIcon icon={<SiJavascript size={24} className="text-yellow-400"/>} position="left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                <OrbitIcon icon={<SiMongodb size={24} className="text-green-600"/>} position="right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>

             {/* --- Outer Orbit Ring (Tools) --- */}
             <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-slate-700/20 animate-[spin_15s_linear_infinite] z-0">
                <OrbitIcon icon={<FaHtml5 size={20} className="text-orange-500"/>} position="top-[15%] left-[15%]" />
                <OrbitIcon icon={<FaCss3Alt size={20} className="text-blue-500"/>} position="top-[15%] right-[15%]" />
                <OrbitIcon icon={<SiTailwindcss size={20} className="text-cyan-300"/>} position="bottom-[15%] left-[15%]" />
                <OrbitIcon icon={<FaGitAlt size={20} className="text-red-500"/>} position="bottom-[15%] right-[15%]" />
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>


          {/* === Right Side: Text === */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl font-semibold text-slate-100">
              Transforming ideas into digital reality
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Hello! I'm Mehedi, a passionate Web Developer with a knack for building clean, user-friendly, and functional applications. My journey started with a curiosity about how websites work, which quickly turned into a love for coding.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I enjoy working with the <span className="text-green-400 font-medium">MERN Stack (MongoDB, Express, React, Node.js)</span>. Whether it's crafting a beautiful frontend or architecting a robust backend, I love the challenge of solving complex problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, playing video games, or travelling to refresh my mind. I believe in continuous learning and always strive to improve my skills.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
                <InterestCard icon={<Globe className="text-cyan-400" size={20} />} title="Tech Enthusiast" />
                <InterestCard icon={<Coffee className="text-yellow-400" size={20} />} title="Coffee Lover" />
                <InterestCard icon={<BookOpen className="text-pink-400" size={20} />} title="Continuous Learner" />
                <InterestCard icon={<Code className="text-green-400" size={20} />} title="Problem Solver" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Helper Component: Orbit Icon
const OrbitIcon = ({ icon, position }) => (
    <div className={`absolute ${position}`}>
        <div className="p-3 bg-slate-900 rounded-full border border-slate-700/50 shadow-lg shadow-green-500/10 animate-[spin_10s_linear_infinite_reverse] hover:scale-110 transition-transform cursor-pointer">
            {icon}
        </div>
    </div>
);

const InterestCard = ({ icon, title }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors justify-center lg:justify-start border border-transparent hover:border-slate-700">
        {icon}
        <span className="text-slate-300 text-sm">{title}</span>
    </div>
);

export default About;