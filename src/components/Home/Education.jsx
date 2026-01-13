import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Laptop } from 'lucide-react';

const Education = () => {
    
  const educationData = [
    {
      id: 1,
      degree: "Intensive Web Development Trainee",
      institution: "Programming Hero",
      location: "Remote",
      duration: "July 2025 - Present",
      gpa: null,
      description: "Completed a rigorous 6-month boot camp focused on Full Stack Web Development. Built 12+ real-world projects and mastered MERN Stack technologies.",
      icon: <Laptop size={20} />,
      color: "border-cyan-500 shadow-cyan-500/20"
    },
    {
      id: 2,
      degree: "Bachelor of Business Administration (BBA)",
      institution: "National University / Govt Saadat University",
      location: "Tangail, Bangladesh",
      duration: "Feb 2023 - 2028 (Running)",
      gpa: null,
      description: "Currently pursuing my Bachelor's degree. Developing strong leadership, management, and business analytical skills alongside technical expertise.",
      icon: <GraduationCap size={20} />,
      color: "border-green-500 shadow-green-500/20"
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Major General Mahmudul Hasan Adarsha College",
      location: "Tangail",
      duration: "Completed",
      gpa: "GPA: 4.67",
      description: "Completed HSC with excellent academic performance. Built a disciplined foundation for higher studies.",
      icon: <BookOpen size={20} />,
      color: "border-purple-500 shadow-purple-500/20"
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-900 relative overflow-hidden">
        
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Award className="text-green-400" size={40} />
            <span>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Education</span></span>
          </h2>
          <p className="text-slate-400">My academic journey and professional training qualifications.</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Central Glowing Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 rounded-full opacity-30"></div>
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-700 -z-10"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Empty Side for Desktop Balance */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline Node (Icon Badge) */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full bg-slate-900 border-2 ${item.color.split(' ')[0]} z-10 flex items-center justify-center text-slate-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                        {item.icon}
                    </div>
                    {/* Ripple Effect */}
                    <div className={`absolute w-14 h-14 rounded-full border border-dashed ${item.color.split(' ')[0]} opacity-30 animate-spin-slow`}></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`
                    relative bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl 
                    border border-slate-700/50 hover:border-opacity-100 
                    transition-all duration-300 group hover:-translate-y-1
                    ${index % 2 === 0 ? "hover:border-green-500/50" : "hover:border-cyan-500/50"}
                  `}>
                    
                    {/* Connector Line for Mobile */}
                    <div className="md:hidden absolute top-5 -left-[48px] w-8 h-[2px] bg-slate-700"></div>

                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-100 leading-tight">
                            {item.degree}
                        </h3>
                        {item.gpa && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                {item.gpa}
                            </span>
                        )}
                    </div>
                    
                    <h4 className="text-slate-300 font-medium text-sm mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {item.institution}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-700/50">
                        <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-full">
                            <Calendar size={14} className="text-green-400" />
                            <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-full">
                            <MapPin size={14} className="text-red-400" />
                            <span>{item.location}</span>
                        </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed opacity-90">
                        {item.description}
                    </p>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;