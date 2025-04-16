import React from "react";

type ContainerSize = "container" | "containerFull" | "containerXS";

type ContainerProps = {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
};

const widths = {
  container: {
    base: "w-[calc(100%-2.5rem)]",
    md: "md:w-[calc(100%-5rem)]",
  },
  containerFull: {
    base: "w-[calc(100%-2.5rem)]",
    md: "md:w-[calc(100%-5rem)]",
  },
  containerXS: {
    base: "w-[calc(100%-2.5rem)]",
    md: "md:w-[calc(100%-5rem)]",
  },
};

const maxWidths = {
  container: "max-w-[120rem]",     
  containerFull: "max-w-none",         
  containerXS: "max-w-[59.375rem]",    
};

export const Container: React.FC<ContainerProps> = ({
  size = "container",
  className = "",
  children,
}) => {
  const widthClasses = `${widths[size].base} ${widths[size].md}`;
  const maxWidthClass = maxWidths[size];

  return (
    <div className={`${widthClasses} ${maxWidthClass}  ${className}`}>
      {children}
    </div>
  );
};