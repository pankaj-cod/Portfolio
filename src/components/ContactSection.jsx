"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Meteors } from "./ui/meteors";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { Cover } from "./ui/cover";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd733fdf7-949b-462e-8b66-761a6b179165',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        window.alert('Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      window.alert('Error sending message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email",
      value: "upadhyaypankaj322@gmail.com",
      href: "mailto:upadhyaypankaj322@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pankaj-upadhyay-12625330a/"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/pankaj-cod"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: "Instagram",
      value: "Follow me",
      href: "https://www.instagram.com/pankaj_upadhyy/"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black flex items-center px-6 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        />
        <Meteors number={15} />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-emerald-900/10 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-6xl font-thin text-white  mb-6"
            style={{fontFamily: 'var(--font-jetbrains-mono)'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's <Cover>Connect</Cover>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{fontFamily: 'var(--font-jetbrains-mono)'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's discuss your next project.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
              <Meteors number={5} />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label 
                    className="block text-white/80 text-sm mb-2"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none transition-colors"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    className="block text-white/80 text-sm mb-2"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none transition-colors"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label 
                    className="block text-white/80 text-sm mb-2"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
              <Meteors number={3} />
              
              <h3 
                className="text-2xl font-light text-white mb-6 relative z-10"
                style={{fontFamily: 'var(--font-jetbrains-mono)'}}
              >
                Get in Touch
              </h3>
              
              <div className="space-y-4 relative z-10">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black/20 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-white/80 group-hover:text-white transition-colors">{method.icon}</div>
                    <div>
                      <div 
                        className="text-white font-medium"
                        style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                      >
                        {method.label}
                      </div>
                      <div 
                        className="text-white/60 text-sm group-hover:text-white/80 transition-colors"
                        style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                      >
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
              <Meteors number={3} />
              
              <h3 
                className="text-xl font-light text-white mb-6 relative z-10"
                style={{fontFamily: 'var(--font-jetbrains-mono)'}}
              >
                Let's Build Something Amazing
              </h3>
              
              <div className="relative z-10 space-y-4">
                <p 
                  className="text-white/70 text-sm leading-relaxed"
                  style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                >
                  I'm always excited to work on new projects and collaborate with creative minds. Whether you have a clear vision or just an idea, let's discuss how we can bring it to life.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "PyTorch", "TensorFlow", "Data Science"].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}