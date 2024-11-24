import React from "react";
import Link from "next/link";
import vegapodLogo from "@/assets/logo/vegapod-logo.png";
import Image from "next/image";
import Sidepanel from "./Sidepanel";
import ButtonDark from "../Button/ButtonDark";

const Navbar = ({ pages }) => {
  return (
    <>
      <nav
        className='flex flex-row-reverse lg:flex-row justify-around lg:justify-evenly h-20 items-center bg-light-100 fixed top-0 inset-x-0 z-50'
      >
        <div className="flex gap-4">
          <Link href="/" className="flex items-center gap-2 p-2">
            <Image
              src={vegapodLogo}
              alt={"Vegapod Logo"}
              height={50}
              width={50}
            />
            <div className="h-8 w-[1px] bg-primary-900"></div>
            Vegpod <br/>Hyperloop
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
          {/* <button className="bg-primary-800 rounded-3xl h-12 text-light-100 px-3">
            <Link href={"/contacts"}>Contact Us</Link>
          </button> */}
          <ButtonDark text={"Contact Us"} link={'/contacts'}/>
        </div>
        {/* <Sidebar /> */}
        <Sidepanel pages={pages}/>
      </nav>
    </>
  );
};

export default Navbar; 