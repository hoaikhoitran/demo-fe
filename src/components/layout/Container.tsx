import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  const classes = ["app-container", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default Container;

