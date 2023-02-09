
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className="z-10 relative" id="works">
      <h2 className="text-2xl font-semibold p-5">Projects</h2>
      <div className="glassBackground">
        <h3 className="text-[20px] font-semibold">Avila</h3>
        <div className="flex justify-between">
          <div className="gap-y-3 grid">
            <div>
              <p className="text-[#5c5c5c]">Description</p>
              <p className="">Internet shop with admin panel</p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Frontend</p>
              <p className="">
                React, typescript, redux toolkit, react-router-dom v6, axios,
                heroicons, mui, react-paginate, useHooks
              </p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Backend</p>
              <p className="">MockAPI</p>
            </div>
          </div>
          <div className="relative">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://avila-shop.vercel.app/"
              className="absolute bottom-3 right-3 px-3 py-1 bg-[#0057FF] flex rounded-md 
              hover:scale-110 text-white text-base ease-in-out duration-300"
            >
              Open
              <ArrowsPointingOutIcon width={15} className="ml-[10px]" />
            </a>
            <img src="/avila.webp" alt="avila"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
