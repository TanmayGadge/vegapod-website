import React from "react";
import Image from "next/image";

export const Card = ({ image, date, info }) => {
    return (
      <div className="hover:bg-gray-100 p-2 rounded-3xl">
        <Image
          src={image}
          height={400}
          width={400}
          layout="responsive"
          alt="pod image"
          className="rounded-3xl"
        />
        <div className="my-4 mx-2">
          <p className="text-primary-800 font-bold text-lg">{date}</p>
          <p className="">{info}</p>
        </div>
      </div>
    );
  };

