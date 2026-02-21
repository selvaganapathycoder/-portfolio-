import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".exp-header > *", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 80%",
        },
      });

      // Reveal cards
      gsap.from(".exp-card-wrapper", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".exp-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contributions = [
    {
      title: "Cal.com",
      subtitle: "Open Source Scheduling Infrastructure",
      url: "https://github.com/calcom/cal.com",
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "pnpm"],
      impact: "UI Modernization & Tech Debt Reduction",
      description: [
        "Refactored core @calcom/ui components to Tailwind CSS.",
        "Standardized styling across 30k+ star monorepo.",
        "Resolved complex pnpm dependency resolutions.",
      ],
      icon: <FiLayers />,
      accent: "#ff4c4c",
    },
    {
      title: "react-use",
      subtitle: "Essential React Hooks Collection",
      url: "https://github.com/streamich/react-use",
      pr: "https://github.com/streamich/react-use/pull/2675",
      tech: ["React", "TypeScript", "Hooks"],
      impact: "Performance & Memory Stability",
      description: [
        "Fixed a critical memory leak in useScrolling hook.",
        "Improved timer cleanup logic for production apps.",
      ],
      icon: <FiCode />,
      accent: "#3b82f6",
    },
    {
      title: "Protein Tracker",
      subtitle: "Progressive Web Application (PWA)",
      url: "https://github.com/selvaganapathycoder/protein-drink-tracker",
      pr: "https://github.com/selvaganapathycoder/protein-drink-tracker/pull/1",
      tech: ["Vanilla JS", "PWA", "Glassmorphism"],
      impact: "Core Feature: Persistence & Visualization",
      description: [
        "Built custom Monthly Calendar & Streak Visualization.",
        "Implemented offline-first strategy with localStorage.",
      ],
      icon: <FiCalendar />,
      accent: "#10b981",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#050505]"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#ff4c4c] blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#3b82f6] blur-[150px] rounded-full"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="exp-header mb-16 md:mb-24 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-[#ff4c4c]">
            Contributions
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-tight">
            Open Source{" "}
            <span className="italic font-normal text-white">Impact</span>
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-light">
            My active participation in the global ecosystem, focusing on solving
            complex bugs and upgrading UI infrastructures.
          </p>
        </div>

        <div className="exp-grid grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {contributions.map((item, idx) => (
            <div key={idx} className="exp-card-wrapper h-full group">
              <div className="relative h-full flex flex-col p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/20 group-hover:-translate-y-2">
                <div
                  className="absolute top-0 left-10 right-10 h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
                  }}
                ></div>

                <div className="mb-8 flex justify-between items-start">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `${item.accent}15`,
                      color: item.accent,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-white/30 mb-6 tracking-wide">
                    {item.subtitle}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-white/60">
                      <FiCheckCircle className="text-green-500" /> Key Impact
                    </div>
                    <p className="text-sm text-white/80 leading-snug">
                      {item.impact}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex gap-4 items-start text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors"
                      >
                        <span
                          className="shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                          style={{ background: item.accent }}
                        ></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-auto border-t border-white/5">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-white/5 text-white/40 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.pr && (
                    <a
                      href={item.pr}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 relative overflow-hidden group/btn bg-white/5 hover:bg-white/10"
                    >
                      <FiCode /> View Pull Request
                      <FiExternalLink className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
