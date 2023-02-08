import React from "react";
import s from "./Main.module.scss";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const IconsArr = [
  { imgUrl: "/icons/react.png", title: "React" },
  { imgUrl: "/icons/typescript.png", title: "TypeScript" },
  { imgUrl: "/icons/RTK.png", title: "RTK" },
  { imgUrl: "/icons/tailwind.png", title: "Tailwind" },
  { imgUrl: "/icons/next.png", title: "Next.JS" },
  { imgUrl: "/icons/axios.png", title: "Axios" },
  { imgUrl: "/icons/router.png", title: "Router" },
];

const Main = () => {
  return (
    <div className="w-full relative mb-10" id="main">
      <div className="pt-[144px]">
        <h1 className="text-[40px] font-bold ml-[20%]">
          Hello, im Georgy Aslanyan
        </h1>
        <div className="flex mt-[100px]">
          <div className="max-w-[40%]">
            <h2 className="text-2xl font-semibold p-5">My skills</h2>
            <p className="text-[15px] font-semibold">
              I am a web developer with experience working with web applications
              on React .js, Next.js, I can work with databases, with Axios
              and other libraries. I also develop design using neural
              networks.
            </p>
          </div>
          <div className="flex items-end justify-between w-[60%] ml-10">
            {IconsArr.map((icon, index) => (
              <div
                key={index}
                className="justify-items-center grid grid-cols-1"
              >
                <img src={icon.imgUrl} alt={icon.title} />
                <h3 className="font-semibold text-[15px] text-center">
                  {icon.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
