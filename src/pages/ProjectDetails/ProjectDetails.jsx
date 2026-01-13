import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Layers, AlertTriangle, Rocket, Code2, CheckCircle2 } from 'lucide-react';
import projectsData from '../../data/projects.json';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // আইডি দিয়ে প্রজেক্ট ডাটা খুঁজে বের করা
  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      // প্রজেক্ট না পাওয়া গেলে হোমে ফেরত পাঠানো
      navigate('/');
    }
    setLoading(false);
    // পেজ লোড হলে একদম উপরে স্ক্রল করা
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (loading) {
    return <div className="h-screen bg-slate-900 flex items-center justify-center text-green-400">Loading Project...</div>;
  }

  if (!project) return null;

  // এনিমেশন ভেরিয়েন্ট
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-slate-900 min-h-screen pb-20 overflow-x-hidden">
      
      {/* === Section 1: Hero Header (Immersive) === */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end justify-center overflow-hidden">
        {/* Blurred Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl opacity-30 scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 text-center mb-12">
            {/* Back Button */}
            <Link to="/" className="absolute top-10 left-6 md:left-0 flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <ArrowLeft size={18} /> Back to Home
            </Link>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                {/* Main Screenshot (Floating) */}
                <div className="relative mx-auto max-w-4xl -mb-24 md:-mb-32 z-20">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10 border-[6px] border-slate-800/50 backdrop-blur-md">
                        <img src={project.image} alt={project.name} className="w-full" />
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 pt-32 md:pt-40 relative z-10">
        
        {/* === Section 2: Title & Action Bar (Glassmorphism) === */}
        <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
                {project.name}
            </h1>
            <p className="text-xl text-slate-400 mb-8">
                {project.shortDescription}
            </p>

            {/* Floating Action Buttons */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3 bg-slate-800/40 backdrop-blur-lg rounded-full border border-slate-700/50 shadow-lg">
                <a 
                    href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                    <ExternalLink size={20} /> Live Preview
                </a>
                <a 
                    href={project.repoLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-700 text-slate-100 font-bold hover:bg-slate-600 transition-all"
                >
                    <Github size={20} /> Source Code
                </a>
            </div>
        </motion.div>


        {/* === Section 3: Main Content Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Description & Tech Stack (Span 8 cols) */}
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="lg:col-span-8 space-y-10"
            >
                {/* Full Description */}
                <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
                    <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                        <Layers className="text-cyan-400" /> Project Overview
                    </h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line text-lg">
                        {project.fullDescription}
                    </p>
                </div>

                 {/* Tech Stack */}
                 <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
                    <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                        <Code2 className="text-green-400" /> Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-medium text-sm flex items-center gap-2"
                            >
                                <CheckCircle2 size={16} className="text-green-500" /> {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>


            {/* Right Column: Challenges & Future (Span 4 cols) - Sticky Sidebar Style */}
            <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 h-fit"
            >
                {/* Challenges Card (Unique Warning Style) */}
                <div className="bg-gradient-to-br from-slate-800/50 to-red-900/10 p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-red-500/10">
                        <AlertTriangle size={100} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 relative z-10">
                        <AlertTriangle className="text-red-400" size={24} /> Challenges Faced
                    </h3>
                    <p className="text-slate-400 leading-relaxed relative z-10 text-sm">
                        {project.challenges}
                    </p>
                </div>

                 {/* Future Plan Card (Unique Hopeful Style) */}
                 <div className="bg-gradient-to-br from-slate-800/50 to-green-900/10 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-green-500/10">
                        <Rocket size={100} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 relative z-10">
                        <Rocket className="text-green-400" size={24} /> Future Improvements
                    </h3>
                    <p className="text-slate-400 leading-relaxed relative z-10 text-sm">
                        {project.futurePlan}
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;