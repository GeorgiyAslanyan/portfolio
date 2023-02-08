"use client";
import React from "react";
import Popup from "./Popup";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [show, setShow] = React.useState(false);

  return (
    <div className="z-10 relative" id="contact">
      <h2 className="text-2xl font-semibold p-5">Contact</h2>
      <div className="glassBackground w-[60%]">
        <div className="flex w-full justify-between mb-4">
          <input
            type="text"
            placeholder="Name:"
            className="p-3 w-[45%] bg-transparent outline-none border-b border-[#CDCDCD]"
          />
          <input
            type="text"
            placeholder="Email:"
            className="p-3 w-[50%] bg-transparent outline-none border-b border-[#CDCDCD]"
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Enter your message"
          className="p-3 w-full bg-transparent outline-none border border-[#CDCDCD] min-h-[200px]"
        />
        <div className="flex justify-end">
          <button className="border border-[#CDCDCD] px-10 py-1">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
