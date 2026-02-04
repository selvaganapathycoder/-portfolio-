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
            Interactive digital <br />
            experiences by{" "}
            <span className="highlight-text">Selvaganapathy</span>.
          </h1>
          <p className="subheadline">
            Frontend Developer specializing in high-performance web architecture
            and immersive design.
          </p>
          <a href="/img/resume selva (3)-pages.pdf" className="hero-cta">
            Resume <FaArrowRight />
          </a>
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
