"use client";
import React from "react";

import AiWorks from "@/components/AiWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradeint bg-cover min-h-[100vh] relative">
      <div>
        <div className="absolute top-0 left-0 md:block hidden w-[361px] h-[372px] object-cover overflow-hidden">
          <img src="/bubble1.webp" alt="bubble1" />
        </div>

        <div className="absolute top-0 right-0 lg:block hidden w-[580px] h-[371px] object-cover overflow-hidden">
          <img src="/bubble2.webp" alt="bubble2" />
        </div>
      </div>
      <Header />
      <div className="md:mx-[100px] mx-5">
        <Main />
        <AiWorks />
        <Works />
        <Contact />
      </div>
      <div className="absolute bottom-0 right-0 z-0 w-[1044px] h-[573px] object-cover overflow-hidden">
        <img src="/bubble4.webp" alt="bubble4" />
      </div>
      <Footer />
    </main>
  );
}
