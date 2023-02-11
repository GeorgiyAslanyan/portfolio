import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="grid sm:flex bottom-0 w-full h-20 bg-[rgba(255,255,255,0.5)] z-10 relative mt-10 backdrop-blur-xl px-[20px] sm:px-[100px] justify-between items-center">
      <div>©2023. by Georgy Aslanyan</div>
      <div className="flex gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/GeorgiyAslanyan"
        >
          <Image src="/github.svg" alt="github" width={24} height={24} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/George1307">
          <Image src="/tg.svg" alt="telegram" width={24} height={24} />
        </a>
        <a href="mailto:georgiy.aslanyan13@mail.ru">
          <EnvelopeIcon width={24}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
