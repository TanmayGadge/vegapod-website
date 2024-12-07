import React from "react";
import Link from "next/link";
import Image from "next/image";
import trackImage from "@/assets/images/ehw-track.jpg";

const Ehw = () => {
  return (
    <div className="bg-primary-800 text-light-100">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-center text-3xl sm:text-5xl p-10 mb-4">
          European Hyperloop Week
        </h1>
        <Image
          src={trackImage}
          height={400}
          className="rounded-3xl sm:float-left mr-4 mt-4"
          alt={"track at EHW"}
        />
        <p className="p-4 text-xl sm:text-2xl text-left sm:text-justify">
          The European Hyperloop Week (EHW) is an essential annual event that
          aims to advance hyperloop technology. This dynamic gathering fosters
          collaboration among students, industry leaders, academia, and
          government representatives. <br/> <br/> At EHW, participants engage in
          competitions, conferences, workshops, demonstrations, exhibitions, and
          social events, showcasing the collective efforts to innovate in the
          hyperloop space. During the event, university teams, including Vegapod
          Hyperloop, present their prototype components and full-scale pods to a
          panel of expert judges. Some teams even compete on installed tracks,
          pushing the boundaries of what’s possible in hyperloop design and
          functionality. <br/> <br/> EHW aims to accelerate the development and full-scale
          implementation of hyperloop systems, reinforcing its potential as the
          fifth mode of transportation and providing Vegapod Hyperloop a
          platform to contribute to this transformative vision.
        </p>
        <Link
          href={"https://hyperloopweek.com/"}
          target="_blank"
          className="underline underline-offset-4 ml-4"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Ehw;
