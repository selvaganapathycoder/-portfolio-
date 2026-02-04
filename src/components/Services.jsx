import React, { useEffect, useRef } from "react";
import { FaLayerGroup, FaReact, FaMagic, FaRocket } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const serviceCards = document.querySelectorAll(".service-card");
      if (serviceCards.length > 0) {
        gsap.to(".service-card", {
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

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

      // Pro spotlight effect logic
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container-2" id="services" ref={sectionRef}>
      <div className="grid-background"></div>

      <div className="service-container">
        <section className="services-section container4">
          <span className="badge">What I Offer</span>
          <h2 className="section-title">
            Professional <span className="highlight-text">Services</span>
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaLayerGroup />
              </div>
              <div className="service-content">
                <h3>Full-Stack Solutions</h3>
                <p>
                  Architecting end-to-end applications with modern stacks.
                  Seamless integration of robust backends with high-fidelity
                  frontend experiences.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaReact />
              </div>
              <div className="service-content">
                <h3>Next.js Architecture</h3>
                <p>
                  Building production-ready applications with Server Components,
                  optimized routing, and enterprise-grade performance patterns.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaMagic />
              </div>
              <div className="service-content">
                <h3>Interactive UI/UX</h3>
                <p>
                  Crafting immersive digital journeys using GSAP, Framer Motion,
                  and Three.js. Design systems that bridge the gap between form
                  and function.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaRocket />
              </div>
              <div className="service-content">
                <h3>Performance Strategy</h3>
                <p>
                  Extreme optimization for Core Web Vitals. Ensuring ultra-fast
                  load times, SEO dominance, and flawless accessibility
                  standards.
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
