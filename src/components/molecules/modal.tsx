import React from "react";
import CardAtomsComponent from "../atoms/card";
interface Props {
  show: boolean;
  children: React.ReactNode;
  bgCard: string;
  closeModal: () => void;
}
const ModalComponent = ({ show, children, bgCard, closeModal }: Props) => {
  return (
    <>
      {show && (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-slate-600/50 flex items-center justify-center z-99">
          <div className="">
            <div className="flex justify-end mb-2">
              <div
                className="p-1 w-5 h-5 flex text-xs items-center justify-center rounded-full text-white text-center border-2 border-white cursor-pointer"
                onClick={closeModal}
              >
                X
              </div>
            </div>
            <CardAtomsComponent bgColor={bgCard}>{children}</CardAtomsComponent>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
