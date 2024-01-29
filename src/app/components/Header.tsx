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

  const menuItems = ["Home", "Get Tickets", "About Us"];

  return (
    <Navbar
      className="w-full bg-black justify-center "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start" className="hidden sm:block">
        <NavbarBrand className="justify-start hidden sm:block ">
          {/* TODO: add Logo here */}
          <p className="font-bold text-inherit lg:text-2xl text-white  ">MegaLan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full sm:hidden">
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white justify-start"
        />
      <NavbarBrand className="justify-center">
          {/* TODO: add Logo here */}

          <p className="font-bold text-inherit lg:text-2xl text-white  ">MegaLan</p>
        </NavbarBrand>

      </NavbarContent>




      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" aria-current="page" className="text-white">
            Get Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-full bg-gray-300 h-full flex flex-col justify-evenly ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="justify-center" key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="justify-center w-full text-4xl"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
