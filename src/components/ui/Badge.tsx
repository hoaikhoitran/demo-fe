import React from "react";

type BadgeVariant = "accent" | "eco";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClassName: Record<BadgeVariant, string> = {
  accent: "ui-badge--accent",
  eco: "ui-badge--eco",
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "accent",
  className = "",
}) => {
  const classes = [
    "ui-badge",
    variantClassName[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};

export default Badge;

