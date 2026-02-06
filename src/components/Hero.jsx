import React, { useEffect, useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container" id="home">
      {/* Background */}
      <div className="bg-image">
        <img src="/img/background-1.avif" alt="Background Texture" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="headline">
            Crafting <span className="highlight-text">Digital Excellence</span>{" "}
            <br />
            through code & design.
          </h1>
          <p className="subheadline">
            I'm <span className="text-white font-bold">Selvaganapathy</span>, a
            Senior Frontend Architect specializing in high-performance web
            systems and cinematic user experiences.
          </p>
          <div className="hero-actions flex gap-6 justify-center">
            <a href="#work" className="hero-cta">
              View Projects <FaArrowRight />
            </a>
            <a
              href="/img/resume selva (3)-pages.pdf"
              className="hero-cta secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </main>

      {/* Hands Assets */}
      <div className="hands-container">
        <img
          src="/img/hand-left.avif"
          alt="Left Hand"
          className="hand hand-left"
        />
        <img
          src="/img/hand-right.avif"
          alt="Right Hand"
          className="hand hand-right"
        />
      </div>

      {/* Footer / Bottom Info */}
      <footer className="bottom-bar">
        <div className="time" id="local-time">
          {time}
        </div>
        <a href="#services" className="scroll-indicator">
          Scroll to Explore <FaChevronDown />
        </a>
        <div className="location">PDY, IND</div>
      </footer>
    </div>
  );
};

export default Hero;
