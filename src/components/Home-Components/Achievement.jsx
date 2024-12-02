import React from "react";
import { Card } from "../Card/Card";

const Achievement = ({ data, year, index, total }) => {
  return (

    <div className="w-full flex mx-auto max-w-7xl">
      <div className=" p-4 h-full my-auto hidden md:block w-60">
        <p className={`text-5xl font-bold  `} >

          {year}

        </p>
      </div>
      <div className="relative w-6 hidden md:block" >
        <div className="h-full w-[2px] bg-red-500  mx-auto " />
        <div className="w-6 h-6 rounded-full bg-red-500 absolute top-[50%] translate-y-[-50%]  translate-x-[-10%]  left-0 right-0 " />
        {
          index == 0 ? <div className="w-3 h-3 rounded-full bg-red-500 absolute translate-y-[-50%]  translate-x-[-50%]  left-[50%] top-0" /> : null
        }
        {
          index == total - 1 ? <div className="w-3 h-3 rounded-full bg-red-500 absolute translate-y-[50%]  translate-x-[-50%]  left-[50%] bottom-0" /> : null
        }
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
