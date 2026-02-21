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
      desc: "Building scalable, production-ready applications with TypeScript and clean architectures.",
      icon: <FaReact />,
      accent: "#61dafb",
    },
    {
      title: "Cinematic UI",
      desc: "Crafting immersive digital storytelling using GSAP and fluid micro-interactions.",
      icon: <FaMagic />,
      accent: "#ff4c4c",
    },
    {
      title: "Dashboards",
      desc: "Designing complex, data-heavy business interfaces with intuitive visualization.",
      icon: <FaLayerGroup />,
      accent: "#a855f7",
    },
    {
      title: "Full-Stack",
      desc: "Seamlessly connecting frontends with robust backends like Supabase and Node.js.",
      icon: <FaRocket />,
      accent: "#ec4899",
    },
  ];

  const contributions = [
    {
      title: "Cal.com (OSS)",
      impact: "UI System Refactor",
      desc: "Standardized UI components for 30k+ star repo. Migrated legacy styles to Tailwind CSS.",
      url: "https://github.com/calcom/cal.com",
      icon: <FaGithub />,
      accent: "#ff4c4c",
    },
    {
      title: "react-use",
      impact: "Memory Leak Fix",
      desc: "Resolved critical memory leak in useScrolling hook. Optimized React cleanup logic.",
      url: "https://github.com/streamich/react-use/pull/2675",
      icon: <FaCode />,
      accent: "#3b82f6",
    },
    {
      title: "Protein Tracker",
      impact: "PWA Implementation",
      desc: "Built custom Monthly Calendar & Streak Visualization with offline-first strategy.",
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
        <div className="mb-24">
          <div className="text-center md:text-left mb-12">
            <span className="badge">Expertise</span>
            <h2 className="section-title !mb-4">
              Professional <span className="highlight-text">Services</span>
            </h2>
            <p className="text-white/40 max-w-xl text-lg font-light">
              Tailored digital solutions focusing on performance, scalability,
              and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <div key={i} className="service-card-wrapper group">
                <div className="relative h-full p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 bg-white/5 text-white/80 group-hover:scale-110 transition-transform duration-500"
                    style={{ color: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Open Source Contributions Block --- */}
        <div>
          <div className="text-center md:text-left mb-12">
            <span className="badge">Impact</span>
            <h2 className="section-title !mb-4">
              Open Source <span className="highlight-text">Contributions</span>
            </h2>
            <p className="text-white/40 max-w-xl text-lg font-light">
              Actively building and improving the tools the global dev community
              relies on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <div key={i} className="service-card-wrapper group">
                <div className="relative h-full flex flex-col p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                  {/* Top Glow Accent */}
                  <div
                    className="absolute top-0 left-10 right-10 h-[2px] opacity-20 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
                    }}
                  ></div>

                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/5 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: item.accent }}
                    >
                      {item.icon}
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-white/20 hover:text-white transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                      <FiCheckCircle style={{ color: item.accent }} />{" "}
                      {item.impact}
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="identity-section !py-20">
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
