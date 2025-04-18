import React from "react";
import clsx from "clsx";

type ContainerSize = "default" | "full" | "small";

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeMap: Record<ContainerSize, string> = {
  default: "max-w-[120rem]",
  full: "max-w-none",
  small: "max-w-[60rem]",
};

const Container: React.FC<ContainerProps> = ({
  children,
  size = "default",
  className = "",
}) => {
  return (
    <div className={clsx("mx-auto w-full ", sizeMap[size], className)}>
      {children}
    </div>
  );
};

export default Container;
