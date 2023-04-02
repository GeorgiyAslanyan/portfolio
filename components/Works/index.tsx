import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      className="z-10 relative"
      id="works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold p-5">Projects</h2>
      <div className="glassBackground mb-4">
        <div className="block md:flex justify-between">
          <div className="gap-y-3 grid md:w-2/3 w-full">
            <h3 className="text-[20px] font-semibold">Avila</h3>
            <div>
              <p className="text-[#5c5c5c]">Description</p>
              <p className="">
                Internet shop with admin panel(add /studio to url)
              </p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Frontend</p>
              <p className="">Next, axios, sass, tailwind, heroicons</p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Backend</p>
              <p className="">Sanity</p>
            </div>
          </div>
          <div className="relative mt-4 rounded-md">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://avila-shop.vercel.app/"
              className="absolute bottom-3 right-3 px-3 py-1 bg-[#000000] flex rounded-md 
              hover:scale-110 text-white text-base ease-in-out duration-300"
            >
              Open
              <ArrowsPointingOutIcon width={15} className="ml-[10px]" />
            </a>
            <img
              src="/avila.webp"
              alt="avila"
              className="lg:block hidden object-cover h-full max-w-[370px] rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="glassBackground">
        <div className="block md:flex justify-between">
          <div className="gap-y-3 grid md:w-2/3 w-full">
            <h3 className="text-[20px] font-semibold">Social</h3>
            <div>
              <p className="text-[#5c5c5c]">Description</p>
              <p className="">
                Social app
              </p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Frontend</p>
              <p className="">Next, tailwind, heroicons, react-loader-spinner</p>
            </div>
            <div>
              <p className="text-[#5c5c5c]">Backend</p>
              <p className="">Supabase</p>
            </div>
          </div>
          <div className="relative mt-4 rounded-md">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://soical.vercel.app/"
              className="absolute bottom-3 right-3 px-3 py-1 bg-[#000000] flex rounded-md 
              hover:scale-110 text-white text-base ease-in-out duration-300"
            >
              Open
              <ArrowsPointingOutIcon width={15} className="ml-[10px]" />
            </a>
            <img
              src="/social.webp"
              alt="socail"
              className="lg:block hidden object-cover h-full max-w-[370px] rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
