import { useState, useEffect } from "react";

import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-card/20 border border-muted-foreground/40 rounded-lg px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-orbitron text-lg font-bold text-primary"
            >
              AK
            </motion.div>

            <div className="flex space-x-6">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate(section.id)}
                  className={`font-rajdhani font-medium transition-cyber ${
                    activeSection === section.id
                      ? "text-primary text-neon"
                      : "text-muted-foreground hover:text-neon-violet"
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
