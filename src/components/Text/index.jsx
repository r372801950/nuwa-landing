import React from "react";

const sizes = {
  "5xl": "text-[110px] font-normal md:text-5xl",
  xs: "text-[10px] font-normal",
  lg: "text-xl font-normal",
  s: "text-sm font-medium",
  "2xl": "text-6xl font-normal md:text-[52px] sm:text-[46px]",
  "3xl": "text-[80px] font-normal md:text-5xl",
  "4xl": "text-[100px] font-normal md:text-5xl",
  xl: "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_03 font-pingfangsc ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
