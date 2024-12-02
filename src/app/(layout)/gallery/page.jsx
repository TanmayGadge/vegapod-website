"use client";

import React from "react";
import { LayoutGrid } from "@/components/LayoutGrid/LayoutGrid";
import image from "@/assets/images/EHW-2022/IMG_0400.jpg";
import image1 from "@/assets/images/image-1.jpg";

import images from "@/app/(layout)/gallery/images";

const page = () => {
  
  return (
    <>
      <section className="bg-light-100`">
        <h1 className="text-4xl sm:text-6xl text-center p-16 w-fit mx-auto">
          Gallery of Innovation
        </h1>
        <LayoutGrid cards={images} />
      </section>
      {/* <section
        className="bg-[url('/image-1.jpg')] h-screen bg-cover relative transition-all"
        id="bg-section"
      >
        <div className="flex">
          <img
            src={"/image-4.jpg"}
            alt={"The card image"}
            width={300}
            height={300}
            className="absolute rounded-xl bottom-10 right-10 cursor-pointer"
            id="card-image"
            onClick={() => {

              const section = document.getElementById("bg-section")
              const imageCard = document.getElementById("card-image")

              const tempDiv = document.createElement("div")
              tempDiv.classList.add(section.classList[0]);

              section
                .classList.replace(
                  `${section.classList[0]}`,
                  `bg-[url('${imageCard
                    .getAttribute("src")}')]`
                );

              // console.log(tempDiv.classList[0]);
              // imageCard.setAttribute("src", tempDiv.classList[0])
              

              // console.log(
              //   imageCard.getAttribute("src")
              // );
            }}
          />
        </div>
      </section> */}
    </>
  );
};

export default page;
