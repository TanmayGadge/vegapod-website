"use client";

import React from "react";
import { LayoutGrid } from "@/components/LayoutGrid/LayoutGrid";
import images from "@/app/(layout)/gallery/images";


const page = () => {
 

  return (
    <>
      <section className="bg-light-100">
        <h1 className="text-7xl sm:text-9xl text-center p-16 w-fit mx-auto">
          Gallery of Innovation
        </h1>
        {/* <h2 className="text-4xl w-fit">EHW-2022</h2> */}
        <LayoutGrid cards={images} className="" />
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218189254928023553?compact=1" height="550" width="1000" frameborder="0" allowfullscreen="" title="Embedded post" scrolling="no" className="rounded-xl mx-auto overflow-hidden hidden md:bloack"></iframe>

        {/* <MobileGallery images={images} className="sm:hidden"/> */}
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
