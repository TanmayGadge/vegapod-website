import React from "react";
import groupImage from "@/assets/images/image-3.jpg";
import Image from "next/image";
import { LampDemo } from "@/components/Lamp-Effect/Lamp";
// import Head from "next/head";

export const metadata = {
  title: "About - Vegapod Hyperloop",
  description: "Learn more about the club"
}

const page = () => {
  return (
    <>
      <section className="">
        <LampDemo />
      </section>
      <section className="bg-light-100 ">
        <div className="max-w-7xl p-4 mx-auto ">
          
          <p className="w-[80%] mt-40 text-left mx-auto text-4xl sm:text-5xl xl:text-7xl  font-bold ">
            <span className="opacity-[35%]">
              At Vegapod Hyperloop, our vision is{" "}
            </span>
            <span className="xl:leading-[5rem]">
              to revolutionize transportation{" "}
            </span>
            <span className="opacity-[35%] xl:leading-[5rem]">
              by developing a sustainable, ultra-fast hyperloop system.
              <br /> <br />
              Our goal is
            </span>{" "}
            <span className="xl:leading-[5rem]">
              to lead in the development of innovative technologies that
              seamlessly connect cities{" "}
            </span>
            <span className="opacity-[35%]">
              and improve mobility while fostering economic growth.
            </span>
          </p>

          <div className="p-4 my-16 rounded-3xl bg-gray-100">
            <h2 className="text-3xl p-4 ">About Vegapod: </h2>
            <div className="xl:flex text-2xl sm:text-3xl ">
              <p className="flex text-lg sm:text-xl m-4 mr-8">
                Vegapod Hyperloop is a student-driven initiative dedicated to
                advancing hyperloop technology, focusing on developing a
                sustainable, ultra-fast transportation solution for the future.{" "}
                <br /> <br /> Our mission is to contribute to the global
                innovation of hyperloop systems by combining cutting-edge
                engineering, design, and business strategies. We strive to
                create a viab le prototype that pushes the boundaries of what is
                possible in transportation
              </p>
              <Image
                src={groupImage}
                width={500}
                alt="group photo"
                className="rounded-3xl "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
