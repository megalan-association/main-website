"use client"
import React from "react";
import EventCard from "./EventCard";

const importAll = (r: __WebpackModuleApi.RequireContext): string[] => {
  return r.keys().map(r) as string[];
}

export default function EventGrid() {
  const list = [
    {
      id: "esports",
      title: "Mini Esports Arena",
      description: `We host PC tournaments here as a mini live stage. 
        This upcoming MegaLAN, we will be hosting:
        - CS2 Omega Co-op Tournament
        - VALORANT Escalation Tournament
        - Lethal Company High Score Tournament
        - Minecraft PvP Tournament
        
        To sign up for tournaments, please visit our start.gg page at:`,
      images: importAll(require.context('./../../../public/esports', false, /\.(png|jpe?g|svg)$/)),
      link: "https://www.start.gg/tournament/megalan-2024-t1-might-and-magic",
    },
    {
      id: "rhythm",
      title: "Rhythm Arena",
      description: `Immerse in a wide variety of rhythm games including Sound Voltex, Chunithm, Osu!

        This upcoming MegaLAN, the Rhythm Arena will offer all day freeplay. In addition to the set-ups provided, you may bring your own setup as well!
        
        Experimental gear and mods are very welcome and will be eligible to participate in our PC and hardware showcase!`,
        images: importAll(require.context('./../../../public/rhythm', false, /\.(png|jpe?g|svg)$/)),
    },
    {
      id: "byoc",
      title: "BYOC (Bring Your Own Computer or Console)",
      description: `A space to hang out with other people who also love PCs and gaming. Show off your PC benchmarks and overclocks in our PC hardware showcase.

      Worst and best PC builds get prizes! We provide a true 1 Gbps connection to the internet with tech support available at all times.

        This upcoming MegaLAN, we will be hosting:
        - Casual CIV 6 sessions
        - Flight sim
        - Space sim
        - Among Us Tournament
        - Call of Duty: Black Ops II challenge
        - Mario Kart Tournament
        - PC hardware showcase - prizes for the best or worst/most scuffed builds
        -  Experimental gear and mods are very welcome and will be eligible to participate in our PC and hardware showcase!

        In addition, there will be a wide selection of Minecraft events:
        - Minecraft Speedrunning Comp
        - Minecraft Builds Showcase
        - Minecraft Redstone Contraptions Showcase
        - Minecraft Bingo
        - Casual arts and crafts`,
        images: importAll(require.context('./../../../public/byoc', false, /\.(png|jpe?g|svg)$/)),
    },
    {
      id: "ugarena",
      title: "Underground Battle Arena",
      description: `In the basement, here be dragons, along with tournaments and freeplay for fighting games and smash brothers games. 
        Immerse in the (quite literally) classic underground vibes which have gained ground as an established local tournament. 

        This upcoming MegaLAN, we will be hosting:
        - Tournaments: Tekken 8, Street Fighter 6, Granblue Fantasy Versus: Rising, Guilty Gear: Strive and Super Smash Bros. Ultimate
        - A brand new "Kusoge Korner" (you have to be here to be in it!)
        - An FGC game show
        - A brand new revamped BYO space for computers, consoles, controllers, and everything else you want to bring! Experimental gear and mods are very welcome and will be eligible to participate in our PC and hardware showcase.`,
        images: importAll(require.context('./../../../public/ugarena', false, /\.(png|jpe?g|svg)$/)),
    },
    {
      id: "vr",
      title: "Virtual Reality Rooms",
      description: `Bring your own VR headset or try out some of the demo VR headsets on offer across several rooms in the underground. 

        This upcoming MegaLAN, we will be hosting:
        - Tournaments: Broken Edge (BRAND NEW! The first mixed-reality tournament of its kind), Beat Saber
        - Scheduled scrim sessions for the above tournaments
        - Freeplay offered for: Blade of Sorcery, Assetto Corsa VR, VTOL VR, Broken Edge, Beat Saber, Pavlov VR, Contractors VR, Onward, SUPERHOT VR+, The Thrill of the Fight, Bonelabs`,
        images: importAll(require.context('./../../../public/vr', false, /\.(png|jpe?g|svg)$/)),
    },
    {
      id: "cosplay",
      title: "Cosplay",
      description: `At MegaLAN, we love cosplay! Arrive in your favourite cosplay to be in the running for the Cosplay Contest! 
        FAQ: What counts as cosplay? 
        A: Anything! You can even turn up in a dino suit if you have one!`,
        images: importAll(require.context('./../../../public/cosplay', false, /\.(png|jpe?g|svg)$/)),
    },
  ];

  return (
    <div className="flex h-full flex-col p-4 items-center">
      <span className=" text-white text-xl sm:text-2xl">MegaLAN consists of several &quot;sections&quot; that are free for all to explore.</span>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit p-5">
        {list.map((item, index) => (
          // TODO: REMOVE TEMP
          <EventCard key={item.title} index={index} title={item.title} description={item.description} images={item.images} link={item.link ? item.link : null} />
        ))}
      </div>
    </div>
  );
}
