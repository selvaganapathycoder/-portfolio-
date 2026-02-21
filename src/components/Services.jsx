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
import { FiExternalLink } from "react-icons/fi";
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

      // Pro spotlight effect logic
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
          <span className="badge">Expertise & Impact</span>
          <h2 className="section-title">
            Professional <span className="highlight-text">Services</span> &{" "}
            <span className="highlight-text">Contributions</span>
          </h2>

          <div className="services-grid">
            {/* Core Services */}
            <div className="service-card">
              <div className="service-icon">
                <FaReact />
              </div>
              <div className="service-content">
                <h3>React & Next.js</h3>
                <p>
                  Building scalable, production-ready applications with
                  TypeScript and component-driven architectures.
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
                  Crafting immersive digital experiences with fluid GSAP
                  animations and premium micro-interactions.
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
                  Designing complex, data-heavy business interfaces with clean
                  state management and visualization.
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
                  Connecting frontends with robust backends like Supabase and
                  Node.js. Handling complex APIs and async flows.
                </p>
              </div>
            </div>

            {/* Open Source Impact Items */}
            <div className="service-card">
              <div className="service-icon">
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
                  Standardized UI components for 30k+ star repo. Migrated legacy
                  styles to Tailwind CSS, improving scalability.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <div className="service-content">
                <div className="flex justify-between items-start">
                  <h3>react-use</h3>
                  <a
                    href="https://github.com/streamich/react-use/pull/2675"
                    target="_blank"
                    className="text-white/40 hover:text-[#ff4c4c]"
                  >
                    <FiExternalLink />
                  </a>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#ff4c4c] mb-3 font-bold">
                  Performance Bug Fix
                </p>
                <p>
                  Resolved critical memory leak in `useScrolling` hook.
                  Optimized React cleanup logic for stable high-performance use.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCalendarAlt />
              </div>
              <div className="service-content">
                <div className="flex justify-between items-start">
                  <h3>Feature Design</h3>
                  <a
                    href="https://github.com/selvaganapathycoder/protein-drink-tracker/pull/1"
                    target="_blank"
                    className="text-white/40 hover:text-[#ff4c4c]"
                  >
                    <FiExternalLink />
                  </a>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#ff4c4c] mb-3 font-bold">
                  PWA Implementation
                </p>
                <p>
                  Architected a streak-tracking calendar for Protein Drink
                  Tracker. Built with Vanilla JS & CSS for offline-first
                  performance.
                </p>
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
