import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";
import Image from "next/image";

import arrowLeft from "@/assets/logo/arrow-left.svg";
import arrowRight from "@/assets/logo/arrow-right.svg";



export default function Carousel({ slides }) {
  // const swiperLeft = useRef<HTMLDivElement>(null);
  // const swiperRight = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <Image src={slide} alt="" className="rounded-3xl"/>
        </SwiperSlide>
      ))} 
      <div className="absolute top-[50%] w-10 p-2 rounded-lg bg-primary-800 translate-y-[-50%] cursor-pointer z-10 left-3">
        <Image src={arrowLeft} alt="Left" />
      </div>
      <div className="absolute top-[50%] w-10 p-2 rounded-lg bg-primary-300 translate-y-[-50%] cursor-pointer z-10 right-3">
        <Image src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  );
}