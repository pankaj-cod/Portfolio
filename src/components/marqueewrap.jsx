import { Marquee } from "@/components/ui/marquee"

const techLogos = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    src: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Tailwind CSS",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "Framer",
    src: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }
];

export function MarqueeDemo() {
  return (
    <div className="relative bg-black/10 backdrop-blur-md rounded-2xl p-6 overflow-hidden z-100">
      {/* Left fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none z-10" />
      {/* Right fade effect */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
      
      <Marquee className="py-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
          >
            <img 
              src={tech.src} 
              alt={tech.name}
              className="h-8 w-8 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
            <span className="font-medium" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}