import React from "react";
import swissLogo from "@/assets/logo/swiss-logo.svg";
import festoLogo from "@/assets/logo/festo-logo.svg";
import benderLogo from "@/assets/logo/bender-logo.svg";
import infineonLogo from "@/assets/logo/Infineon-Logo.svg";
import plussLogo from "@/assets/logo/pluss-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Sponsor = () => {
  return (
    <section className="p-4 bg-primary-300">
      <div className="max-w-7xl mx-auto text-center m p-4">
        <h1 className="text-3xl sm:text-5xl p-4">Our Sponsors</h1>
        <div className="grid grid-cols-5 grid-rows-2 space-y-4 p-4 ">
          <Link href={"http://www.swiss.com/"} target={"_blank"}>
            <Image src={swissLogo} height={40} alt="swiss logo" />
          </Link>
          <Image src={festoLogo} height={30} alt="festo logo" />
          <Image src={benderLogo} height={30} alt="bender logo" />
          <Image src={infineonLogo} height={40} alt="infineon logo" />
          <Image src={plussLogo} width={100} alt="pluss logo" className=""/>
          
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
