"use client";

import React from "react";
import image1 from "@/assets/images/image-1.jpg";
import image2 from "@/assets/images/image-2.jpg";
import image3 from "@/assets/images/image-3.jpg";
import image4 from "@/assets/images/image-4.jpg";
import image6 from "@/assets/images/image-6.jpg";
import image7 from "@/assets/images/image-7.jpg";
import Image from "next/image";
import Carousel from "./ImageSlides";

const ImageGrid = () => {
  const imgs = [image1, image2, image3, image4, image6, image7];
  return (
    <>
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 p-4 ">
        <Image
          src={image2}
          layout="responsive"
          alt="engineer setting up the pod"
          className="rounded-3xl col-span-2 row-span-2 transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={image4}
          layout="responsive"
          alt="pod image"
          className="rounded-3xl transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={image6}
          layout="responsive"
          alt="team group photo"
          className="rounded-3xl transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={image7}
          layout="responsive"
          alt="group photo"
          className="rounded-3xl transition-opacity opacity-0 duration-[1s] "
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={image3}
          layout="responsive"
          alt="group photo"
          className="rounded-3xl transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={image1}
          layout="responsive"
          alt="group photo"
          className="rounded-3xl transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="md:hidden">
        <Carousel slides={imgs} />
      </div>
    </>
  );
};

export default ImageGrid;
