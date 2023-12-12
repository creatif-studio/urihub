import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    className,
    isPrimary,
    isSecondary,
    isTertiary,
    isFourth,
    isLarge,
    isMedium,
    hasShadow,
    onClick,
    children,
    style,
    type
  } = props;

  const primaryStyle = "bg-red-300 font-normal border-none";
  const secondaryStyle = "bg-fuchsia-950 text-white font-normal border-none";
  const tertiaryStyle = "bg-lime-500 border-none rounded-full py-3";
  const fourthStyle = "bg-slate-950 text-white border-none rounded-full py-3";
  const lightStyle = "bg-gray-300 rounded-lg p-4 border-none";
  const defaultStyle = "border-2 border-solid rounded px-8 py-3 m-0 font-normal rounded-full ";

  const baseStyles = [defaultStyle];

  if (isPrimary) baseStyles.push(primaryStyle);
  else if (isSecondary) baseStyles.push(secondaryStyle);
  else if (isTertiary) baseStyles.push(tertiaryStyle);
  else if (isFourth) baseStyles.push(fourthStyle);
  else if (lightStyle) baseStyles.push(lightStyle);

  const buttonClasses = [
    baseStyles.join(" "),
    isLarge ? "w-96" : isMedium ? "w-64" :  "",
    hasShadow ? "shadow shadow-lime-300" : "",
    className || "",
  ].join(" ");

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button type={type} className={buttonClasses} onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isTertiary: PropTypes.bool,
  isFourth: PropTypes.bool,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
