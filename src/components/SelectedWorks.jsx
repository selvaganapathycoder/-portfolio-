import React, { useEffect, useRef, useState } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import gsap from "gsap";

const projects = [
  {
    title: "Sebathi V3",
    desc: "High-performance AI SaaS platform with a Bento-grid layout, featuring React 19, Next.js 15, and immersive scroll interactions.",
    badge: "AI SaaS • Landing Page",
    img: "/img/robo.png",
    link: "https://sebathi-v3-7cqptqto3-selvaganapathys-projects-840a79fb.vercel.app",
  },
  {
    title: "EcoScan",
    desc: "Empowering eco-conscious choices through instant barcode scanning, providing sustainability scores and eco-friendly alternatives.",
    badge: "Sustainability • AI Tech",
    img: "/img/sutabble.jpeg",
    link: "https://sustainable-shopping-assistant-3dbj231dj.vercel.app",
  },
  {
    title: "World Explorer",
    desc: "Real-time global intelligence dashboard featuring a premium glassmorphic UI, live geospatial data, and immersive visualizations.",
    badge: "Intelligence • Dashboard",
    img: "/img/world-explorer img.png",
    link: "https://world-explorer-global-intelligence-dashboard-qe6lbqd0n.vercel.app",
  },
  {
    title: "Mojito Hub",
    desc: "A premium, cinematic cocktail experience featuring advanced scroll-driven GSAP animations and sophisticated interactive design.",
    badge: "Hospitality • GSAP",
    img: "/img/hero.png",
    link: "https://sk-mojito-if9pjtje5-selvaganapathys-projects-840a79fb.vercel.app",
  },
  {
    title: "React Admin",
    desc: "A comprehensive analytics dashboard featuring real-time data visualization, Nivo charts, and a fully themable Material UI design.",
    badge: "Dashboard • Analytics",
    img: "/img/dashboard (1).png",
    link: "https://admin-dashboard-askrjgw8m-selvaganapathys-projects-840a79fb.vercel.app",
  },
];

const SelectedWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const slides = containerRef.current.querySelectorAll(".slide");
    if (slides.length > 0) {
      slides[0].classList.add("show");
      gsap.set(slides[0], { opacity: 1 });
    }
    return () => {
      gsap.killTweensOf(slides);
    };
  }, []);

  const handleSlideChange = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slides = containerRef.current.querySelectorAll(".slide");
    const currentSlide = slides[currentIndex];
    let nextIndex = 0;

    if (direction === "next") {
      nextIndex = (currentIndex + 1) % projects.length;
    } else {
      nextIndex = (currentIndex - 1 + projects.length) % projects.length;
    }

    const nextSlide = slides[nextIndex];
    const currentImg = currentSlide.querySelector("img");
    const nextImg = nextSlide.querySelector("img");

    // Animation direction based on screen size
    const isVertical = isMobile;
    const offset = 150;

    // Initial setup for next slide
    nextSlide.classList.add("show");
    gsap.set(nextSlide, {
      opacity: 0,
      x: isVertical ? 0 : direction === "next" ? offset : -offset,
      y: isVertical ? (direction === "next" ? offset : -offset) : 0,
      filter: "blur(20px)",
    });
    gsap.set(nextImg, { scale: 1.3 });

    const tl = gsap.timeline({
      onComplete: () => {
        currentSlide.classList.remove("show");
        gsap.set(currentSlide, { x: 0, y: 0, opacity: 0, filter: "blur(0px)" });
        setCurrentIndex(nextIndex);
        isAnimating.current = false;
      },
    });

    // Animate out current
    tl.to(
      currentSlide,
      {
        opacity: 0,
        x: isVertical ? 0 : direction === "next" ? -offset : offset,
        y: isVertical ? (direction === "next" ? -offset : offset) : 0,
        filter: "blur(20px)",
        duration: 1.2,
        ease: "expo.inOut",
      },
      0,
    );

    tl.to(
      currentImg,
      {
        scale: 1.3,
        duration: 1.2,
        ease: "expo.inOut",
      },
      0,
    );

    // Animate in next
    tl.to(
      nextSlide,
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out",
      },
      0.2,
    );

    tl.to(
      nextImg,
      {
        scale: 1,
        duration: 1.6,
        ease: "expo.out",
      },
      0.2,
    );

    // Animate text elements
    const textElements = nextSlide.querySelectorAll(
      ".badge, h2, p, .slide-actions",
    );
    tl.fromTo(
      textElements,
      { opacity: 0, y: 40, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
      0.6,
    );
  };

  // Spotlight effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="app-container-3" id="work">
      <div className="work-header">
        <h2 className="section-title">
          Selected <span className="highlight-text">Works</span>
        </h2>
        <p className="section-desc">
          A curated collection of digital experiences I've crafted, focusing on
          performance, aesthetics, and user impact.
        </p>
      </div>

      <div className="slider-outer">
        <div
          className="slider-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <div key={index} className="slide">
              <div className="project-slide-content">
                <div className="slide-image-wrapper">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="slide-details">
                  <div className="slide-nav">
                    <button
                      className="slider-btn prev"
                      onClick={() => handleSlideChange("prev")}
                      aria-label="Previous project"
                    >
                      {isMobile ? <FaChevronUp /> : <FaChevronLeft />}
                    </button>
                    <button
                      className="slider-btn next"
                      onClick={() => handleSlideChange("next")}
                      aria-label="Next project"
                    >
                      {isMobile ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                  </div>
                  <span className="badge">{project.badge}</span>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link-alt"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
