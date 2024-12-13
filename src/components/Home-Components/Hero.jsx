import React from "react";
import Link from "next/link";
import ButtonDark from "../Button/ButtonDark";
import ButtonLight from "../Button/ButtonLight";
import ImageGrid from "./ImageGrid";


const Hero = () => {
  
  return (
    <section className=" flex justify-center bg-light-100  p-4">
      <div className="p-4 w-full xl:flex gap-4 max-w-7xl">
        <div className="space-y-8 p-4 ">
          <h1 className=" text-primary-900 text-left text-5xl  sm:text-7xl font-bold selection:text-light-100 selection:bg-primary-900  ">
            Building the future <br /> of high-speed <span className="hidden sm:block">transportation</span> <span className="sm:hidden">transport</span>
          </h1>

          <p className="text-sm sm:text-lg selection:text-light-100  selection:bg-primary-900 ">
            Indian representatives at the <br className="sm:hidden" />
            <Link
              href="https://hyperloopweek.com/"
              className="underline underline-offset-4"
              target="_blank"
            >
              European Hyperloop Week
            </Link>
          </p>

          <div className="flex justify-start gap-4 w-fit">
            <ButtonDark text={"Our Sponsors"} link={"/sponsors"} className=""/>
            <ButtonLight text={"Achievements"} link={"/achievements"} />
          </div>
        </div>
        <ImageGrid />
        
      </div>
    </section>
  );
};

export default Hero;
