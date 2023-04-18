import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-semibold sm:text-4xl md:text-[38px] text-[40px]",
  h3: "font-normal text-4xl sm:text-[32px] md:text-[34px]",
  h4: "text-3xl sm:text-[26px] md:text-[28px]",
  h5: "font-semibold text-[18.81px]",
  h6: "font-normal text-lg",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
