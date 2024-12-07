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
    <video ref={videoRef} controls autoPlay muted loop className="mx-auto rounded-2xl w-full">
      Your browser does not support the video tag.
    
</video>
  );
};

export default LazyVideo;