"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, -10, 0] : 0, // Floating effect
      }}
      transition={{
        opacity: { duration: 0.3 },
        y: {
          duration: 1.5,
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
        },
      }}
      className={`fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ChevronsUp />
    </motion.div>
  );
};

export default ScrollToTopButton;
