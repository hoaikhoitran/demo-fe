import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  const classes = ["ui-card", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default Card;

