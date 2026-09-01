import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15, ...options });
  return { ref, isInView };
};

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
});

export const clipReveal = (delay = 0) => ({
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: { clipPath: "inset(0 0 0% 0)", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
});

export const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
});

export const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
});

export const scalePop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } },
});

export const staggerContainer = (stagger = 0.1, delayStart = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: delayStart } },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
