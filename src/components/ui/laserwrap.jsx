import { useRef } from "react";
import Image from "next/image";
import LaserFlow from "../LaserFlow";

const skills = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Vercel", "CI/CD"] },
  { title: "Data & Testing", items: ["PostgreSQL", "Prisma", "Vitest", "Playwright"] }
];

export default function LaserFlowBoxExample() {
    const revealImgRef = useRef(null);
    const revealSkillsRef = useRef(null);
    const revealTargets = [revealImgRef, revealSkillsRef];

    const updateReveal = (mx, my) => {
      revealTargets.forEach(ref => {
        if (ref.current) {
          ref.current.style.setProperty('--mx', `${mx}px`);
          ref.current.style.setProperty('--my', `${my}px`);
        }
      });
    };
  
    return (
      <div 
        className="laserflow-reveal"
        style={{ 
          height: '800px', 
          position: 'relative', 
          overflow: 'hidden',
          backgroundColor: '#060010',
          borderRadius: '32px'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          updateReveal(x, y + rect.height * 0.5);
        }}
        onMouseLeave={() => {
          updateReveal(-9999, -9999);
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(6,0,16,0.95) 0%, rgba(6,0,16,0) 20%, rgba(6,0,16,0) 80%, rgba(6,0,16,0.95) 100%)',
            pointerEvents: 'none',
            zIndex: 4,
            mixBlendMode: 'soft-light'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(6,0,16,0.9) 0%, rgba(6,0,16,0) 30%, rgba(6,0,16,0) 70%, rgba(6,0,16,0.9) 100%)',
            pointerEvents: 'none',
            zIndex: 4,
            mixBlendMode: 'soft-light'
          }}
        />
         <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.35}
          color="#5227FF"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none'
          }}
        />
        
       
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '86%',
          height: '62%',
          background: 'linear-gradient(135deg, rgba(6,0,16,0.95), rgba(12,0,40,0.9))',
          borderRadius: '24px',
          border: '2px solid rgba(82,39,255,0.6)',
          boxShadow: '0 20px 120px rgba(82,39,255,0.35)',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          zIndex: 6
        }}>


          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.2em',
              fontSize: '1rem',
              textTransform: 'uppercase'
            }}>


                
              <span>Hover To Reveal</span>
              <span>Tech Stack</span>
            </div>

            <div
              ref={revealSkillsRef}
              style={{
                position: 'absolute',
                inset: '0',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                pointerEvents: 'none',
                '--mx': '-9999px',
                '--my': '-9999px',
                WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0) 240px)',
                maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0) 240px)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                mixBlendMode: 'screen'
              }}
            >
              {skills.map((group) => (
                <div
                  key={group.title}
                  style={{
                    border: '1px solid rgba(82,39,255,0.4)',
                    borderRadius: '16px',
                    padding: '1rem',
                    background: 'rgba(10,0,25,0.5)',
                    boxShadow: '0 10px 40px rgba(82,39,255,0.2)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#a48dff', letterSpacing: '0.05em' }}>
                    {group.title}
                  </h4>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '0.9rem', color: '#f5f2ff' }}>
                    {group.items.map((item) => (
                      <li key={item} style={{ opacity: 0.85 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <Image
          ref={revealImgRef}
          src="/path/to/image.jpg"
          alt="Reveal effect"
          fill
          priority
          style={{
            position: 'absolute',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          }}
        />
      </div>
    );
  }