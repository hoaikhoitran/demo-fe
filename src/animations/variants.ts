import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const hoverLift: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "var(--shadow-subtle)",
    transition: { duration: 0.3, ease: EASE },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "var(--shadow-soft)",
    transition: { duration: 0.3, ease: EASE },
  },
};

export const navbarScrollVariant: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 0 0 rgba(15, 23, 42, 0)",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    transition: { duration: 0.3, ease: EASE },
  },
  scrolled: {
    y: 0,
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    transition: { duration: 0.3, ease: EASE },
  },
};

