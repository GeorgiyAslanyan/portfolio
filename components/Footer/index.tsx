import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bottom-0 w-full h-20 bg-[rgba(255,255,255,0.5)] z-10 relative mt-10 backdrop-blur-xl px-[100px] justify-between items-center">
      <div>©2023. by Georgy Aslanyan</div>
      <div className="flex gap-3">
        <a target="_blank" rel="noreferrer" href="https://github.com/GeorgiyAslanyan">
          <img src="/github.svg" alt="github"/>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/GeorgiyAslanyan">
          <img src="/github.svg" alt="github"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
