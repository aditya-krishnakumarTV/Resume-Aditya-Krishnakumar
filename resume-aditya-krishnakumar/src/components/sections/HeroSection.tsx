import { CSSProperties, useRef } from "react";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import profileImage from "../../assets/Aditya Krishnakumar 2024.JPG";

gsap.registerPlugin(useGSAP);

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: NavigationProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    // Floating animation for profile image
    gsap.to(".profile-float", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Background particles animation
    gsap.to(".particle", {
      y: -100,
      x: "random(-50, 50)",
      duration: 3,
      ease: "none",
      stagger: 0.2,
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid"
    >
      {/* Background particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-accent rounded-full opacity-40 shadow-red"
          style={
            {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            } as CSSProperties
          }
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-primary rounded-full opacity-40 shadow-violet"
          style={
            {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            } as CSSProperties
          }
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1
            ref={titleRef}
            className="font-orbitron text-5xl md:text-6xl text-white font-medium mb-6 glitch"
            data-text="ADITYA KRISHNAKUMAR"
          >
            <span>ADITYA KRISHNAKUMAR</span>
          </h1>

          <p
            ref={subtitleRef}
            className="font-rajdhani text-xl md:text-2xl text-primary mb-8 font-medium"
          >
            &gt; UI DEVELOPER_
          </p>

          <div ref={ctaRef} className="space-y-4">
            <p className="text-gray-200 text-lg max-w-md">
              A results-driven UI Developer with over 3 years of experience.
              Passionate about creating impactful and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "var(--shadow-neon-violet)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("experience")}
                className="px-8 py-3 bg-primary text-primary-foreground font-rajdhani font-bold rounded-lg border border-primary border-neon transition-cyber"
              >
                VIEW WORK
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "var(--shadow-neon-red)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
                className="px-8 py-3 border border-accent text-accent font-rajdhani font-bold rounded-lg hover:bg-accent/10 transition-cyber"
              >
                CONTACT ME
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-gradient rounded-full blur-xl opacity-50 profile-float"></div>
            <img
              src={profileImage}
              alt="Aditya Krishnakumar"
              className="profile-float relative z-10 w-80 h-90 object-cover rounded-full border-4 border-accent shadow-accent"
            />

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-primary rounded-full opacity-40"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
