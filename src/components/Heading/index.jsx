import React from "react";

const sizes = {
  "2xl": "text-[200px] font-semibold md:text-5xl",
  xl: "text-[64px] font-semibold md:text-5xl",
  s: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  md: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  xs: "text-base font-semibold",
  xx: "text-[22px] font-semibold",
  lg: "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700 font-pingfangsc ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
