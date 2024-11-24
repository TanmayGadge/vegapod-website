import React from "react";
import Link from "next/link";

const ButtonLight = ({text, link}) => {
  return (
    <Link href={link} className="h-fit">
    <button className="bg-white rounded-3xl p-4 flex items-center h-12 select-none">
      {text}
    </button>
    </Link>
  );
};

export default ButtonLight;
