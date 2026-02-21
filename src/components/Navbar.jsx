import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className="navbar">
        <div className="logo flex items-center gap-2">
          <span className="text-accent">S</span>elva.
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-socials flex gap-4">
          <a
            href="https://github.com/selvaganapathycoder"
            target="_blank"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/selva-ganapathy-developer"
            target="_blank"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          id="mobileMenuBtn"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        id="mobileMenu"
      >
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
