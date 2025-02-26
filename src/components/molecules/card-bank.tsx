import React from "react";
import CardAtomsComponent from "../atoms/card";
import logo from "../../assets/suzuki-removebg-preview.png";
import masterCardImg from "../../assets/mastercard-icon.png";
import { maskNumber } from "../../helper/utils";

interface Props {
  title: string;
  noCard: string;
  expDate: string;
  bgColor: string;
}

const CardBankComponent = ({ title, noCard, expDate, bgColor }: Props) => {
  return (
    <CardAtomsComponent bgColor={bgColor}>
      <div className={`flex flex-col gap-y-3 text-white w-[250px] text-sm`}>
        <img src={logo} alt="logo-card" className="w-5 h-5" />
        <div className="">
          <p>{title}</p>
          <p>{maskNumber(noCard)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <p className="text-xs">Expiry</p>
            <p>{expDate}</p>
          </div>
          <img src={masterCardImg} alt="icon-mastercard" className="w-8" />
        </div>
      </div>
    </CardAtomsComponent>
  );
};

export default CardBankComponent;
