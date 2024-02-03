"use client";
import React from "react";
import Countdown from "../components/Countdown";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const Timer = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

const LandingScreen: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/1A9A5324-76.jpg)`,
          width: "100%",
          minHeight: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[100dvh] bg-white opacity-80 sm:mt-0"
      >
        <div className="h-full w-full flex flex-col ">
          <div className="h-full pt-16">
            <div className=" w-full md:w-1/2 p-4 sm:mt-5 sm:ml-5 md:mt-10 md:ml-10  ">
              <span className="text-5xl sm:text-7xl md:text-9xl text-wrap  text-white font-extrabold">
                UNSW&apos;S GAMING CONVENTION
              </span>
            </div>
            <div className="p-2  sm:p-0">
              <Timer />
            </div>

            
          </div>
          <div className="h-full px-20 py-5">

            <Link href="https://events.humanitix.com/megalan">
            <Button className="scale-150" size="lg">Get Tickets</Button>
            </Link>
              
              {/* <button className="bg-white rounded-md text-black p-2 ">
                <Link href={"https://events.humanitix.com/megalan"}>
                  
                </Link>
              </button> */}
            </div>
          <div className="animate-bounce text-2xl md:text-4xl justify-end  bottom-0">
            <div className="w-full text-center text-black">&#8595;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
