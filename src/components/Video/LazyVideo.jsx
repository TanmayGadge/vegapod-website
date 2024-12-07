"use client";
import React, { useRef, useEffect } from "react";

const LazyVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.src = src;
            observer.unobserve(videoRef.current);
          }
        });
      },
      { threshold: 0 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [src]);

  return (
    <video ref={videoRef} autoPlay muted loop controls controlsList="nodownload" className="hidden sm:block mx-auto rounded-2xl w-full h-[80vh] object-cover rotate-">
      Your browser does not support the video tag.
    
</video>
  );
};

export default LazyVideo;