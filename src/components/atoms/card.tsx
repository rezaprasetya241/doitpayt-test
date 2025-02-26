import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor: string;
}

const CardAtomsComponent = ({ children, bgColor }: Props) => {
  return (
    <div className={`rounded-xl p-3`} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

export default CardAtomsComponent;
