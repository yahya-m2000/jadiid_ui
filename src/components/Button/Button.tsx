import React, { useState } from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | false;
  color?: string;
  fontColor?: string;
  fontWeight?: "light" | "normal" | "semi-bold" | "bold";
  dropShadow?: boolean;
  stroke?: "bottom" | "top" | "left" | "right" | "all" | false;
  strokeColor?: string;
  outlined?: boolean;
};

const Button = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  rounded = "md",
  color,
  fontColor,
  fontWeight = "normal",
  dropShadow = false,
  stroke = false,
  strokeColor,
  outlined = false,
}: ButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) {
      setIsSelected(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      setIsSelected(false);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsSelected(false);
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button ${variant} ${size} ${
        rounded ? `rounded-${rounded}` : ""
      } ${dropShadow ? "drop-shadow" : ""} ${
        stroke ? `stroke-${stroke}` : ""
      } ${outlined ? "outlined" : ""} ${isSelected ? "selected" : ""}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      style={{
        backgroundColor: color || undefined,
        color: fontColor || undefined,
        fontWeight: fontWeight,
        borderColor: strokeColor || undefined,
      }}
      data-stroke-color={strokeColor}
    >
      {label}
    </button>
  );
};

export default Button;
