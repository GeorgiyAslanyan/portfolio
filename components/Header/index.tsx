import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 fixed w-full backdrop-blur-md bg-white bg-opacity-25 z-20 text-[15px] 
    items-center top-0 font-semibold">
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="mix-blend-difference mr-4" width={35}/>
        <h1>Aslanyan Georgy</h1>
      </div>
      <div className="gap-20 flex">
        <a className="" href="#main">
          About me
        </a>
        <a className="" href="#aiworks">
          How i work
        </a>
        <a className="" href="#works">
          Projects
        </a>
        <a className="" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
