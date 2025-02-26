import React from "react";
interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
}

const TextFieldComponent = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  name,
  disabled = false,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
      className={`p-2 rounded-md w-full border border-gray-200 max-h-[38px] ${className}`}
    />
  );
};

export default TextFieldComponent;
