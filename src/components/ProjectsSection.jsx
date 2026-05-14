"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { PinContainer } from "./ui/3d-pin";

export default function ProjectsSection() {
  const features = [
    {
      title: "Luminary",
      description: (
        <span className="flex flex-col gap-2">
          <span>AI-powered futuristic photo editor with advanced manipulation features.</span>
          <span className="flex gap-4 mt-2">
            <a href="https://moon-knight-jet.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Live App ↗</a>
            <a href="https://github.com/pankaj-cod/Moon_Knight-" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">GitHub ↗</a>
          </span>
        </span>
      ),
      skeleton: <ProjectPin title="Luminary" href="https://moon-knight-jet.vercel.app/" image="/luminary.png" />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-r border-white/10",
    },
    {
      title: "Code Showcase",
      description: "Interactive code examples and snippets from various projects and experiments.",
      skeleton: <CodeBlock />,
      className: "col-span-1 lg:col-span-3 border-b border-white/10",
    },
    {
      title: "RAG Project",
      description: (
        <span className="flex flex-col gap-2">
          <span>An advanced Retrieval-Augmented Generation application for documents.</span>
          <span className="flex gap-4 mt-2">
            <a href="https://ragproject-yjzk3uwe36blnt9r7sbpl7.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Live App ↗</a>
            <a href="https://github.com/pankaj-cod/RAG_project" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">GitHub ↗</a>
          </span>
        </span>
      ),
        skeleton: <ProjectPin title="RAG Project" href="https://ragproject-yjzk3uwe36blnt9r7sbpl7.streamlit.app/" image="/rag.png" />,
      className: "col-span-1 lg:col-span-2 lg:border-r border-white/10",
    },
    {
      title: "Global Reach",
      description: "Projects deployed worldwide with users across different continents and time zones.",
      skeleton: <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />,
      className: "col-span-1 lg:col-span-4",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="relative z-20 py-20 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
          <h2 className="text-4xl lg:text-6xl font-thin leading-tight max-w-5xl mx-auto text-center tracking-tight text-white mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl my-4 mx-auto text-white/70 text-center font-light" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            A showcase of my recent work and technical expertise across different domains and technologies.
          </p>
        </div>
        <div className="relative px-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-2xl border-white/10 overflow-hidden backdrop-blur-sm bg-white/[0.02]">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-6 sm:p-8 relative overflow-hidden hover:bg-white/[0.02] transition-all duration-500`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-3 leading-snug" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-6 max-w-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
      {children}
    </p>
  );
};

const ProjectPin = ({ title, href, image }) => {
  return (
    <div className="h-[400px] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[300px] h-[300px]">
          <h3 className="max-w-xs !pb-2 !m-0 font-light text-xl text-slate-100" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            {title}
          </h3>

          {image ? (
            <div className="flex flex-1 w-full rounded-xl overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="flex flex-1 w-full rounded-xl bg-gradient-to-br from-emerald-500/80 via-cyan-500/80 to-blue-500/80" />
          )}
        </div>
      </PinContainer>
    </div>
  );
};

const CodeBlock = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [typedText, setTypedText] = React.useState('');
  const [currentChar, setCurrentChar] = React.useState(0);

  const fullCode = `// React Component
const ProjectCard = () => {
  return (
    <div className="card">
      Hello World
    </div>
  );
}`;

  React.useEffect(() => {
    if (isHovered) {
      setTypedText('');
      setCurrentChar(0);
      
      const typeInterval = setInterval(() => {
        setCurrentChar(prev => {
          if (prev < fullCode.length) {
            setTypedText(fullCode.slice(0, prev + 1));
            return prev + 1;
          } else {
            clearInterval(typeInterval);
            return prev;
          }
        });
      }, 40);

      return () => clearInterval(typeInterval);
    } else {
      setTypedText('');
      setCurrentChar(0);
    }
  }, [isHovered]);

  const formatCode = (text) => {
    return text
      .replace(/(\/\/ React Component)/g, '<span class="text-green-400">$1</span>')
      .replace(/(const|return)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(ProjectCard)/g, '<span class="text-yellow-400">$1</span>')
      .replace(/(<div|<\/div>)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(className="card")/g, '<span class="text-purple-400">$1</span>')
      .replace(/(\{|\})/g, '<span class="text-blue-400">$1</span>');
  };

  return (
    <div 
      className="relative flex py-8 px-4 h-full min-h-[400px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full p-6 mx-auto bg-black/40 backdrop-blur-sm shadow-2xl h-full rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
        <div className="flex flex-1 w-full h-full flex-col">
          <div className="bg-black/60 rounded-lg p-6 font-mono text-sm h-full relative backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            {isHovered ? (
              <div className="text-white/90">
                <pre 
                  className="whitespace-pre-wrap leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatCode(typedText) }}
                />
                <motion.span 
                  className="inline-block w-2 h-5 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            ) : (
              <div className="leading-relaxed">
                <div className="text-green-400/80 mb-2">// React Component</div>
                <div className="text-blue-400/80 mb-1">const <span className="text-yellow-400/80">ProjectCard</span> = () =&gt; {'{'}</div>
                <div className="text-white/80 ml-4 mb-1">return (</div>
                <div className="text-purple-400/80 ml-8 mb-1">&lt;div className="card"&gt;</div>
                <div className="text-white/80 ml-12 mb-1">Hello World</div>
                <div className="text-purple-400/80 ml-8 mb-1">&lt;/div&gt;</div>
                <div className="text-white/80 ml-4 mb-1">);</div>
                <div className="text-blue-400/80">{'}'}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};