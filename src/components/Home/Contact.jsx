import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-green-400" size={24} />,
      title: "Email",
      value: "shuvostack@gmail.com", 
      link: "mailto:shuvostack@gmail.com",
    },
    {
      icon: <Phone className="text-cyan-400" size={24} />,
      title: "Phone",
      value: "+880 1311-338689", 
      link: "tel:+8801311338689",
    },
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      title: "WhatsApp",
      value: "+880 1311-338689", 
      link: "https://wa.me/8801311338689",
    },
    {
      icon: <MapPin className="text-pink-400" size={24} />,
      title: "Location",
      value: "Tangail, Bangladesh",
      link: "#",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ⚠️ EmailJS Configuration
    emailjs.sendForm(
        'service_18gsql4',   // আপনার Service ID (বসানো আছে)
        'template_pp0u1ki',  // ⚠️ এখানে EmailJS থেকে পাওয়া Template ID বসান
        form.current, 
        'uXmBe2-vGYGMG3kah'    // ⚠️ এখানে EmailJS থেকে পাওয়া Public Key বসান
    )
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message sent successfully! I will get back to you soon.");
          form.current.reset(); // ফর্ম ক্লিয়ার করা
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Mail className="text-green-400" size={36} />
            <span>Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Me</span></span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out to me!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Let's talk about everything!
            </h3>
            
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/40 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-medium">{item.title}</h4>
                    <p className="text-lg font-semibold text-slate-100 group-hover:text-green-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    name="user_name" // EmailJS এই নাম ধরবে
                    required
                    placeholder="Your Name"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    name="user_email" // EmailJS এই ইমেইল ধরবে
                    required
                    placeholder="your@email.com"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  name="message" // EmailJS এই মেসেজ ধরবে
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                    <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                    <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;