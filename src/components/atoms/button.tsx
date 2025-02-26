import React from "react";
interface Props {
  style?: "solid" | "outlined" | "text";
  color?: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
}
const Button = ({
  style = "solid",
  children,
  bgColor = "blue-500",
  color = "white",
  className = "",
  type,
  onClick,
}: Props) => {
  let buttonClass =
    "rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer hover:bg-opacity-80";

  // if (type === "solid") buttonClass += ` bg-${bgColor} text-${color} `;
  // if (type === "outlined")
  //   buttonClass += ` border border-${bgColor} text-${color} hover:bg-${bgColor}/10`;
  // if (type === "text") buttonClass += ` text-${color} hover:underline`;
  if (style === "solid") buttonClass += ` bg-${bgColor} text-${color}`;
  if (style === "outlined")
    buttonClass += ` border border-${bgColor} text-${color} hover:bg-${bgColor}/10`;
  if (style === "text") buttonClass += ` text-${color} hover:underline`;
  return (
    <button
      className={`${buttonClass} ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
