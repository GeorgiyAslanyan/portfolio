import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const IconsArr = [
  { imgUrl: "/icons/react.webp", title: "React" },
  { imgUrl: "/icons/typescript.webp", title: "TypeScript" },
  { imgUrl: "/icons/RTK.webp", title: "RTK" },
  { imgUrl: "/icons/tailwind.webp", title: "Tailwind" },
  { imgUrl: "/icons/next.webp", title: "Next.JS" },
  { imgUrl: "/icons/axios.webp", title: "Axios" },
  { imgUrl: "/icons/router.webp", title: "Router" },
];

const Main = () => {
  return (
    <div className="w-full relative" id="main">
      <div className="pt-[144px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="text-[40px] font-bold ml-0 sm:ml-[20%] text-end md:text-start"
        >
          Hello, im Georgy Aslanyan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="text-2xl font-semibold p-5 mt-[100px]"
        >
          My skills
        </motion.h2>
        <motion.div
          className="block lg:flex glassBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
        >
          <div className="max-w-full lg:max-w-[40%] ">
            <p className="text-[15px] font-semibold">
              I am a web developer with experience working with web applications
              on React .js, Next.js, I can work with databases, with Axios and
              other libraries. I also develop design using neural networks.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 sm:flex sm:items-end justify-between max-w-full lg:w-[60%] lg:ml-10 pt-5 lg:pt-0">
            {IconsArr.map((icon, index) => (
              <div
                key={index}
                className="justify-items-center grid grid-cols-1"
              >
                <div className="w-[50px] h-[50px] object-cover overflow-hidden">
                  <img src={icon.imgUrl} alt={icon.title} />
                </div>
                <h3 className="font-semibold text-[15px] text-center">
                  {icon.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
