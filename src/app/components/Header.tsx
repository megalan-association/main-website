"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Poll", url: "/poll" },
    { name: "Get Tickets", url: "https://events.humanitix.com/megalan" },
    { name: "What's On", url: "/whats-on" },
    {name: "About Us", url: "/"},
  ];

  return (
    <Navbar
      className="w-full bg-black fixed justify-center items-center "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start" className="hidden sm:block ">
        <NavbarBrand className="h-full justify-start text-center">
          {/* TODO: add Logo here */}
          <p className="font-bold lg:text-2xl text-white  ">MegaLan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white justify-start"
        />
        <NavbarBrand className="justify-center">
          {/* TODO: add Logo here */}

          <p className="font-bold text-inherit lg:text-2xl text-white  ">
            MegaLan
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/poll" className="text-white">
            Poll
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://events.humanitix.com/megalan" aria-current="page" className="text-white">
            Get Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/whats-on" aria-current="page" className="text-white">
            What&apos;s On
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-full bg-neutral-600 h-full flex flex-col justify-evenly ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="justify-center" key={`${item}-${index}`}>
            <Link
              className="justify-center w-full text-4xl"
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
