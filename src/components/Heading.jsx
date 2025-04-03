import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      {text.map((item, index) => {
        return (
          <h1 className={`${index % 2 == 0 ? "text-gray-500" : "text-primary-900"} text-5xl`}>
            {item}
          </h1>
        );
      })}
    </>
  );
};

export default Heading;
