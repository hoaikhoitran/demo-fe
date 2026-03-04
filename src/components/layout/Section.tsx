import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Container from "./Container";
import { fadeIn } from "../../animations/variants";

type SectionVariant = "default" | "muted" | "contrast";

type SectionProps = HTMLMotionProps<"section"> & {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
};

const variantClassName: Record<SectionVariant, string> = {
  default: "section section--default",
  muted: "section section--muted",
  contrast: "section section--contrast",
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  variant = "default",
  variants = fadeIn,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.2 },
  ...rest
}) => {
  const classes = [variantClassName[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.section
      id={id}
      className={classes}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...rest}
    >
      <Container>{children}</Container>
    </motion.section>
  );
};

export default Section;

