import React from "react";
import Link from "next/link";

const ButtonDark = ({text, link}) => {
  return (
    <Link href={link} className="h-fit">
    <button className="bg-primary-800  text-light-100 rounded-3xl p-4 flex items-center h-12 select-none">
      {text}
    </button>
    </Link>
  );
};

export default ButtonDark;
