import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-md",
  RoundedBorder12: "rounded-[12px]",
};
const variants = {
  OutlineBlack900_1:
    "bg-black_900 border-2 border-black_900 border-solid text-white_A700",
  OutlineBlack900:
    "bg-white_A700 border-2 border-black_900 border-solid text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineBluegray9004c: "bg-bluegray_900 shadow-bs text-white_A700",
};
const sizes = { sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf(["RoundedBorder6", "RoundedBorder12"]),
  variant: PropTypes.oneOf([
    "OutlineBlack900_1",
    "OutlineBlack900",
    "FillBlack900",
    "OutlineBluegray9004c",
  ]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
