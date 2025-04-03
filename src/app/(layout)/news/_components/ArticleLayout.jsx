"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);
  const containerRef = useRef(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  
  // Add global click event listener
  useEffect(() => {
    // Only add the listener if an image is selected
    if (selected) {
      const handleGlobalClick = (e) => {
        // Check if the click is outside the image content
        // Using a safer approach than closest()
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          handleOutsideClick();
        }
      };
      
      // Add the event listener to the document
      document.addEventListener("click", handleGlobalClick);
      
      // Clean up the event listener when component unmounts or selected changes
      return () => {
        document.removeEventListener("click", handleGlobalClick);
      };
    }
  }, [selected]);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={(e) => {
              e.stopPropagation(); // Prevent event from bubbling up
              handleClick(card);
            }}
            className={cn(
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed inset-0 w-screen h-screen z-50 flex justify-center items-center"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            ref={selected?.id === card.id ? containerRef : null}
          >
            {selected?.id === card.id ? (
              <SelectedCard selected={selected} onClose={handleOutsideClick} />
            ) : (
              <ImageComponent card={card} />
            )}
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.7 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <Image
      src={card.thumbnail}
      height={500}
      width={500}
      className="object-contain object-center absolute inset-0 h-full w-full transition duration-200 cursor-pointer"
      id="gallery-image"
      alt="thumbnail"
      layout="fixed"
      draggable="false"
    />
  );
};

const SelectedCard = ({ selected, onClose }) => {
  return (
    <div className="h-full w-full flex items-center justify-center relative z-[60]">
      <Image
        src={selected.thumbnail}
        fill
        className="object-contain p-4 md:p-8"
        id="gallery-image"
        alt="fullscreen image"
        sizes="100vw"
      />
      
      <button 
        className="absolute top-4 right-4 z-[70] bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};