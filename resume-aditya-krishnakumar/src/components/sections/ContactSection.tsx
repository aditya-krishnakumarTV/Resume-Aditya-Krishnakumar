import { useEffect, useRef, useState } from "react";

import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Phone, Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

import resumeFile from "../../assets/AdityaKrishnakumar_Resume.pdf";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const availableRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const colors = ["#cf36fd", "#e31541"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useGSAP(() => {
    const section = sectionRef.current;
    const contact = contactRef.current;
    const availability = availableRef.current;
    const resume = resumeRef.current;

    if (section && availability && contact && resume) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        contact,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          resume,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          availability,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7972914071",
      href: "tel:+917972914071",
    },
    {
      icon: Mail,
      label: "Email",
      value: "adityakrishnakumar12@gmail.com",
      href: "mailto:adityakrishnakumar12@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/aditya-krishnakumar-335530221/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      href: "https://github.com/aditya-krishnakumarTV",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const textVariants = {
    // Initial state: fully visible with the current color
    initial: { opacity: 1, color: colors[currentColorIndex] },
    // Exit state: fades out to a dim/transparent state
    exit: { opacity: 0, transition: { duration: 0.8, ease: easeOut } },
    // Enter state: fades in to the new color
    animate: {
      opacity: 1,
      color: colors[currentColorIndex],
      transition: { duration: 0.8, ease: easeIn },
    },
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="text-accent">&lt;</span>
            <span className="text-foreground">CONTACT</span>
            <span className="text-accent">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-gradient mx-auto"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's connect and build
            something amazing together.
          </p>
        </motion.div>

        <div className="gap-12">
          {/* <div
            ref={formRef}
            className="backdrop-blur-md bg-card/10 border border-primary/30 rounded-lg p-8 scanlines relative"
          >
            <h3 className="font-orbitron text-2xl font-bold text-primary mb-6">
              SEND MESSAGE
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-accent font-rajdhani font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background/50 border border-muted rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-cyber"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-accent font-rajdhani font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background/50 border border-muted rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-cyber"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-accent font-rajdhani font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-background/50 border border-muted rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-cyber"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-accent font-rajdhani font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-background/50 border border-muted rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-cyber resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-violet)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary text-primary-foreground font-rajdhani font-bold py-3 rounded-lg border border-primary border-neon transition-cyber"
              >
                TRANSMIT MESSAGE
              </motion.button>
            </form>
          </div> */}

          <div className="space-y-6">
            <div
              ref={contactRef}
              className="backdrop-blur-md bg-card/10 border border-accent/30 rounded-lg p-8"
            >
              <h3 className="font-orbitron text-2xl font-bold text-accent mb-6">
                CONTACT INFO
              </h3>
              <div className="grid lg:grid-cols-2 space-y-6 gap-2">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 m-1 rounded-lg bg-background/20 border border-muted/30 hover:border-accent/50 transition-cyber
                    max-w-full"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-rajdhani font-medium text-foreground text-sm md:text-lg">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-cyber text-xs md:text-sm"
                          target={
                            item.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm md:text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              ref={resumeRef}
              className="backdrop-blur-md bg-card/10 border border-primary/30 rounded-lg p-8"
            >
              <h3 className="font-orbitron text-xl font-bold text-primary mb-4">
                DOWNLOAD RESUME
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Get a copy of my resume.
              </p>
              <div className="flex justify-start">
                <a href={resumeFile} download="Aditya Krishnakumar-Resume.pdf">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "var(--shadow-neon-violet)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-8 bg-primary/20 text-primary font-rajdhani font-bold py-3 rounded-lg border border-primary flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-primary/40"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
                  </motion.button>
                </a>
              </div>
            </div>

            <div
              ref={availableRef}
              className="backdrop-blur-md bg-card/10 border border-neon-purple/30 rounded-lg p-8"
            >
              <h3 className="font-orbitron text-xl font-bold text-neon-purple mb-4">
                AVAILABILITY
              </h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to freelance projects and full-time positions. Let's
                discuss how we can work together!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-muted-foreground"
          >
            © 2025 Aditya Krishnakumar. Designed with{" "}
            <AnimatePresence mode="wait">
              <motion.span
                className="text-primary"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                ❤{" "}
              </motion.span>
            </AnimatePresence>
            and crafted with React + GSAP
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
