import Image from "next/image";
import React from "react";
import s from "./AboutMe.module.scss";
import {motion} from 'framer-motion'

const AiWorks = () => {
  return (
    <div id="aiworks" className="relative">
      <motion.div className="z-10 relative" initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }} viewport={{once: true}}>
        <h2 className="text-2xl font-semibold p-5">How i work with AI</h2>
        <div className="block sm:grid gap-4 grid-cols-9">
          <div className="glassBackground xl:col-span-3 mb-4 sm:mb-0 sm:col-span-9">
            <p className="text-[20px] font-semibold">1 step</p>
            <p>The customer writes ideas how he wants to see the site</p>
            <div className="mt-auto">
              <p className="bg-black text-white rounded-xl p-3 max-w-fit mt-3">
                Site for creating 3D models. Design elements: statues, flowers
              </p>
              <p className="bg-[#0057FF] text-white rounded-xl p-3 max-w-fit ml-auto mt-3">
                Okay, I will give you some variants.
              </p>
            </div>
          </div>
          <div className="glassBackground xl:col-span-4 mb-4 sm:mb-0 sm:col-span-5">
            <p className="text-[20px] font-semibold">2 step</p>
            <p>
              With the help of a neural network, design options are generated
              and approved by the customer
            </p>
            <div className="mt-auto">
              <div className="ml-auto mt-3 rounded-xl object-cover overflow-hidden w-[240px]">
                <img src="/ai.webp" alt="ai" className="rounded-xl" />
              </div>
              <p className="bg-black text-white rounded-xl p-3 max-w-fit mt-3">
                I prefer option 1
              </p>
            </div>
          </div>
          <div className="glassBackground xl:col-span-2 sm:col-span-4">
            <p className="text-[20px] font-semibold">3 step</p>
            <p>The customer receives a completely finished website</p>
            <div className="mt-auto w-full object-cover overflow-hidden">
              <img src="/aiDone.webp" alt="ai" className="rounded-xl mt-3" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute z-0 left-[-100px] max-w-full top-[60%] w-[421px] h-[395px] object-cover overflow-hidden">
        <img src="/bubble3.webp" alt="bubble3" />
      </div>
    </div>
  );
};

export default AiWorks;
