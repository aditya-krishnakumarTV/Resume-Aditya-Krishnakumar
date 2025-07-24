import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const colors = ["#cf36fd", "#e31541"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsVisible(true);

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6 hidden sm:block"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-card/20 border border-muted-foreground/40 rounded-lg px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-orbitron md:text-lg text-md font-bold"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                AK
              </motion.div>
            </AnimatePresence>

            <div className="flex space-x-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate(section.id)}
                  className={`font-rajdhani font-medium text-sm md:text-md transition-cyber ${
                    index % 2 === 0
                      ? `${
                          activeSection === section.id
                            ? "text-primary text-neon"
                            : "text-muted-foreground hover:text-neon-violet"
                        }`
                      : `${
                          activeSection === section.id
                            ? "text-accent text-neon"
                            : "text-muted-foreground hover:text-neon-red"
                        }`
                  }`}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
