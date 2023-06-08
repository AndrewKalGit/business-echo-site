import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function InViewMotion({ children }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });
  const [hasBeenPassed, setHasBeenPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;

      const isElementInView = elementTop < window.scrollY;

      setHasBeenPassed(isElementInView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{
        opacity: isVisible || hasBeenPassed ? 1 : 0,
        translateY: isVisible || hasBeenPassed ? 0 : 20,
      }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default InViewMotion;
