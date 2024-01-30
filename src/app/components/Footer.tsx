import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center">
        <div className="px-4 bg-black flex flex-row w-full items-center justify-between">
          {/* Megalan Logo */}
          <div>
            <h1 className="text-3xl">MegaLan</h1>
          </div>

          <div>
            <button className="bg-white rounded-md text-black p-2">
              Get Tickets
            </button>
          </div>

          <div className="text-wrap w-40">
            <p>UNSW&apos;s Biggest Gaming Event</p>
          </div>

          {/* <h1 className="text-2xl font-bold">MegaLan</h1>
          <p className="mt-2 text-sm">
            © 2024 MegaLan. All rights reserved.
          </p> */}
        </div>
        {/* <div className="h-10"></div> */}

        <div className="flex p-4 flex-row w-full justify-between bg-neutral-800">
          <div className="flex flex-col w-1/4">
            <div className="w-full justify-center">
              <h1 className="text-xl">Contact Us:</h1>
              <span>Email:</span>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="w-full justify-center">
              <h1 className="text-xl">Follow Our Socials:</h1>
              <span>Email:</span>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="w-full">
              <h1 className="text-xl text-wrap">
                Organised By Affiliated Students Societies of UNSW
              </h1>
              <div className="flex flex-row justify-between w-5/6 text-gray-400 mt-2">
                <div className="flex flex-col">
                  <span>PCSoc: Computers and Tech</span>
                  <span>Esports Club</span>
                  <span>Fighitng Games Society</span>
                  <span>Game Development Society</span>
                  <span>Genshin Impact Society</span>
                  <span>Mechanical Keyboard Society</span>
                </div>
                <div className="flex flex-col">
                  <span>Minecraft Society</span>
                  <span>Pokemon Society</span>
                  <span>Rythm Games Society</span>
                  <span>Riot Games Society</span>
                  <span>Smash Brothers Society</span>
                  <span>VR Society</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xl">With Support From:</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
