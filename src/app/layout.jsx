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
    // { title: "Contact", href: "/contact", id: 5 },
    { title: "Gallery", href: "/gallery", id: 6 },
    // { title: "Crowd Funding", href: "/crowd-funding", id: 7 },
    { title: "Sponsors", href: "/sponsors", id: 8 },
  ];
  // const [isRevealed, setIsRevealed] = useState(
  //   localStorage.getItem("mode") === "dev" ? false : true
  // );
  // const [renderCur, setRenderCur] = useState(true);
  // const [renderCont, setRenderCont] = useState(true);

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
        {/* {renderCont ? (
          <div className="fixed top-0 h-screen w-screen">
            {renderCur &&
             <div className="absolute z-40 top-0 h-screen w-screen flex " onClick={()=>{
                setIsRevealed(true);
                setTimeout(()=>{
                  setRenderCur(false)
                }, 3000)
             }}>
                <div className={`w-1/2  bg-cover h-full  ${isRevealed? "translate-x-[-100%]": ""} transition-transform`} 
                style={{
                  transitionDuration: '3000ms',
                  backgroundImage: "url('/curtain-1.jpeg')",
                  transitionTimingFunction: cubicBezier(0.95, 0.05, 0.795, 0.035)
                  
                  
                  // transitionDelay:
                }}
                >

                </div>
                <div className={`w-1/2 bg-cover  h-full ${isRevealed? "translate-x-[100%]": ""} transition-transform `} 
                style={{
                  transitionDuration: '3000ms',
                  backgroundImage: "url('/curtain-2.jpeg')",
                  transitionTimingFunction: cubicBezier(0.95, 0.05, 0.795, 0.035)
                }}
                >

                </div>
              </div>}

            <div className="absolute z-30 h-screen w-screen top-0 bg-red-400" onClick={()=>{
              setRenderCont(false)              
            }}>
              <Mhale />
            </div>
          </div>
        ) : <Navbar pages={pages} />} */}

        <Navbar pages={pages} />
        <main className="mt-20 ">{children}</main>
        <Footer pages={pages} />
      </body>
    </html>
  );
}
