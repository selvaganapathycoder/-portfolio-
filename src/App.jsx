import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrustBar from "./components/TrustBar";
import SelectedWorks from "./components/SelectedWorks";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // --- Specific Hero Scroll-Over Effect ---
      const heroContainer = document.querySelector(".app-container");
      const nextContainer = document.querySelector(".app-container-2");

      if (heroContainer && nextContainer) {
        // 1. Pin the Hero Container
        ScrollTrigger.create({
          trigger: heroContainer,
          start: "top top",
          endTrigger: nextContainer,
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // 2. Hero Receding Transition
        gsap.to(heroContainer, {
          scrollTrigger: {
            trigger: nextContainer,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
          scale: 0.85,
          opacity: 0.2,
          filter: "blur(20px)",
          ease: "none",
          onLeaveBack: () => gsap.set(heroContainer, { clearProps: "all" }),
        });

        // 3. Parallax for Hero Background and Hands
        gsap.to(".bg-image img", {
          scrollTrigger: {
            trigger: heroContainer,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: "20%",
          scale: 1.25,
        });

        gsap.to(".hand-left", {
          scrollTrigger: {
            trigger: heroContainer,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: -180,
          x: -80,
          rotation: -30,
        });

        gsap.to(".hand-right", {
          scrollTrigger: {
            trigger: heroContainer,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 180,
          x: 80,
          rotation: 30,
        });
      }

      // Hero Hands Entrance Animation
      gsap.from(".hand-left", {
        x: -300,
        y: -150,
        rotation: -45,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hand-right", {
        x: 300,
        y: 150,
        rotation: 45,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.2,
      });

      // --- ScrollSpy: Highlight Active Nav Link ---
      const sections = [
        "#home",
        "#services",
        "#work",
        "#experience",
        "#process",
        "#contact",
      ];
      const navLinks = document.querySelectorAll(".nav-links a");

      sections.forEach((id) => {
        const section = document.querySelector(id);
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => updateActiveLink(id),
            onEnterBack: () => updateActiveLink(id),
          });
        }
      });

      function updateActiveLink(id) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === id) {
            link.classList.add("active");
          }
        });
      }
    });

    // Refresh ScrollTrigger to ensure all calculations are correct
    ScrollTrigger.refresh();

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <TrustBar />
      <SelectedWorks />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
