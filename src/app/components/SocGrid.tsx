"use client"
import React, { useState } from "react";
import {Button, Card, CardBody, CardFooter, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure} from "@nextui-org/react";
import SocModal from "./SocModal";

export default function SocGrid() {
  const list = [
    {
      title: "PCSoc: Computers and Tech",
      img: "/images/fruit-1.jpeg",
      
    },
    {
      title: "Esports Club",
      img: "/images/fruit-2.jpeg",
    },
    {
      title: "Fighting Games Society",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "Game Development Society",
      img: "/images/fruit-4.jpeg",
      
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },

  ];

  
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [soc, setSoc] = useState("");
  const handleOpen = (soc:string) => {
    onOpen();
    setSoc(soc);
  }

  const handleClose = () => {
    onClose();
    setSoc("");
  }


  return (
    <div className="flex h-full min=h-screen flex-col">

      <span className="text-white text-xl sm:text-4xl md:w-1/3">THE STUDENT SOCIETIES BEHIND MEGALAN</span>
    
    <div className="gap-4 grid grid-cols-2  md:grid-cols-4  h-full p-5">
      {list.map((item, index) => (
        <Card
        key={index} isPressable onPress={() => {handleOpen(item.title)}}
        isFooterBlurred
        radius="lg"
        className="border-none bg-neutral-600 h-full w-full"
      >
        <Image
          alt={item.title}
          className="object-cover"
          height={150}
          src="/images/hero-card.jpeg"
          width={150}
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
    <SocModal isOpen={isOpen} onClose={handleClose} socData={soc}/>
    </div>
  );
}
