"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ButtonDark from "../Button/ButtonDark";
import ButtonLight from "../Button/ButtonLight";
import ImageGrid from "./ImageGrid";
// import styles from "./hero.module.css";

// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

const Hero = () => {
  // const { scene } = useGLTF("/mini_room_art_copy.gltf");





  return (
    <>
     

      {/* <div
        // className={`curtain ${styles.curtain}`}
        className="w-full h-screen overflow-hidden"
      >
        <div
          // className={`curtain__wrapper ${styles.curtain__wrapper}`}
          className="w-full h-full"
        >
          <input type="checkbox" checked className="absolute cursor-pointer w-full h-full z-[100] opacity-0"/>

          <div
            // className={`curtain__panel curtain__panel--left ${styles.curtain__panel} ${styles.curtain__panel-left}`}
            className=" w-6/12 h-screen float-left relative z-[2] transition-all duration-[1s] ease-[ease-out]"
          ></div>

          <div
            // className="curtain__prize"
            className="absolute z-[1] w-full h-full"
          >
          </div>

          <div
            // className="curtain__panel curtain__panel--right"
            className=" w-6/12 h-screen float-left relative z-[2] transition-all duration-[1s] ease-[ease-out]"
          ></div>
        </div>
      </div> */}
            <section
              className="z-10 flex justify-center bg-light-100  p-4 "
            >
              <div className="p-4 w-full xl:flex gap-4 max-w-7xl">
                <div className="space-y-8 p-4 ">
                  <h1 className=" text-primary-800 text-left text-5xl  sm:text-7xl font-bold selection:text-light-100 selection:bg-primary-800  ">
                    Building the future <br /> of high-speed{" "}
                    <span className="hidden sm:block">transportation</span>{" "}
                    <span className="sm:hidden">transport</span>
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
                    <ButtonDark
                      text={"Our Sponsors"}
                      link={"/sponsors"}
                      className=""
                    />
                    <ButtonLight text={"Achievements"} link={"/achievements"} />
                  </div>
                </div>
                <ImageGrid />
              </div>
            </section>

      {/* <Canvas camera={{ position: [0, 0, 5] , fov:90}} style={{height: "70vh"}} className="bg-light-100">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <primitive object={scene} />
        <OrbitControls />
      </Canvas> */}
    </>
  );
};

export default Hero;
