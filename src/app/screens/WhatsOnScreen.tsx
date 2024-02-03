"use client"
import React from "react";
import Countdown from "../components/Countdown";
const WhatsOnScreen: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://www.inside.unsw.edu.au/sites/default/files/article/clancy-750x400.png')`,
          width: "100%",
          minHeight: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40dvh] bg-white opacity-80 sm:mt-0"
      >
        <div className="h-full">
          <div className="flex h-full pt-16 items-center ml-10">
            <span className="text-5xl sm:text-7xl md:text-9xl text-wrap text-white font-extrabold">
              WHAT&apos;S ON
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsOnScreen;
