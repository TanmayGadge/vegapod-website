"use client";

// import { Spotlight } from "./ui/spotlight";
// import { SparklesCore } from "./ui/sparkles";
// import { AuroraBackground } from "./ui/aurora-background";
import { LampContainer } from "./ui/lamp-effect";
import { FloatingDock } from "./ui/floating-dock";
import TextPlugin from "gsap/TextPlugin";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function Page() {
  let links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contacts", href: "/contacts" },
    { title: "Crowd Funding", href: "/crowd-funding" },
    { title: "Gallery", href: "/gallery" },
    { title: "Partners", href: "/partner" },
    { title: "Sponsors", href: "/sponsors" },
    { title: "Team Intro", href: "/team-intro" },
  ];

  // gsap.registerPlugin(TextPlugin);
  // const headingRef = useRef(null);

  // useEffect(() => {
  //   // if(headingRef.current){
  //   //   headingRef.current.innerHTML = 'Accelarating the future';
  //   // }

  //   const animText = new SplitType(headingRef.current, {
  //     types: "words, chars",
  //   });

  //   gsap.to(animText.chars, {
  //     text: {
  //       value: "Vegapod Hyperloop",
  //     },
  //     duration: 2,
  //   });
  // }, [headingRef.current]);

  return (
    <>
      <LampContainer className={""}>
        <div className="container flex-col gap-y-2.5 justify-center items-centerh-28">
          <h1
            className="club-title text-6xl inline-block relative bottom-10"
            // ref={headingRef}
          >
            Accelarating the Future
          </h1>
        </div>
      </LampContainer>
      <FloatingDock items={links} />
    </>
  );
}
