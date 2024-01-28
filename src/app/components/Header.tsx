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
      <NavbarContent justify="start" className="w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="justify-start">
          {/* <AcmeLogo />/ */}
          <p className="font-bold text-inherit lg:text-2xl  ">MegaLan</p>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent justify="center" className="sm:hidden">
        <NavbarBrand>
          <AcmeLogo />/
          <p className="font-bold text-inherit  ">MegaLan</p>
        </NavbarBrand>
      </NavbarContent> */}

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Get Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
