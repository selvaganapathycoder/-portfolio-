import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial Reveal Animation for Header
      const splitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-split",
          start: "top 60%",
        },
      });

      splitTl
        .to(".split-reveal-text", {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .to(
          ".split-reveal-subtext",
          {
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        );

      // 2. Main Scroll-Linked Animation
      const mainSplitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".split-animation-container",
          start: "top 20%",
          end: "+=2000",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Explicitly set initial state
      mainSplitTl
        .set(".split-image-wrapper", { gap: "0px" })
        .set([".split-card-front", ".split-card-back"], {
          borderRadius: "0px",
        });

      // Phase 1: Tiny delay
      mainSplitTl.to({}, { duration: 0.2 });

      // Phase 2 & 3: Split, Spacing, and Curving
      mainSplitTl
        .to(".split-image-wrapper", {
          gap: "40px",
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          [".split-card-front", ".split-card-back"],
          {
            borderRadius: "20px",
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        );

      // Phase 4: The Flip
      mainSplitTl.to(".split-card-inner", {
        rotateY: 180,
        duration: 2,
        stagger: 0.2,
        ease: "back.out(1.2)",
      });

      // Final Touch: Scale
      mainSplitTl.to(
        ".split-image-wrapper",
        {
          scale: 0.95,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=1.5",
      );
    }, componentRef); // Scope to componentRef

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container-4" id="process" ref={componentRef}>
      <section className="hero-split">
        <div className="split-grid-bg"></div>

        <div className="split-container">
          <div className="split-header">
            <h1 className="split-reveal-text">
              Strategic <span className="highlight-text">Mastery</span>
            </h1>
            <p className="split-reveal-subtext">
              A curated showcase of professional certifications and technical
              excellence.
            </p>
          </div>

          <div className="split-animation-container">
            <div className="split-image-wrapper">
              {/* We repeat the same image 3 times, but view different parts */}
              <div className="split-card split-card-1">
                <div className="split-card-inner">
                  <div className="split-card-front">
                    <div className="split-image-slice split-segment-1"></div>
                  </div>
                  <div className="split-card-back">
                    <div className="split-back-image">
                      <img src="/img/web.png" alt="Web Development Mastery" />
                    </div>
                    <div className="split-back-content">
                      <h3>Web Development</h3>
                      <p>
                        Comprehensive mastery of modern frontend and backend
                        architectures, focusing on performance and scalability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="split-card split-card-2">
                <div className="split-card-inner">
                  <div className="split-card-front">
                    <div className="split-image-slice split-segment-2"></div>
                  </div>
                  <div className="split-card-back">
                    <div className="split-back-image">
                      <img
                        src="/img/react cer.png"
                        alt="React.js Certification"
                      />
                    </div>
                    <div className="split-back-content">
                      <h3>React Architecture</h3>
                      <p>
                        Certified in advanced React patterns, hooks
                        optimization, and building scalable frontend
                        architectures for modern web apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="split-card split-card-3">
                <div className="split-card-inner">
                  <div className="split-card-front">
                    <div className="split-image-slice split-segment-3"></div>
                  </div>
                  <div className="split-card-back">
                    <div className="split-back-image">
                      <img
                        src="/img/figma cert.jpg"
                        alt="UI/UX Figma Certification"
                      />
                    </div>
                    <div className="split-back-content">
                      <h3>UI/UX Architecture</h3>
                      <p>
                        Professional validation in crafting enterprise design
                        systems, high-intent prototypes, and user-centric
                        digital strategies in Figma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra space for scroll animation */}
        <div className="split-spacer"></div>
      </section>
    </div>
  );
};

export default Process;
