import { useRef } from "react";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      gsap.fromTo(
        cards.children,
        {
          x: -100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      company: "MSM Unify",
      role: "Angular Developer",
      period: "JUL 2022 - JUN 2025",
      type: "Full-time",
      achievements: [
        "Ensured high code quality and maintainability through modular architecture, reusable components, and having clean and good-looking UI ready for business requirements.",
        "Contributed to a full revamp of the MSM Unify company portals, enhancing performance, user experience across key modules.",
        "Integrated payment gateways including Razorpay and BillDesk.",
        "Created multiple Angular modules following best practices, implemented route guards, resolvers, and built interactive dashboards for improved navigation and usability.",
      ],
    },
    {
      company: "MSM Unify",
      role: "Angular Developer - Intern",
      period: "JAN 2022 - JUL 2022",
      type: "Internship",
      achievements: [
        "Developed and implemented new Angular components and features, contributing to the overall functionality and user experience.",
        "Designed and built interactive forms and dynamic tables using the DevExtreme Data Grid, significantly improving data presentation and user interaction.",
        "Engaged in continuous learning and skill development, staying updated with the latest Angular technologies and best practices.",
        "Contributed to team discussions and brainstorming sessions, offering insights and suggestions to improve project outcomes.",
      ],
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks",
      items: ["Angular (up to date with v.18)", "React"],
    },
    {
      category: "Styling Frameworks",
      items: ["Bootstrap", "Angular Material", "TailwindCSS"],
    },
    {
      category: "Exploring",
      items: ["Spring Boot", "NodeJS", "ExpressJS", "MongoDB", "MySQL"],
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">EXPERIENCE</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-gradient mx-auto"></div>
        </motion.div>

        <div ref={cardsRef} className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-card/10 border border-primary/30 rounded-lg p-8 hover:border-primary/60 transition-cyber scanlines relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-gradient opacity-10 rounded-full blur-xl"></div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-primary mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="font-rajdhani text-xl font-medium text-accent">
                    {exp.company}
                  </h4>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-muted-foreground font-medium">
                    {exp.period}
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-violet"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-card/10 border border-accent/30 rounded-lg p-8 scanlines"
        >
          <h3 className="font-orbitron text-3xl font-bold text-accent mb-8 text-center">
            TECHNICAL SKILLS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-rajdhani font-bold text-lg text-foreground border-b border-primary/30 pb-2">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-accent rounded-full shadow-red"></div>
                      <span className="text-muted-foreground text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
