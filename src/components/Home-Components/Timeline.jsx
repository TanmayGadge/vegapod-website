import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/image-1.jpg";
import image2 from "@/assets/images/image-2.jpg";
import image3 from "@/assets/images/image-3.jpg";
import image4 from "@/assets/images/image-4.jpg";
import ehwImage from "@/assets/images/ehw-2023.jpg";
import ehwImage2 from "@/assets/images/ehw-2022.jpeg";
import spaceX from '@/assets/images/spaceX/spaceX-2019.jpg';
import Achievement from "./Achievement";

const Timeline = () => {
  const achievements = [
    [
      {
        image: image1,
        date: "Zurich, Switzerland",
        info: 'Achieved a top 2 position globally in the mechanical,electrical, and guidance subsystems, and proudly won the 2024 Outreach Award for our efforts in promoting Hyperloop technology on the International stage."',
      },
      {
        image: image2,
        date: "",
        info: "Successfully achieved static levitation for enhanced stability and precision. ",
      },
      {
        image: image4,
        date: "",
        info: "Implemented a robust thermal management system for optimized performance and efficiency. ",
      },
      {
        image: image3,
        date: "Zurich, Switzerland",
        info: " We proudly won the 2024 Outreach Award for our efforts in promoting Hyperloop technology on the International stage.",
      },
    ],
    [
      {
        image: ehwImage,
        date: "Scotland, the UK",
        info: "Ranked in the top 6 globally, the only Asian team to qualify for the final demonstration and successfully clear the Testing and Safety Documentation (TSD) process.",
      },
    ],
    [
      {
        image: ehwImage2,
        date: "Delft, the Netherlands",
        info: "Represented India with a fully operational and cost-efficient pod.  ",
      },
    ],
    [
      {
        image: spaceX,
        date: "SpaceX",
        info: "Ranked amongst the top 3 teams in Asia and top 30 out of 1,600 teams worldwide",
      },
    ],
  ];

  return (
    <section className="mb-16">
      <h1 className="w-fit mx-auto text-primary-900 font-bold text-5xl m-16 p-2 selection:text-light-100 selection:bg-primary-900
      ">
        Expore Our Progress
      </h1>
      {
        achievements.map((data, index) => (
          <Achievement key={index} data={data} year={2024} index={index} total={achievements.length} />
        ))
      }
      
      
    </section>
  );
};

export default Timeline;
