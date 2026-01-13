import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5", "CSS3", "JavaScript", "React.js", 
        "Tailwind CSS", "Next.js", "Framer Motion", "DaisyUI"
      ],
      color: "from-blue-400 to-cyan-400" 
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "MongoDB", "Mongoose", 
        "Firebase Auth", "JWT", "REST API"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Tools & Others",
      skills: [
        "Git", "GitHub", "VS Code", "Figma", 
        "Vercel", "Netlify", "Chrome DevTools", "Postman"
      ],
      color: "from-purple-400 to-pink-500"
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* === Root Node (Title) === */}
        <div className="flex flex-col items-center mb-12">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 shadow-[0_0_20px_rgba(34,197,94,0.2)] z-20 relative">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Skills</span>
                </h2>
                
                {/* Connector Line (Vertical - going down from title) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full w-1 h-12 bg-slate-700"></div>
            </motion.div>
        </div>

        {/* === Tree Branching (Desktop Only) === */}
        <div className="hidden md:flex justify-center mb-12 relative max-w-4xl mx-auto">
            {/* Horizontal Connector Line */}
            <div className="absolute top-0 left-[16%] right-[16%] h-1 bg-slate-700 -mt-1"></div>
            
            {/* Vertical Connectors to Categories */}
            <div className="w-full flex justify-between px-[16%]">
                <div className="w-1 h-12 bg-slate-700 -mt-1 relative">
                     {/* Corner Dot Left */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-500 rounded-full"></div>
                </div>
                <div className="w-1 h-12 bg-slate-700 -mt-1 relative">
                     {/* Corner Dot Center */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-500 rounded-full"></div>
                </div>
                <div className="w-1 h-12 bg-slate-700 -mt-1 relative">
                     {/* Corner Dot Right */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-500 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* === Categories Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Category Node */}
              <div className={`mb-8 px-6 py-2 rounded-full border border-slate-600 bg-slate-800/80 text-slate-200 font-bold tracking-wide shadow-lg relative`}>
                  {category.title}
                  
                  {/* Vertical Line to Children (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-8 bg-slate-700"></div>
              </div>

              {/* Skills Cluster */}
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative"
                    >
                        <div className={`
                            px-4 py-2 rounded-xl 
                            bg-slate-800/40 backdrop-blur-sm 
                            border border-slate-700/50 
                            hover:border-opacity-100 hover:bg-slate-800
                            transition-all duration-300
                            cursor-default shadow-sm
                        `}>
                            <span className={`
                                text-sm font-medium text-slate-300 
                                group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${category.color}
                                transition-all duration-300
                            `}>
                                {skill}
                            </span>
                        </div>
                        
                        {/* Glow Effect on Hover */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-md -z-10 transition-opacity duration-300`}></div>
                    </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;