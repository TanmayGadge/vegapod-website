import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  
  const sponsors = [
    {
      name: "Swiss",
      image: "Frame 14.svg",
      url: "https://www.swiss.com/",
      desc: "",
    },
    {
      name: "Epitome Components",
      image: "epitome.webp",
      url: "https://aeronsystems.com/",
      desc: "",
    },
    {
      name: "Aeron",
      image: "Aeron.png",
      url: "https://aeronsystems.com/",
      desc: "",
    },
    {
      name: "JBC",
      image: "JBC.jpg",
      url: "https://www.jbctools.com/",
      desc: "",
    },

    {
      name: "Pluss",
      image: "Frame 15.png",
      url: "https://www.pluss.co.in/",
      desc: "",
    },
    {
      name: "Bender",
      image: "Frame 25.png",
      url: "https://www.bender-in.com/",
      desc: "",
    },
    {
      name: "Festo",
      image: "festo.png",
      url: "https://festo.com/",
      desc: "",
    },

    {
      name: "Ocular Manufacturing",
      image: "Ocular 2.png",
      url: "https://www.ocularmanufacturing.com/",
      desc: "",
    },
    {
      name: "Hilti",
      image: "Hilti.png",
      url: "https://www.hilti.in/",
      desc: "",
    },
    {
      name: "Infineon",
      image: "Infineon.png",
      url: "https://www.infineon.com/",
      desc: "",
    },
    {
      name: "TE Conectivity",
      image: "Frame 26.png",
      url: "https://www.te.com/en/home.html",
      desc: "",
    },
    {
      name: "Prototech ",
      image: "Prototech.svg",
      url: "https://prototechsolutions.com/",
      desc: "",
      flag: true,
    },
    {
      name: "Washi wraplts",
      image: "yashi wraplts.svg",
      url: "",
      desc: "",
      flag: true,
    },
    {
      name: "Precision",
      image: "Frame 21.png",
      url: "https://precisionwires.in/",
      desc: "",
      flag: true,
    },
    {
      name: "Gatkul Automotives ",
      image: "Frame 22.png",
      url: "https://www.instagram.com/gatkulautomotives/",
      desc: "",
    },
    {
      name: "Definative Detailing",
      image: "Frame 23.png",
      url: "https://www.definitivedetailing.in/",
      desc: "",
    },
    {
      name: "KR Composites",
      image: "KR Composites.png",
      url: "https://www.krcomposites.com/",
      desc: "",
    },
  ];

  return (
    <section className="bg-light-100">
      <div className="max-w-7xl p-4 mx-auto space-y-16">
        <h1 className="text-5xl w-fit mx-auto p-4">
          A Heartfelt Thank You to Our Sponsors
        </h1>
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
        <h2 className="text-4xl">A special thanks to</h2>
        <SponsorCard
          image={"/sponsors/Frame 14.svg"}
          // name={"Swiss"}
          desc={""}
          link={"https://www.swiss.com/"}
          height={500}
          width={500}
          className={"mx-auto w-fit hover:bg-gray-300 rounded-xl"}
        />
        <div className="relative w-[80vw] h-[40vh] sm:h-[90vh] lg:h-[60vh] xl:h-[90vh] max-w-7xl mx-auto">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/cGEGoZ8Lpg8?si=ItdPalI4NfO3qDDJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="absolute w-full h-full rounded-xl mx-auto "
          ></iframe>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SponsorCard
            image={"/sponsors/epitome.webp"}
            // name={"epitome"}
            desc={""}
            height={500}
            width={500}
            link={"https://www.epitomeindia.com/"}
            className={"mx-auto w-fit "}
          />
          <SponsorCard
            image={"/sponsors/Infineon.png"}
            // name={"Infineon"}
            desc={""}
            height={500}
            width={500}
            link={"https://www.infineon.com/"}
            className={"mx-auto w-fit "}
          />
        </div>

        <h2 className="w-fit mx-auto text-5xl">Our Sponsors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          {sponsors.map((sponsor, index) => {
            return (
              <SponsorCard
                key={index}
                image={`/sponsors/${sponsor.image}`}
                name={sponsor.name}
                desc={sponsor.desc}
                link={sponsor.url}
                height={sponsor.flag && 150}
                width={sponsor.flag && 150}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SponsorCard = ({ image, name, desc, link, className, height, width }) => {
  return (
    <>
      <div className={`p-4 space-y-3 ${className} h-fit`}>
        <Link href={link} target="_blank">
          <Image
            src={image}
            className="rounded-2xl object-cover "
            layout="fixed"
            width={width || 300}
            height={height || 300}
            alt="sponsor logo"
          />
        </Link>
        <h1 className={`text-xl font-semibold `}>{name}</h1>

        <p className="font">{desc}</p>
      </div>
    </>
  );
};

export default page;
