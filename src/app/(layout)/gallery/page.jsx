import React from "react";
import { LayoutGrid } from "@/components/LayoutGrid/LayoutGrid";
import images from "@/app/(layout)/gallery/images";


export const metadata = {
  title: "Gallery - Vegapod Hyperloop",
  description: "Take a glance at our journey"
}

const page = () => {
  return (
    <>
      <section className="bg-light-100">
        <h1 className="text-5xl sm:text-9xl text-center p-16 w-fit mx-auto">
          Gallery of Innovation
        </h1>

        <LayoutGrid cards={images} className="" />
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218189254928023553?compact=1"
          height="550"
          width="1000"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
          scrolling="no"
          className="rounded-xl mx-auto overflow-hidden hidden lg:block my-8 aspect-video"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7214889403444314112?compact=1"
          height="600"
          width="1080"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
          scrolling="no"
          className="rounded-xl mx-auto overflow-hidden hidden xl:block aspect-auto"
        ></iframe>
        <div className="h-24" />
      </section>
    </>
  );
};

export default page;
