'use client';

import React from "react";
import Link from "next/link";
import vegapodLogo from "@/assets/logo/newVegapodLogo.svg";
import Image from "next/image";
import Sidepanel from "./Sidepanel";
import ButtonDark from "../Button/ButtonDark";


const Navbar = ({ pages }) => {

  

  return (
    <>
      <nav
        className={`flex flex-row-reverse lg:flex-row justify-around lg:justify- h-20 items-center bg-light-100 fixed top-0 inset-x-0  transition-all duration-700 z-50`}
        id="navbar"
      >
        <div className="flex gap-4 items-center">
        {/* <Link href={"https://mitwpu.edu.in/"}>
            <Image
              src={"/mit-wpu_logo.png"}
              alt={"Vegapod Logo"}
              height={200}
              width={200}
            />
          </Link> */}
          {/* <div className="w-[1px] h-10 bg-slate-500"/> */}
          <Link href="/" className="flex items-center gap-2 p-2">
            <Image
              src={vegapodLogo}
              alt={"Vegapod Logo"}
              height={250}
              width={250}
            />
            {/* <div className="h-8 w-[1px] bg-primary-900"/>
            Vegpod <br />
            Hyperloop */}
          </Link>
          
        </div>
        
        <div className="hidden lg:flex gap-8 ">
          {pages.map((page) => {
            return (
              <Link
                key={page.id}
                href={page.href}
                className="hover:underline underline-offset-4 "
              >
                {page.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <ButtonDark text={"Contact Us"} link={"/contact"} />
          <div className="w-40"></div>
        </div>
        <Sidepanel pages={pages} />
      </nav>
    </>
  );
};

export default Navbar;
