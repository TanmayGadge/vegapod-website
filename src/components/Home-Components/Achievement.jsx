import React from "react";
import Image from "next/image";
import {Card} from "../Card/Card";

const Achievement = ({ data, year }) => {
  return (
    <div className="w-full flex mx-auto max-w-7xl">
      <div className="w-fit p-4 h-full my-auto hidden mr-8 md:block">
        <p className={`text-5xl font-bold ${year == 2019 && "ml-3"} `} >
          {year}
          
        </p>
      </div>
      <div className="relative w-6 hidden md:block" >
        <div className="h-full w-[2px] bg-red-500  mx-auto " />
        <div className="w-6 h-6 rounded-full bg-red-500 absolute translate-y-[-50%] top-[50%] " />
        <div className="w-3 h-3 rounded-full bg-red-500 absolute translate-y-[-50%]  translate-x-[-50%] left-[50%] top-0" />
      </div>
      <div className="w-full">
        <div className="text-3xl block md:hidden">{year}</div>
        <div className="w-full grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:px-16 pt-8 ">
          {data.map((achievement, index) => {
            return (
              <Card
                key={index}
                image={achievement.image}
                date={achievement.date}
                info={achievement.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Achievement;
