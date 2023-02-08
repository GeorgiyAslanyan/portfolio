import React from "react";
import s from "./AboutMe.module.scss";

const AiWorks = () => {
  return (
    <div id="aiworks" className="relative">
      <div className="z-10 relative">
        <h2 className="text-2xl font-semibold p-5">How i work with AI</h2>
        <div className="grid gap-x-4 grid-cols-9">
          <div className="glassBackground col-span-3">
            <p className="text-[20px] font-semibold">1 step</p>
            <p>The customer writes ideas how he wants to see the site</p>
            <div className="mt-auto">
              <p className="bg-black text-white rounded-xl p-3 max-w-[75%] mt-3">
                Site for creating 3D models. Design elements: statues, flowers
              </p>
              <p className="bg-[#0057FF] text-white rounded-xl p-3 max-w-[75%] ml-auto mt-3">
                Okay, I'll give you some variants.
              </p>
            </div>
          </div>
          <div className="glassBackground col-span-4">
            <p className="text-[20px] font-semibold">2 step</p>
            <p>
              With the help of a neural network, design options are generated
              and approved by the customer
            </p>
            <div className="mt-auto">
              <img
                src="/ai.png"
                alt="ai"
                className="rounded-xl p-3 ml-auto mt-3"
              />
              <p className="bg-black text-white rounded-xl p-3 max-w-[30%] mt-3">
              I prefer option 3
              </p>
            </div>
          </div>
          <div className="glassBackground col-span-2">
            <p className="text-[20px] font-semibold">3 step</p>
            <p>The customer receives a completely finished website</p>
            <div className="mt-auto">
              <img
                src="/aiDone.png"
                alt="ai"
                className="rounded-xl p-3 mt-3 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/bubble3.png"
        alt="bubble3"
        className="absolute z-0 left-[-100px] top-[60%] "
      />
    </div>
  );
};

export default AiWorks;