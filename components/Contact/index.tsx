"use client";
import React from "react";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = {
      name,
      mail,
      description,
    };
    console.log(data);
    setName("")
    setMail("")
    setDescription("")
  };

  return (
    <div className="z-10 relative" id="contact">
      <h2 className="text-2xl font-semibold p-5">Contact</h2>
      <div className="glassBackground w-[60%]">
        <form className="telegram-form" onSubmit={handleSubmit}>
          <div className="flex w-full justify-between mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Name:"
              className="p-3 w-[45%] bg-transparent outline-none border-b border-[#CDCDCD]"
            />
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="text"
              placeholder="Email:"
              name="email"
              className="p-3 w-[50%] bg-transparent outline-none border-b border-[#CDCDCD]"
            />
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="text"
            placeholder="Enter your message"
            className="p-3 w-full bg-transparent outline-none border border-[#CDCDCD] min-h-[200px]"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="border border-[#CDCDCD] px-10 py-1"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
