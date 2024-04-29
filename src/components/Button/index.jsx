import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
};
const variants = {
  outline: {
    black_900_03: "border-black-900_03 border border-solid text-black-900",
    gray_900_02: "border-gray-900_02 border border-solid",
    gray_900_01: "border-gray-900_01 border border-solid text-black-900_03",
  },
  fill: {
    gray_900: "bg-gray-900 text-white-A700_01",
    yellow_800: "bg-yellow-800 text-white-A700_01",
    blue_gray: "transparent text-blue_gray-900_02",
  },
};
const sizes = {
  md: "h-[53px] px-[35px] text-base",
  sm: "h-[38px] px-[7px]",
  xs: "h-[37px] pl-1.5 pr-3 text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900_03", "gray_900_02", "gray_900_01", "gray_900", "yellow_800", "blue_gray"]),
};

export { Button };
