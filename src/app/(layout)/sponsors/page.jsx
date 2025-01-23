import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sponsors",
  description: "Our sponsors"
}

const page = () => {
  const sponsors = [
    {
      name: "Epitome Components",
      image: "epitome.webp",
      url: "https://www.epitomeindia.com/",
      desc: "",
      level: 2,
    },
    {
      name: "Freemans",
      image: "freemans.png",
      url: "https://www.freemansgroup.com/",
      desc: "",
      level: 2,
    },
    {
      name: "TDK",
      image: "Frame 19.png",
      url: "https://www.tdk.com/en/index.html/",
      desc: "",
      level: 2,
    },
    {
      name: "Sb Electronics",
      image: "sb electronics.png",
      url: "https://www.sbelectronics.co.in/",
      desc: "",
      level: 2,
    },
    {
      name: "Hilti",
      image: "Hilti.png",
      url: "https://www.hilti.in/",
      desc: "",
      level: 2,
    },
    {
      name: "Traco Power",
      image: "traco-power.png",
      url: "https://www.tracopower.com/int",
      desc: "",
      level: 2,
    },

    {
      name: "Bender",
      image: "Frame 25.png",
      url: "https://www.bender-in.com/",
      desc: "",
      level: 2,
    },
    {
      name: "Aeron",
      image: "Aeron.png",
      url: "https://aeronsystems.com/",
      desc: "",
      level: 2,
    },
    {
      name: "JBC",
      image: "JBC.png",
      url: "https://www.jbctools.com/",
      desc: "",
      level: 2,
    },
    {
      name: "TE Conectivity",
      image: "Frame 26.png",
      url: "https://www.te.com/en/home.html",
      desc: "",
      level: 2,
    },
    {
      name: "Analog devices",
      image: "Analog Devices.png",
      url: "https://www.analog.com/en/index.html",
      desc: "",
      level: 2,
    },
    {
      name: "Gatkul Automotives",
      image: "Frame 22.png",
      url: "https://www.instagram.com/gatkulautomotives/",
      desc: "",
      level: 2,
    },
    {
      name: "Definative Detailing",
      image: "Frame 23.png",
      url: "https://www.definitivedetailing.in/",
      desc: "",
    },
    {
      name: "Pluss",
      image: "Frame 15.png",
      url: "https://www.pluss.co.in/",
      desc: "",
      level: 2,
    },
  ];

  return (
    <section className="bg-light-100">
      <div className="max-w-7xl p-4 mx-auto space-y-8">
        <h1 className="text-5xl w-fit mx-auto p-4">
          A Heartfelt Thank You to Our Sponsors
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <SponsorCard
            image={"/sponsors/Infineon.png"}
            height={600}
            width={600}
            link={"https://www.infineon.com/"}
            className={"mx-auto w-fit"}
          />
          <SponsorCard
            image={"/sponsors/Frame 14.svg"}
            link={"https://www.swiss.com/"}
            height={600}
            width={600}
            className={"mx-auto w-fit "}
          />
        </div>
        <div className="flex justify-evenly gap-4">
          <SponsorCard
            image={"/sponsors/mahle.svg"}
            link={"https://www.mahle.com"}
            className={"w-[70%] sm:w-auto"}
          />
          <SponsorCard
            image={"/sponsors/precision-2.png"}
            link={"https://precisionwires.in/"}
            imageStyle={"sm:scale-[2] scale-[3]"}
          />
          <SponsorCard
            image={"/sponsors/festo.png"}
            link={"https://festo.com/"}
            className={""}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {sponsors.map((sponsor, index) => {
            return (
              <SponsorCard
                key={index}
                image={`/sponsors/${sponsor.image}`}
                link={sponsor.url}
              />
            );
          })}
        </div>{" "}
        <div className="relative w-[80vw] h-[40vh] sm:h-[90vh] lg:h-[60vh] xl:h-[90vh] max-w-7xl mx-auto">
          <iframe
            width="900"
            // height="500"
            src="https://www.youtube.com/embed/cGEGoZ8Lpg8?si=ItdPalI4NfO3qDDJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="absolute w-full rounded-xl mx-auto h-full aspect-video"
          ></iframe>
        </div>
        <p className="p-4 text-xl sm:text-2xl ">
          We, at Team Vegapod Hyperloop, extend our deepest gratitude to all our
          valued sponsors for their unwavering support and belief in our vision.
          <br />
          <br />
          Your generous contributions are the driving force behind our progress
          and innovation. Together, we are pushing the boundaries of technology,
          striving to shape the future of transportation. Your partnership
          allows us to continue representing India on the global stage,
          developing cutting-edge hyperloop technology, and inspiring the next
          generation of engineers and innovators. Thank you for being an
          integral part of our journey!
        </p>
      </div>
    </section>
  );
};

const SponsorCard = ({ image, link, className, height, width, imageStyle }) => {
  return (
    <>
      <div
        className={`p-4 flex hover:bg-gray-300 rounded-xl justify-center items-center space-y-3 ${className} `}
      >
        <Link href={link} target="_blank">
          <Image
            src={image}
            className={`object-contain h-1/2 mx-auto ${imageStyle}`}
            layout="fixed"
            width={width || 200}
            height={height || 200}
            alt="sponsor logo"
          />
        </Link>
      </div>
    </>
  );
};

export default page;
