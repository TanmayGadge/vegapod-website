"use client";

import { LampContainer } from "./ui/lamp-effect";
import { FloatingDock } from "./ui/floating-dock";
import { HeroParallax, ProductCard } from "./ui/hero-parallax";
import Image from "next/image";
import { urbanist, poppins } from "./ui/fonts";

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

  let products = [
    { title: "title-1", link: "link-1", thumbnail: "/@/public/image-1.jpg" },
    { title: "title-2", link: "link-2", thumbnail: "/@/public/image-1.jpg" },
    { title: "title-3", link: "link-3", thumbnail: "/@/public/image-1.jpg" },
    { title: "title-4", link: "link-3", thumbnail: "/@/public/image-1.jpg" },
    { title: "title-5", link: "link-3", thumbnail: "/@/public/image-1.jpg" },
    { title: "title-6", link: "link-3", thumbnail: "/@/public/image-1.jpg" },
  ];


  return (
    <>
      <LampContainer className={""}>
        <div className="container flex-col gap-y-2.5 justify-center items-centerh-28">
          <h1
            className={`club-title text-8xl inline-block relative bottom-10 ${urbanist.className}`}
          >
            Vegapod Hyperloop
          </h1>
        </div>
      </LampContainer>

      <HeroParallax products={products} />
      <ProductCard product={products[0]}/>
      

      {/* <FloatingDock items={links} /> */}
    </>
  );
}
