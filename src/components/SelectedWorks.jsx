import React, { useLayoutEffect, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "PDF Forge",
    desc: "Transform text into professional PDFs instantly with a stunning glassmorphic interface. Features drag & drop support, custom file naming, and smooth animations powered by Framer Motion.",
    badge: "SaaS • React • Vite",
    img: "/img/pdf.gif.gif",
    link: "https://pdf-forge-4zgrebs6r-selvaganapathys-projects-840a79fb.vercel.app",
  },
  {
    title: "Sebathi V3",
    desc: "Modern React UI system focused on performance and scalability. Component-driven architecture with design-system mindset and recruiter-friendly structure.",
    badge: "Design System • React",
    img: "/img/sebathi 3.gif",
    link: "https://sebathi-v3-3txvxq2h7-selvaganapathys-projects-840a79fb.vercel.app",
  },
  {
    title: "Admin Dashboard",
    desc: "Business-ready dashboard UI with scalable layout. Mirrors real company dashboards with reusable components, clean state flow, and GSAP animations.",
    badge: "FinTech • GSAP",
    img: "/img/dashboard.gif",
    link: "https://admin-dashboard-one-zeta-57.vercel.app",
  },
  {
    title: "World Explorer",
    desc: "Real-world API-driven data exploration app. API integration, async data handling, and real-world data visualization with clean responsive layouts.",
    badge: "Data • REST API",
    img: "/img/world.gif",
    link: "https://world-explorer-global-intelligence.vercel.app/",
  },
  {
    title: "SK Mojito Hub",
    desc: "Creative frontend project focused on motion and interaction. Advanced UI motion skills, scroll-based animations, and strong visual differentiation.",
    badge: "Motion • GSAP",
    img: "/img/skmojito.jf.gif",
    link: "https://sk-mojito-hub.vercel.app",
  },
];

const SelectedWorks = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        // Horizontal Scroll for Desktop
        const track = trackRef.current;
        const cards = gsap.utils.toArray(".project-card");

        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            invalidateOnRefresh: true,
          },
        });

        // Individual card reveals
        cards.forEach((card) => {
          gsap.fromTo(
            card.querySelector(".card-image"),
            { scale: 1.2, filter: "brightness(0.5)" },
            {
              scale: 1,
              filter: "brightness(1)",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: null,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });

        // Hide Header Content Logic
        gsap.to(".work-header-content", {
          opacity: 0,
          x: -50,
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200", // Fades out quickly
            scrub: true,
          },
        });
      });

      mm.add("(max-width: 1024px)", () => {
        // Stacking Cards Animation for Mobile
        const cards = gsap.utils.toArray(".project-card");
        cards.forEach((card) => {
          // Simple fade in for the card as it approaches
          gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Trigger slightly earlier
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container-3" id="work" ref={containerRef}>
      <div className="work-sticky-header">
        <div className="work-header-content">
          <h2 className="section-title">
            Selected <span className="highlight-text">Works</span>
          </h2>
          <p className="section-desc">
            Exploring the intersection of design and technology through
            purposeful digital experiences.
          </p>
        </div>
      </div>

      <div className="horizontal-slider-wrapper">
        <div className="horizontal-track" ref={trackRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-inner">
                <div className="card-image-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="card-image"
                  />
                  <div className="card-overlay"></div>
                  <div className="card-badge">{project.badge}</div>
                </div>
                <div className="card-details">
                  <div className="card-header">
                    <span className="card-index">0{index + 1}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-link"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for horizontal scroll end */}
          <div className="scroll-spacer"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
