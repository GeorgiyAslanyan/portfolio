import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";

const Header = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className="p-5 fixed w-full backdrop-blur-md bg-white bg-opacity-40 z-20 text-[15px] 
     top-0 font-semibold"
    >
      <div className="justify-between flex items-center">
        <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="logo"
          className="mix-blend-difference mr-4 w-8"
        />
        <h1>Aslanyan Georgy</h1>
      </div>
      <div className="gap-20 md:flex hidden">
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
      <div className="md:hidden block" >
        <button onClick={() => setShow(!show)}>
          <Bars3Icon width={25}/>
        </button>
      </div>
      </div>
      {show && (
          <div className="grid top-20 left-0 w-full text-center" onClick={() => setShow(false)}>
            <a className="py-5" href="#main">
              About me
            </a>
            <a className="py-5" href="#aiworks">
              How i work
            </a>
            <a className="py-5" href="#works">
              Projects
            </a>
            <a className="py-5" href="#contact">
              Contact
            </a>
          </div>
        )}      
    </div>
  );
};

export default Header;
