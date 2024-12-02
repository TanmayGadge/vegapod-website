"use client";
import React, { useState } from "react";

function MobileGallery({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState({
    isExpanded: false,
    imageIndex: null,
  });
  const [imageSrc, setImageSrc] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  function handleClick(index) {
    setExpanded((prevValue) => {
      return {
        isExpanded: !prevValue.isExpanded,
        imageIndex: index,
      };
    });
  }

  return (
    <section className="flex justify-center items-center gap-2 h-screen sm:hidden max-w-7xl overflow-scroll">
      {images.map((card, index) => (
        <>
          <img
            className="w-16 h-[80vh] hover:w-[20%] object-cover rounded-xl"
            key={index}
            src={card.thumbnail}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{
              filter:
                hoveredIndex !== null && hoveredIndex !== index
                  ? "grayscale(100%)"
                  : "none",
              transition: "filter 0.3s",
              transition: "width ease-out 0.75s",

              width:
                expanded.isExpanded && expanded.imageIndex === index
                  ? "100vw"
                  : "10vw", //on click

              width:
                hoveredIndex === index && hoveredIndex !== null
                  ? "30vw"
                  : "10vw", //on hover

              width:
                expanded.isExpanded &&
                hoveredIndex === index &&
                hoveredIndex !== null
                  ? "100vw"
                  : null, //on hover when expanded

              height:
                expanded.isExpanded && expanded.imageIndex === index
                  ? "100vh"
                  : "80vh",
              display:
                expanded.isExpanded && expanded.imageIndex !== index && "none",
            }}
          />
          <br />
        </>
      ))}
    </section>
  );
}

export default MobileGallery;
