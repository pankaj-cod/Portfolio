"use client";
import { useRef, useEffect } from 'react';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Meteors } from "@/components/ui/meteors";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  const techStack = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ];

  useGSAP(() => {
    if (!titleRef.current || !marqueeRef.current) return;

    gsap.set([titleRef.current, marqueeRef.current], {
      autoAlpha: 0,
      y: 50
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(marqueeRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Skills & Technologies</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            Technologies I work with to build modern, scalable applications
          </p>
        </div>
        
        <div ref={marqueeRef} className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50 overflow-hidden">
          <Meteors number={15} />
          <Meteors number={12} reverse={true} />
          <ThreeDMarquee images={techStack} />
        </div>
      </div>
    </section>
  );
}

