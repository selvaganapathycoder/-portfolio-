import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaMagic,
  FaLayerGroup,
  FaRocket,
  FaGithub,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal cards with a staggered entrance
      gsap.from(".service-card-wrapper", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      });

      // Brand Statement Reveal
      gsap.to(".brand-statement", {
        scrollTrigger: {
          trigger: ".identity-section",
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1,
        },
        color: "rgba(255, 255, 255, 1)",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "React & Next.js",
      desc: "Building scalable, production-ready applications with TypeScript and component-driven architectures.",
      icon: <FaReact />,
      accent: "#61dafb",
    },
    {
      title: "Cinematic UI",
      desc: "Crafting immersive digital storytelling using GSAP and fluid, premium micro-interactions.",
      icon: <FaMagic />,
      accent: "#ff4c4c",
    },
    {
      title: "Dashboards",
      desc: "Designing complex, data-heavy business interfaces with clean state management and visualization.",
      icon: <FaLayerGroup />,
      accent: "#a855f7",
    },
    {
      title: "Full-Stack",
      desc: "Seamlessly connecting frontends with robust backends like Supabase and high-performance APIs.",
      icon: <FaRocket />,
      accent: "#ec4899",
    },
  ];

  const contributions = [
    {
      title: "Cal.com (OSS)",
      impact: "UI System Refactor & Tech Debt",
      desc: "Standardized UI components for 30k+ star repo. Migrated legacy styles to Tailwind CSS across monorepo.",
      url: "https://github.com/calcom/cal.com",
      icon: <FaGithub />,
      accent: "#ff4c4c",
    },
    {
      title: "react-use",
      impact: "Memory Leak Fix & Stability",
      desc: "Resolved critical memory leak in useScrolling hook. Optimized React cleanup logic for production-scale use.",
      url: "https://github.com/streamich/react-use/pull/2675",
      icon: <FaCode />,
      accent: "#3b82f6",
    },
    {
      title: "Protein Tracker",
      impact: "PWA Core Feature Logic",
      desc: "Built custom Monthly Calendar & Streak Visualization with offline-first strategy using localStorage.",
      url: "https://github.com/selvaganapathycoder/protein-drink-tracker/pull/1",
      icon: <FaCalendarAlt />,
      accent: "#10b981",
    },
  ];

  return (
    <div
      className="app-container-2 !min-h-0 !py-24"
      id="services"
      ref={sectionRef}
    >
      <div className="grid-background opacity-30"></div>

      <section className="services-section container mx-auto px-6 max-w-7xl relative z-10">
        {/* --- Professional Services Block --- */}
        <div className="mb-32">
          <div className="text-center md:text-left mb-16">
            <span className="badge">Expertise</span>
            <h2 className="section-title !mb-4">
              Professional <span className="highlight-text">Services</span>
            </h2>
            <p className="text-white/40 max-w-xl text-lg font-light leading-relaxed">
              Tailored digital solutions focusing on performance, scalability,
              and premium user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <div key={i} className="service-card-wrapper group">
                <div className="relative h-full flex flex-col p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 bg-white/5 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Open Source Contributions Block --- */}
        <div>
          <div className="text-center md:text-left mb-16">
            <span className="badge">Impact</span>
            <h2 className="section-title !mb-4">
              Open Source <span className="highlight-text">Contributions</span>
            </h2>
            <p className="text-white/40 max-w-xl text-lg font-light leading-relaxed">
              Actively building and improving the tools the global dev community
              relies on every day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contributions.map((item, i) => (
              <div key={i} className="service-card-wrapper h-full group">
                <div className="relative h-full flex flex-col p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                  <div
                    className="absolute top-0 left-10 right-10 h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
                    }}
                  ></div>

                  <div className="flex justify-between items-start mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `${item.accent}15`,
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/5 text-white/20 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <FiExternalLink />
                    </a>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                      <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
                        <FiCheckCircle style={{ color: item.accent }} /> Key
                        Impact
                      </div>
                      <p className="text-sm text-white/90 leading-snug">
                        {item.impact}
                      </p>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-lg" /> Inspect Contribution
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="identity-section !py-24">
        <h2 className="brand-statement text-center">
          Architecting high-performance{" "}
          <span className="highlight-text">digital solutions</span> by bridging
          the gap between innovative design and enterprise-grade engineering.
        </h2>
      </div>
    </div>
  );
};

export default Services;
