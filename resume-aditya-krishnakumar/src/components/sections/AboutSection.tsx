import { useRef } from "react";

import { motion } from "framer-motion";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content) {
      gsap.fromTo(
        content.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const education = [
    {
      degree: "BSC COMPUTER SCIENCE",
      institution: "PUNE UNIVERSITY",
      year: "2018 - 2021",
      grade: "Distinction - 82%",
    },
    {
      degree: "HSC",
      institution: "Maharashtra State Board",
      year: "2017 - 2018",
      grade: "Distinction - 81%",
    },
    {
      degree: "SSC",
      institution: "Maharashtra State Board",
      year: "2015 - 2016",
      grade: "Distinction - 89%",
    },
  ];

  const languages = [
    "English (Professional)",
    "Hindi (Fluent)",
    "Marathi (Conversational)",
    "Malayalam (Conversational)",
  ];

  const certifications = [
    "Udemy Course - Angular (up to date with v18)",
    "Udemy Course - React",
  ];

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={contentRef}>
          <motion.div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">&lt;</span>
              <span className="text-foreground">PROFILE</span>
              <span className="text-accent">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-gradient mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div className="backdrop-blur-md bg-card/10 border border-primary/30 rounded-lg p-8 hover:border-primary/60 transition-cyber scanlines relative">
              <h3 className="font-orbitron text-2xl font-bold text-primary mb-6">
                ABOUT ME
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A results-driven UI Developer with{" "}
                <span className="text-accent font-bold">over 3 years</span> of
                experience. I am adept at leveraging technical expertise to
                achieve organizational and personal milestones. I am passionate
                about continuous learning and proactively embrace new
                technologies to deliver
                <span className="text-primary font-bold">
                  {" "}
                  impactful and innovative solutions
                </span>
                .
              </p>
            </motion.div>

            <motion.div className="backdrop-blur-md bg-card/10 border border-accent/30 rounded-lg p-8 hover:border-accent/60 transition-cyber relative scanlines">
              <h3 className="font-orbitron text-2xl font-bold text-accent mb-6">
                LANGUAGES
              </h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full shadow-red"></div>
                    <span className="text-muted-foreground">{language}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div className="backdrop-blur-md bg-card/10 border border-secondary/30 rounded-lg p-8 hover:border-secondary/60 transition-cyber relative scanlines">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                EDUCATION
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary/50 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full shadow-violet"></div>
                    <h4 className="font-rajdhani font-bold text-lg text-primary">
                      {item.degree}
                    </h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-accent font-medium">{item.year}</p>
                    <p className="text-sm text-foreground">{item.grade}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="backdrop-blur-md bg-card/10 border border-neon-purple/30 rounded-lg p-8 hover:border-neon-purple/60 transition-cyber relative scanlines">
              <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-6">
                CERTIFICATIONS
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0 shadow-purple"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
