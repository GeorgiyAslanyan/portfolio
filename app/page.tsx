"use client";
import React from "react";

import AiWorks from "@/components/AiWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="bg-[url('/background.png')] bg-cover min-h-[100vh] relative">
      <div>
        <img
          src="/bubble1.png"
          alt="bubble1"
          className="absolute top-0 left-0"
        />
        <img
          src="/bubble2.png"
          alt="bubble2"
          className="absolute top-0 right-0"
        />
      </div>
      <Header />
      <div className="mx-[100px]">
        <Main />
        <AiWorks />
        <Works />
        <Contact />
      </div>
      <img
        src="/bubble4.png"
        alt="bubble4"
        className="absolute bottom-0 right-0 z-0"
      />
      <Footer />
    </main>
  );
}
