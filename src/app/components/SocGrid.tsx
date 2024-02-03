"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import SocModal from "./SocModal";

export default function SocGrid() {
  const list = [
    {
      title: "PCSoc: Computers and Tech",
      img: "",
    },
    {
      title: "Esports Club",
      img: "https://assets-global.website-files.com/642dcf196d4622279bf644a8/65491ed51e3b3e7e15fb56f7_ESportsFullLogo_Dark.png",
      desc: "UNSW ESports Club is a student-run society at the University of New South Wales. Our focus is on promoting and supporting students with casual and competitive esports activities, events, and more Student players with high to low skill ratings, dedicated or casual, and all forms, types, and genres of gamers are free to join the society to converse, compete, or play casually. We run many activities and events for all types of gamers to participate in; these range from weekly PUGs, society collabs, and social games to intervarsity scrims and competitive tournaments. For serious opportunities, UNSW ESports supports representative club teams that compete against other universities or teams in tournaments, leagues, or LANs. Our UNSW Roar teams compete in tournaments such as, but not limited to, VCT Game Changers, Lenovo’s Legion, AEL University, QUT Intervarsity, and LPL tournaments. Occasional signups and trials occur to recruit players into our representative teams for games such as Overwatch 2, Valorant, Counter-Strike 2, Rocket League, League of Legends!",
      fb: "https://www.facebook.com/UNSWESportsClub",
      insta: "https://www.instagram.com/unsw_esports/",
      discord: "https://discord.com/invite/j8rXrd2",
      web: "https://unswesports.com.au/"
    },
    {
      title: "Fighting Games Society",
      img: "",
      desc:"UNSW FGSoc is a place where every fighting game player can come to run sets and have a good time. Whether you are a seasoned veteran since the days of Street Fighter 4 or just thought Luke from Street Fighter looked hella cute, there is a place for you! Tournaments and weekly local events are a staple of our club - we strive to provide an experience few gaming cultures can offer, be it the regular stuff, or more adventurous stuff like hyper-specific combos, obscure trivia and even the worst balanced games known to man. Come join us as we get ready for the next battle!"
    },
    {
      title: "Game Developers Society",
      img: "",
      desc: "We are a university club focused on teaching people how to make games. Throughout the year, we host workshops on game development and events straight from the industry. We aim to bring together students interested in all aspects of game design & development, whether they be programmers, artists, writers, musicians, designers or even QA play-testers."
      
    },
    {
      title: "Minecraft Society",
      img: "",
      desc: "The Minecraft Society (MinecraftSoc) is a student society based in the University of New South Wales in Sydney. We're a group of people who enjoy Minecraft, its culture and its community and our society exists to share that passion for this wonderful game and all things related to it! Joining Minecraft Society is free for all UNSW students! We also welcome non-UNSW students to join and share our love for Minecraft.  In addition to providing a Minecraft server accessible to members of our society, we also hold workshops and competitions to develop and showcase our members' creativity and dedication to an amazing game."
      
    },
    {
      title: "PokeSoc",
      img: "",
      
    },
    {
      title: "RGS",
      img: "",
      
    },
    {
      title: "RiotSoc",
      img: "/images/fruit-6.jpeg",
      
    },
    {
      title: "SmashSoc",
      img: "",
      
    },
    {
      title: "VRSoc",
      img: "",
      
    },
    {
      title: "VRSoc",
      img: "",
      
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [soc, setSoc] = useState("");
  const handleOpen = (soc: any) => {
    onOpen();
    setSoc(soc);
  };

  const handleClose = () => {
    onClose();
    setSoc("");
  };

  return (
    <div className="flex h-full min=h-screen flex-col">
      <span className="text-white text-xl sm:text-4xl md:w-1/3">
        THE STUDENT SOCIETIES BEHIND MEGALAN
      </span>

      <div className="gap-4 grid grid-cols-2  md:grid-cols-4  h-full p-5">
        {list.map((item, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => {
              handleOpen(item);
            }}
            isFooterBlurred
            radius="lg"
            className="border-none bg-neutral-600 h-full w-full"
          >
            <Image
              removeWrapper
              shadow="sm"
              radius="lg"
              width="100%"
              height="100%"
              alt={item.title}
              className="w-full object-cover h-full bg-center min-h-full"
              src={"https://placekitten.com/800/402"}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className=" text-white/80">{item.title}</p>
              {/* <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Notify me
          </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
      <SocModal isOpen={isOpen} onClose={handleClose} socData={soc} />
    </div>
  );
}
