import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import projectsData from '../../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Glows (Strategic Placement) */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* === Section Header === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-green-400">
                    <FolderGit2 size={24} />
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Projects</span>
                </h2>
            </div>
            <p className="text-slate-400 text-lg">
                A showcase of my technical journey. Each project represents a unique challenge and a solution engineered with modern technologies.
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-slate-700 to-transparent ml-8 mb-4"></div>
        </motion.div>

        {/* === Projects Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Container (Browser Window Style) */}
              <div className="flex-1 bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col">
                
                {/* Browser Header Bar */}
                <div className="px-4 py-3 border-b border-slate-700/60 bg-slate-800/80 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Code2 size={12} /> source.code
                    </div>
                </div>

                {/* Project Image Area */}
                <div className="relative h-52 overflow-hidden group">
                    <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <Link 
                            to={`/project/${project.id}`}
                            className="px-6 py-2 rounded-full bg-green-500 text-slate-900 font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-400 flex items-center gap-2"
                        >
                            View Details <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-green-400 transition-colors duration-300">
                            {project.name}
                        </h3>
                        
                        {/* Quick Links */}
                        <div className="flex gap-3">
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                                <Github size={18} />
                            </a>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Live Site">
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-slate-700/50">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700/30 text-cyan-400/90 border border-slate-600/50"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700/30 text-slate-500 border border-slate-600/50">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

              </div>
              
              {/* Background Gradient Blob for Hover Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10"></div>
            
            </motion.div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="mt-16 text-center">
            <a 
                href="https://github.com/shuvostack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors border-b border-transparent hover:border-green-400 pb-1"
            >
                See more on GitHub <ArrowUpRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;