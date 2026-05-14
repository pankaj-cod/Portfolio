"use client";

import Image from "next/image";
import Hero from "@/components/ui/neural-network-hero";
import DotGrid from "@/components/DotGrid";
import { CometCard } from "@/components/ui/comet-card";
import GradualBlur from "@/components/GradualBlur";
import LaserFlowBoxExample from "@/components/ui/laserwrap";
import LaserFlow from "@/components/LaserFlow";
import { MarqueeDemo } from "@/components/marqueewrap";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Portfolio() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    
    <div className="bg-black text-white relative">

       {/* Navigation */}
      
       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light text-white" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Portfolio</div>
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                  style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <Hero 
          title="Pankaj Upadhyay"
          description={<LayoutTextFlip text="AI/ML Developer" words={["Building Machine Learning Models", "Deep Learning & NLP", "Data Science & Analytics", "Python, TensorFlow & PyTorch"]} duration={2500} />}
          badgeText="Portfolio"
          badgeLabel="2024"
          ctaButtons={[
            { text: "Download Resume", href: "/resume.pdf", primary: true, download: true },
            { text: "Contact Me", href: "#contact" }
          ]}
          microDetails={["Python", "TensorFlow", "PyTorch"]}
        />
      </section>

      {/* Tech Stack Marquee */}
      <section className="relative py-16 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <MarqueeDemo/>
        </div>
      </section>
      

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 py-32 z-10">
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={4}
            gap={12}
            baseColor="#1a1a1a"
            activeColor="#06b6d4"
            proximity={100}
            shockRadius={200}
            shockStrength={4}
            resistance={800}
            returnDuration={1.2}
          />
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className="text-5xl font-thin mb-16 text-center" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="z-10">
              <CometCard className="w-auto h-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.gif"
                    alt="Pankaj Upadhyay"
                    className="w-full h-128 object-cover opacity-90"
                  />
                </div>
              </CometCard>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <p className="text-lg text-white/70 leading-relaxed mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                <b>I&apos;m a creative and passionate AI/ML Developer with expertise in modern data science and machine learning. 
                I love crafting intelligent systems that blend complex algorithms with 
                robust predictive models.</b>
              </p>
              <p className="text-lg text-white/70 leading-relaxed" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                <b>With a strong foundation in Python, TensorFlow, and PyTorch, I build scalable 
                AI applications that deliver exceptional data-driven insights. I&apos;m eager to explore new architectures 
                and always pushing the boundaries of what&apos;s possible with artificial intelligence.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-light text-white mb-2" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Pankaj Upadhyay</h3>
            <p className="text-white/60 text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
              AI/ML Developer & Data Scientist
            </p>
          </div>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Home</a>
            <a href="#about" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>About</a>
            <a href="#projects" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Projects</a>
            <a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Contact</a>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-xs" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
              © 2024 Pankaj Upadhyay. Built with Next.js, Framer Motion & Three.js
            </p>
          </div>
        </div>
      </footer>
      
      {/* Bottom Gradual Blur */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-50">
        <GradualBlur
          target="parent"
          position="bottom"
          height="4rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={0.8}
        />
      </div>
    </div>
  );
}