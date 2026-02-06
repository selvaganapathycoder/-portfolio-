import React from "react";
import { FaAward } from "react-icons/fa";

const TrustBar = () => {
  return (
    <div className="app-trust-container">
      <div className="trust-bar-backdrop"></div>
      <div className="trust-bar">
        <div className="trust-info">
          <div className="trust-badge">
            <div className="trust-icon-box">
              <FaAward className="laurel-icon" />
            </div>
            <div className="trust-label">
              <span className="small-caps">Recognized</span>
              <span className="bold">Design Technologist</span>
            </div>
          </div>
        </div>

        <div className="partner-marquee">
          <div className="marquee-track">
            <div className="partner-logo">
              <img src="/img/html5-02-svgrepo-com.svg" alt="HTML5" />
            </div>
            <div className="partner-logo">
              <img src="/img/css3-02-svgrepo-com.svg" alt="CSS3" />
            </div>
            <div className="partner-logo">
              <img src="/img/js01-svgrepo-com.svg" alt="JS" />
            </div>
            <div className="partner-logo">
              <img
                src="/img/react-logo-programming-2-svgrepo-com.svg"
                alt="React"
              />
            </div>
            <div className="partner-logo">
              <img src="/img/typescript-svgrepo-com.svg" alt="TS" />
            </div>
            <div className="partner-logo">
              <img src="/img/next-js-svgrepo-com.svg" alt="Next.js" />
            </div>
            <div className="partner-logo">
              <img src="/img/figma-svgrepo-com.svg" alt="Figma" />
            </div>
            <div className="partner-logo">
              <img src="/img/bootstrap-fill-svgrepo-com.svg" alt="Bootstrap" />
            </div>
            <div className="partner-logo">
              <img src="/img/github-142-svgrepo-com.svg" alt="GitHub" />
            </div>
            <div className="partner-logo">
              <img src="/img/tailwindcss-svgrepo-com.svg" alt="Tailwind" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="partner-logo">
              <img src="/img/html5-02-svgrepo-com.svg" alt="HTML5" />
            </div>
            <div className="partner-logo">
              <img src="/img/css3-02-svgrepo-com.svg" alt="CSS3" />
            </div>
            <div className="partner-logo">
              <img src="/img/js01-svgrepo-com.svg" alt="JS" />
            </div>
            <div className="partner-logo">
              <img
                src="/img/react-logo-programming-2-svgrepo-com.svg"
                alt="React"
              />
            </div>
            <div className="partner-logo">
              <img src="/img/typescript-svgrepo-com.svg" alt="TS" />
            </div>
            <div className="partner-logo">
              <img src="/img/next-js-svgrepo-com.svg" alt="Next.js" />
            </div>
            <div className="partner-logo">
              <img src="/img/figma-svgrepo-com.svg" alt="Figma" />
            </div>
            <div className="partner-logo">
              <img src="/img/bootstrap-fill-svgrepo-com.svg" alt="Bootstrap" />
            </div>
            <div className="partner-logo">
              <img src="/img/github-142-svgrepo-com.svg" alt="GitHub" />
            </div>
            <div className="partner-logo">
              <img src="/img/tailwindcss-svgrepo-com.svg" alt="Tailwind" />
            </div>
          </div>
        </div>

        <div className="tech-stack-statement">
          <span className="small-caps">Technology Stack</span>
          <p>
            Empowering brands with a world-class technology stack, bridging
            innovative design with enterprise engineering.
          </p>
        </div>

        <div className="trust-info">
          <div className="trust-badge">
            <div className="trust-label align-right">
              <span className="small-caps">Available for</span>
              <span className="bold">Elite Opportunities</span>
            </div>
            <div className="trust-icon-box">
              {/* flip class handles transform scaleX(-1) in CSS */}
              <FaAward className="laurel-icon flip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
