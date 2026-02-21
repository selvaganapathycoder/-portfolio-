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
      // Reveal cards using the existing CSS class .service-card
      const cards = document.querySelectorAll(".service-card");
      if (cards.length > 0) {
        gsap.to(".service-card", {
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      // Pro spotlight effect logic (Restore the mouse move effect from index.css)
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      });

      // Brand Statement Reveal
      gsap.to(".brand-statement", {
        scrollTrigger: {
          trigger: ".identity-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        color: "rgba(255, 255, 255, 1)",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container-2 !min-h-0" id="services" ref={sectionRef}>
      <div className="grid-background"></div>

      <div className="service-container">
        <section className="services-section container4">
          {/* Professional Services Section */}
          <div className="mb-20">
            <span className="badge">Expertise</span>
            <h2 className="section-title">
              Professional <span className="highlight-text">Services</span>
            </h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaReact />
                </div>
                <div className="service-content">
                  <h3>Modern Web Apps</h3>
                  <p>
                    Building scalable, production-ready applications with React,
                    Next.js, and TypeScript. Expert in component-driven
                    development.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaMagic />
                </div>
                <div className="service-content">
                  <h3>Cinematic UI & Motion</h3>
                  <p>
                    Crafting immersive digital storytelling using GSAP.
                    Specialized in scroll-driven animations and premium
                    micro-interactions.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaLayerGroup />
                </div>
                <div className="service-content">
                  <h3>Enterprise Dashboards</h3>
                  <p>
                    Designing complex, data-heavy business interfaces. Focusing
                    on clean state management, reusability, and intuitive
                    visualization.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaRocket />
                </div>
                <div className="service-content">
                  <h3>Full-Stack Systems</h3>
                  <p>
                    Seamlessly connecting frontends with robust backends like
                    Supabase and Node.js. Handling complex REST APIs and async
                    flows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Source Contributions Section */}
          <div className="pt-10">
            <span className="badge">Impact</span>
            <h2 className="section-title">
              Open Source <span className="highlight-text">Contributions</span>
            </h2>
            <div className="services-grid">
              <div className="service-card !border-[#ff4c4c]/30">
                <div className="service-icon !text-[#ff4c4c]">
                  <FaGithub />
                </div>
                <div className="service-content">
                  <div className="flex justify-between items-start">
                    <h3>Cal.com (OSS)</h3>
                    <a
                      href="https://github.com/calcom/cal.com"
                      target="_blank"
                      className="text-white/40 hover:text-[#ff4c4c]"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[#ff4c4c] mb-3 font-bold">
                    UI System Refactor
                  </p>
                  <p>
                    Standardized UI components for 30k+ star repo. Migrated
                    legacy styles to Tailwind CSS, improving maintainability
                    across monorepo.
                  </p>
                </div>
              </div>

              <div className="service-card !border-[#3b82f6]/30">
                <div className="service-icon !text-[#3b82f6]">
                  <FaCode />
                </div>
                <div className="service-content">
                  <div className="flex justify-between items-start">
                    <h3>react-use</h3>
                    <a
                      href="https://github.com/streamich/react-use/pull/2675"
                      target="_blank"
                      className="text-white/40 hover:text-[#3b82f6]"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[#3b82f6] mb-3 font-bold">
                    Performance Bug Fix
                  </p>
                  <p>
                    Resolved critical memory leak in `useScrolling` hook.
                    Optimized React cleanup logic to prevent unintended memory
                    retention in production.
                  </p>
                </div>
              </div>

              <div className="service-card !border-[#10b981]/30">
                <div className="service-icon !text-[#10b981]">
                  <FaCalendarAlt />
                </div>
                <div className="service-content">
                  <div className="flex justify-between items-start">
                    <h3>Feature Design</h3>
                    <a
                      href="https://github.com/selvaganapathycoder/protein-drink-tracker/pull/1"
                      target="_blank"
                      className="text-white/40 hover:text-[#10b981]"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[#10b981] mb-3 font-bold">
                    PWA Implementation
                  </p>
                  <p>
                    Architected a streak-tracking calendar for Protein Drink
                    Tracker. Built with Vanilla JS & CSS variables for
                    offline-first performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="identity-section">
        <h2 className="brand-statement">
          Architecting high-performance{" "}
          <span className="highlight-text">digital solutions</span> by bridging
          the gap between innovative design and enterprise-grade engineering.
        </h2>
      </div>
    </div>
  );
};

export default Services;
