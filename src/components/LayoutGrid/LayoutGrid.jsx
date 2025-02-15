"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

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
        // Check if the click is on an image or the content area
        const galleryImage = document.getElementById("gallery-image");
        const contentArea = document.querySelector(`[layoutId="content-${selected.id}"]`);
        
        
        
        handleOutsideClick();
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
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed inset-0 h-3/4 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            
            <div>
              <ImageComponent card={card} />
            </div>
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          handleOutsideClick();
        }}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
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
      className={cn(
        `object-cover object-top absolute inset-0 h-full w-full transition duration-200 cursor-pointer`
      )}
      id="gallery-image"
      alt="thumbnail"
      layout="fixed"
      draggable="false"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0,
        }}
        className="absolute inset-0 h-full w-full bg-black z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70] text-xl bg-custom text-light-100 pt-2"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};