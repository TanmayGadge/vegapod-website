import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/image-1.jpg";
import image2 from "@/assets/images/image-2.jpg";
import image3 from "@/assets/images/image-3.jpg";
import image4 from "@/assets/images/image-4.jpg";
import image6 from "@/assets/images/image-6.jpg";
import image7 from "@/assets/images/image-7.jpg";

const ImageSlides = () => {

    let slideIndex = 1;
    showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    // let slides = document.getElementsByClassName("slides");
    // let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" bg-[#717171]", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " bg-[#717171]";
  }

  let active = { backgroundColor: "#717171" };

  return (
    <div className="md:hidden">
      <div className="slideshow-container">
        <div className="slides fade">
          <Image src={image1} />
        </div>
        <div className="slides fade">
          <Image src={image2} />
        </div>
        <div className="slides fade">
          <Image src={image3} />
        </div>
        <div className="slides fade">
          <Image src={image4} />
        </div>
        <div className="slides fade">
          <Image src={image6} />
        </div>
        <div className="slides fade">
          <Image src={image7} />
        </div>

        <a onClick={plusSlides(-1)}></a>
        <a onClick={plusSlides(1)}></a>
      </div>
      <div className="text-center space-x-2 space-y-4">
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(1)}
        ></span>
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(2)}
        ></span>
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(3)}
        ></span>
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(4)}
        ></span>
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(5)}
        ></span>
        <span
          className="dot cursor-pointer h-[15px] w-[15px] bg-black inline-block rounded-[50%]"
          onClick={currentSlide(6)}
        ></span>
      </div>
    </div>
  );
};

export default ImageSlides;
