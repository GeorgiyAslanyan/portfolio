import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Popup {
    show: boolean
    setShow: (b:boolean) => void
}

const Popup:React.FC<Popup> = ({show, setShow}) => {
  return (
    <div className="fixed rounded-xl backdrop-blur-md pr-[50px] pl-[10px] py-[10px] text-[#111111] dark:text-[#dadada] bg-[#DADADA] 
    dark:bg-black bg-opacity-50 bottom-[10%] right-[20px] drop-shadow-lg z-50">
      <h4 className="m-0">Message sent</h4>
      <XMarkIcon width={20} className="top-[30%] right-[15px] absolute hover:text-pink-600 cursor-pointer" onClick={() => setShow(false)}/>
    </div>
  );
};

export default Popup;
