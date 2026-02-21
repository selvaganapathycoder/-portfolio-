import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "PDF Forge",
    desc: "Transform text into professional PDFs instantly with a stunning glassmorphic interface.",
    badge: "SaaS • React • Vite",
    img: "/img/pdf.gif.gif",
    link: "https://pdf-forge-4zgrebs6r-selvaganapathys-projects-840a79fb.vercel.app",
    color: "#c3a5ff",
    gradient: "linear-gradient(135deg, #c3a5ff 0%, #7e57ff 100%)",
    textColor: "#ffffff",
  },
  {
    title: "Sebathi V3",
    desc: "Modern React UI system focused on performance and scalability.",
    badge: "Design System • React",
    img: "/img/sebathi 3.gif",
    link: "https://sebathi-v3-3txvxq2h7-selvaganapathys-projects-840a79fb.vercel.app",
    color: "#5df0b0",
    gradient: "linear-gradient(135deg, #5df0b0 0%, #00b894 100%)",
    textColor: "#000000", // Dark text for light mint
  },
  {
    title: "Admin Dashboard",
    desc: "Business-ready dashboard UI with scalable layout.",
    badge: "FinTech • GSAP",
    img: "/img/dashboard.gif",
    link: "https://admin-dashboard-one-zeta-57.vercel.app",
    color: "#6eb6ff",
    gradient: "linear-gradient(135deg, #6eb6ff 0%, #0984e3 100%)",
    textColor: "#ffffff",
  },
  {
    title: "World Explorer",
    desc: "Real-world API-driven data exploration app. API integration and async data handling.",
    badge: "Data • REST API",
    img: "/img/world.gif",
    link: "https://world-explorer-global-intelligence.vercel.app/",
    color: "#fff35c",
    gradient: "linear-gradient(135deg, #fff35c 0%, #f1c40f 100%)",
    textColor: "#000000", // Dark text for bright yellow
  },
  {
    title: "SK Mojito Hub",
    desc: "Creative frontend project focused on motion and interaction.",
    badge: "Motion • GSAP",
    img: "/img/skmojito.jf.gif",
    link: "https://sk-mojito-hub.vercel.app",
    color: "#ff825c",
    gradient: "linear-gradient(135deg, #ff825c 0%, #d35400 100%)",
    textColor: "#ffffff",
  },
];

const SelectedWorks = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    const section = containerRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(".project-card");

    if (!section || !track || cards.length === 0) return;

    // Calculate total scroll width
    const totalWidth = track.scrollWidth;
    const parentWidth = track.parentElement.offsetWidth;
    const scrollDistance = totalWidth - parentWidth;

    let ctx = gsap.context(() => {
      // 1. Create the main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () =>
            window.innerWidth <= 1024
              ? `+=${totalWidth * 0.6}`
              : `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 2. Horizontal Scroll part
      tl.to(track, {
        x: () => -scrollDistance,
        ease: "none",
        duration: 1, // Normalized duration
      });

      // 3. Optional small pause for desktop only
      if (window.innerWidth > 1024) {
        tl.to({}, { duration: 0.1 });
      }

      // 4. Individual card entrance animations
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            rotateY: 15,
            rotateX: 5,
            z: -100,
            opacity: 0.8,
          },
          {
            rotateY: 0,
            rotateX: 0,
            z: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl, // Associate with the timeline scroll
              start: "left 85%",
              end: "left 20%",
              scrub: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div
      className="app-container-3 work-section-v2"
      id="work"
      ref={containerRef}
    >
      <div className="work-content-split">
        <div className="work-left-header">
          <h2 className="work-title-v2">
            Selected <br /> Works
          </h2>
          <p className="work-desc-v2">
            A collection of purposeful digital experiences exploring the
            intersection of design and technology.
          </p>
        </div>

        <div className="work-right-slider">
          <div ref={trackRef} className="work-slider-track">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{
                  background: project.gradient,
                  color: project.textColor,
                }}
              >
                <div className="work-card-top">
                  <div className="work-card-image">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div
                    className="work-card-badge"
                    style={{
                      backgroundColor:
                        project.textColor === "#000000"
                          ? "rgba(0,0,0,0.8)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {project.badge}
                  </div>
                </div>

                <div className="work-card-bottom">
                  <div className="work-card-info">
                    <span
                      className="work-card-num"
                      style={{
                        color:
                          project.textColor === "#000000"
                            ? "rgba(0,0,0,0.2)"
                            : "rgba(255,255,255,0.3)",
                      }}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className="work-card-title"
                      style={{ color: project.textColor }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="work-card-text"
                      style={{
                        color:
                          project.textColor === "#000000"
                            ? "rgba(0,0,0,0.6)"
                            : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card-link"
                    style={{
                      backgroundColor:
                        project.textColor === "#000000"
                          ? "rgba(0,0,0,0.1)"
                          : "rgba(255,255,255,0.1)",
                      color: project.textColor,
                      borderColor:
                        project.textColor === "#000000"
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
