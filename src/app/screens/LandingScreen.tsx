import React from "react";
import Countdown from "../components/Countdown";
const LandingScreen: React.FC = () => {
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
        className="h-full bg-white opacity-80 "
      >
        <div className="h-full w-full flex flex-col ">
          <div className="h-full ">
            <div className=" w-full md:w-1/2 p-4 sm:mt-5 sm:ml-5 md:mt-10 md:ml-10  ">
              <span className="text-5xl sm:text-7xl md:text-9xl text-wrap  text-white font-extrabold">
                UNSW&apos;S GAMING CONVENTION
              </span>
            </div>
            <Countdown />
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
