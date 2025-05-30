import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
// import { useState } from "react";
// import Mhale from "@/components/Home-Components/Mhale";


export const metadata = {
  title: {
    default: "Vegapod Hyperloop",
    template: "%s - Vegapod Hyperloop",
  },
  description:
    "Team Vegapod Hyperloop is a dynamic, student-led initiative incubated at MIT-WPU, comprising of 40 talented students from various disciplines, dedicated towards advancing hyperloop technology. We craft sub-scale hyperloop prototypes, incorporating cutting-edge technologies such as levitation, vacuum systems, contactless propulsion, regenerative braking, power electronics, and cooling systems.",

  twitter: {
    card: "summary_card_image",
  },
};

export default function RootLayout({ children }) {
  const pages = [
    { title: "Home", href: "/", id: 1 },
    { title: "About", href: "/about", id: 2 },
    { title: "Members", href: "/members", id: 3 },
    { title: "Achievements", href: "/achievements", id: 4 },
    { title: "Gallery", href: "/gallery", id: 5 },
    {title: "Mentors", href: "/mentors", id: 6},
    { title: "Sponsors", href: "/sponsors", id: 7 },
    { title: "News", href: "/news", id: 8 },
    // { title: "News", href: "/news", id: 8 },
  ];

  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>Vegapod Hyperloop</title>
        <meta
          name="description"
          content="Team Vegapod Hyperloop is a dynamic, student-led initiative incubated at MIT-WPU, comprising of 40 talented students from various disciplines, dedicated towards advancing hyperloop technology"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegapodhyperloop.in/" />
        <meta property="og:title" content="Vegapod Hyperloop" />
        <meta
          property="og:description"
          content="Team Vegapod Hyperloop is a dynamic, student-led initiative incubated at MIT-WPU, comprising of 40 talented students from various disciplines, dedicated towards advancing hyperloop technology"
        />
        <meta
          property="og:image"
          content="https://vegapodhyperloop.in/opengraph-image.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://vegapodhyperloop.in" />
        <meta name="twitter:title" content="Vegapod Hyperloop" />
        <meta
          name="twitter:description"
          content="Team Vegapod Hyperloop is a dynamic, student-led initiative incubated at MIT-WPU, comprising of 40 talented students from various disciplines, dedicated towards advancing hyperloop technology"
        />
        <meta
          name="twitter:image"
          content="https://vegapodhyperloop.in/opengraph-image.png"
        />
      </Head>
      <body className={`antialiased`}>

        <Navbar pages={pages} />
        <main className="mt-20 ">{children}</main>
        <Footer pages={pages} />
      </body>
    </html>
  );
}
