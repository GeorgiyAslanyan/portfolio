"use client";
import axios from "axios";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await axios.post("/api/contact", { name, mail, description });

    setName("");
    setMail("");
    setDescription("");
  };

  return (
    <motion.div
      className="z-10 relative"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold p-5">Contact</h2>
      <div className="glassBackground xl:w-[60%] w-full">
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
    </motion.div>
  );
};

export default Contact;
