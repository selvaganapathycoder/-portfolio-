import React, { useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".app-footer",
          start: "top 90%",
        },
      });

      footerTl.from(".footer-brand, .footer-contact-info", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="app-footer" ref={footerRef}>
      <div className="footer-bg">
        <img src="/img/footerimg.avif" alt="Footer Background" />
      </div>

      <div className="footer-content">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo">Selva.</div>
            <p>
              Frontend Developer focused on crafting high-performance, immersive
              digital experiences.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/selva-ganapathy-developer"
                target="_blank"
                aria-label="LinkedIn"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/selvaganapathycoder"
                target="_blank"
                aria-label="GitHub"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:selvaganapathy172001@gmail.com"
                aria-label="Email"
              >
                <FaRegEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact-info">
            <h4>Get In Touch</h4>
            <div className="contact-links">
              <a href="mailto:selvaganapathy172001@gmail.com">
                <FaRegEnvelope /> selvaganapathy172001@gmail.com
              </a>
              <a href="tel:+917397042839">
                <FaPhoneAlt /> +91 73970 42839
              </a>
              <p>
                <FaMapMarkerAlt /> Puducherry, India
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2026 Selva Ganapathy. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <button
            className="scroll-to-top"
            id="backToTop"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
