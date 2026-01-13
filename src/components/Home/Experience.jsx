import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Rocket, Calendar } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Intensive Web Development Trainee",
      company: "Programming Hero",
      type: "Remote | Internship Simulation",
      duration: "July 2025 - Present",
      description: "Completed an intensive 6-month boot camp focusing on the MERN stack. Gained hands-on experience by building 10+ real-world projects under strict deadlines.",
      highlights: [
        "Mastered React, Node.js, Express, and MongoDB.",
        "Learned Git collaboration and team management.",
        "Solved 500+ JavaScript logic problems."
      ]
    },
    {
      id: 2,
      role: "Junior Frontend Developer",
      company: "Self-Initiated / Open Source",
      type: "Remote | Project Based",
      duration: "Jan 2025 - June 2025",
      description: "Developed and deployed multiple full-stack applications. Focused on UI/UX design implementation, API integration, and performance optimization.",
      highlights: [
        "Built 'PlateShare' - A food sharing community platform.",
        "Developed 'CityFix' - A public service reporting tool.",
        "Implemented secure JWT authentication & Firebase."
      ]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Rocket className="text-green-400" size={40} />
            <span>Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Experience</span></span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My journey of turning code into functional applications through rigorous training and real-world projects.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:-translate-y-2">
                
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-cyan-400 font-medium text-lg flex items-center gap-2 mt-1">
                      <Briefcase size={16} /> {item.company}
                    </h4>
                  </div>
                  <div className="bg-slate-700/30 p-3 rounded-xl border border-slate-600/50 text-green-400 group-hover:scale-110 transition-transform">
                    {index === 0 ? <Code2 size={24} /> : <Rocket size={24} />}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/30 border border-slate-600/50 text-slate-300 text-sm mb-6">
                  <Calendar size={14} className="text-green-400" />
                  {item.duration} <span className="text-slate-500">|</span> {item.type}
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Highlights (Bullet Points) */}
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                  <h5 className="text-sm font-semibold text-slate-300 mb-3 border-b border-slate-700 pb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
              {/* Decorative Corner Gradients */}
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-tr-2xl -z-10 group-hover:from-green-500/40 transition-all"></div>
              <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-bl-2xl -z-10 group-hover:from-cyan-500/40 transition-all"></div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;