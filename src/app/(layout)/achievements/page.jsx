"use client";
import React from "react";
import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import spaceX from "@/assets/images/spaceX/spaceX-compitition.jpg";
import spaceX2 from "@/assets/images/spaceX/spaceX-pod.jpg";
import ehw1 from "@/assets/images/EHW-2023/IMG_4989.jpeg";
import ehw2 from "@/assets/images/EHW-2023/IMG_4999.jpeg";
import ehw3 from "@/assets/images/EHW-2023/IMG_5024.jpeg";
import ehw4 from "@/assets/images/EHW-2023/IMG_5045.jpeg";

import ehw5 from "@/assets/images/EHW-2024/IMG_9823.jpg";
import ehw6 from "@/assets/images/EHW-2024/IMG-20240925-WA0015.jpg";
import ehw7 from "@/assets/images/EHW-2024/IMG-20240925-WA0018.jpg";
import ehw8 from "@/assets/images/EHW-2024/IMG-20240925-WA0019.jpg";

import ehw9 from "@/assets/images/EHW-2022/IMG_0400.jpg";
import ehw10 from "public/gallery/ehw-2022/IMG_0469.jpg";
import ehw11 from "@/assets/images/EHW-2022/IMG_1690.jpg";
import ehw12 from "@/assets/images/EHW-2022/IMG_1723.jpg";
import outreach from "@/assets/images/EHW-2024/outreach-award.jpg";

const page = () => {
  const timelineData = [
    {
      title: "2019",
      content: (
        <div className="space-y-8 z-10">
          <h1 className="text-3xl font-semibold">
            SpaceX Hyperloop Pod Competition
          </h1>
          {/* <p className=" text-xl">3rd in Asia, Global Rank 30</p> */}
          <p className=" text-xl">
            Ranked{" "}
            <strong>
              3<sup>rd</sup>
            </strong>{" "}
            in Asia,{" "}
            <strong>
              30<sup>th</sup>
            </strong>{" "}
            globally
          </p>
          <p className="text-xl">
            <strong>First in India</strong> to develop a Linear Induction Motor
            (LIM) to achieve contactless propulsion in our 2020 prototype.
          </p>

          <div className="space-y-4">
            <Image
              src={spaceX}
              alt="spaceX pod compitition"
              height={500}
              // layout="responsive"
              className="rounded-2xl"
            />
            <Image
              src={spaceX2}
              alt="spaceX pod compitition"
              height={500}
              // layout="responsive"
              className="rounded-2xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">European Hyperloop Week</h1>
          <p className=" text-xl">
            Ranked{" "}
            <strong>
              5<sup>th</sup>
            </strong>{" "}
            globally
          </p>
          <p className="text-xl">
            Presented a Socio-economic feasibility report on the Mumbai-Pune
            Hyperloop Corridor in UPV Valencia.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">
            Canadian Hyperloop Conference{" "}
          </h1>
          <p className=" text-xl">
            Showcased a subscale hyperloop prototype at this prestigious
            conference hosted by the University of Waterloo.
          </p>
          <h1 className="text-3xl font-semibold">European Hyperloop Week</h1>

          <p className=" text-xl">
            Crafted a highly cost effective hyperloop prototype at TU Delft, the
            Netherlands 2022
          </p>

          <div className="block space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-2">
            <Image
              src={ehw9}
              alt=""
              height={500}
              className="rounded-2xl "
            />
            <Image
              src={ehw10}
              alt=""
              height={500}
              className="rounded-2xl "
            />
            <Image
              src={ehw11}
              alt=""
              height={500}
              className="rounded-2xl"
            />
            <Image
              src={ehw12}
              alt=""
              height={500}
              className="rounded-2xl"
            />
          </div>  
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">European Hyperloop Week</h1>
          <p className=" text-xl">
            Ranked{" "}
            <strong>
              6<sup>th</sup>
            </strong>{" "}
            globally
          </p>
          <p className=" text-xl">
            <strong>Only Asian team</strong> to pass the rigorous Testing and
            Safety Documentation (TSD) round at the University of Edinburgh, the
            UK.
          </p>
          <p className="text-xl">&ndash; 100% Sustainable Prototype.</p>
          <p className="text-xl">&ndash; Linear Induction Motor</p>
          <p className="text-xl">
            &ndash; In-house manufactured quasi-z-source inverter
          </p>

          <div className="block space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-2">
            <Image
              src={ehw1}
              alt=""
              height={500}
              className="rounded-2xl "
            />
            <Image
              src={ehw2}
              alt=""
              height={500}
              className="rounded-2xl "
            />
            <Image
              src={ehw3}
              alt=""
              height={500}
              className="rounded-2xl"
            />
            <Image
              src={ehw4}
              alt=""
              height={500}
              className="rounded-2xl"
            />
          </div>  
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">European Hyperloop Week</h1>
          <p className=" text-xl">
            Ranked{" "}
            <strong>
              2<sup>nd</sup>
            </strong>{" "}
            globally in the mechanical, electrical, and guidance subsystems.
          </p>
          <p className=" text-xl">
            Proudly won the <strong> 2024 Outreach Award</strong> for our
            efforts in promoting Hyperloop technology on the International
            stage.
          </p>
          <p className="text-xl">
            &ndash; Successfully <strong>achieved static levitation</strong> for
            enhanced stability and precision.
          </p>
          <p className="text-xl">
            &ndash; Implemented a <strong>robust thermal management</strong>{" "}
            system for optimized performance and efficiency.
          </p>
          <Image
            src={outreach}
            height={500}
            alt="Outreach award"
            className="rounded-2xl w-full"
          />
          <Image
            src={ehw6}
            alt=""
            height={500}
            className="rounded-2xl w-full"
          />
          <div className="grid grid-cols-2 gap-2">
            <Image
              src={ehw7}
              alt=""
              height={500}
              className="rounded-2xl "
            />
            <Image
              src={ehw5}
              alt=" "
              height={500}
              className="rounded-2xl "
            />
          </div>
            <Image
              src={ehw8}
              alt=""
              height={500}
              className="rounded-2xl w-fit"
            />
        </div>
      ),
    },
  ];

  return (
    <div className="z-0 bg-light-100">
      <Timeline data={timelineData} className="z-0"/>
    </div>
  );
};

export default page;
