import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".app-container-5",
          start: "top 70%",
        },
      });

      contactTl
        .from(".contact-header .section-title", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".contact-header .section-desc",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .from(
          ".contact-form",
          {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8",
        );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container-5" id="contact" ref={componentRef}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">
            Let's <span className="highlight-text">Connect</span>
          </h2>
          <p className="section-desc">
            Reach out for inquiries, collaborations, or just to say hello. I'm
            here to help!
          </p>
        </div>

        <div
          className="contact-form"
          style={{ backgroundImage: "url('/img/profile1.jpeg')" }}
        >
          <form id="contactForm">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
