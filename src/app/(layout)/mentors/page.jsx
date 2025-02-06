import React from "react";
// import Card from '@/components/Card/MemberCard';
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Linkedin } from "lucide-react";

const FacultyCard = () => {
  return (
    <>
      <div className="h-[105rem] md:h-[65rem] w-full bg-light-100 bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}

        <div className="absolute pointer-events-none inset-0 flex items-center bg-light-100 z-10 justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="w-full absolute z-20">
          <div className="my-16">
            <h2 className="text-xl text-center">
              Dr. Vishwanath Karad MIT World Peace University
            </h2>
            <h1 className="text-center text-4xl font-bold text-primary-800">
              School of Mechanical Engineering
            </h1>
          </div>
          <div className={`p-4 w-fit mx-auto md:flex gap-8`}>
            <Link href={"https://kakandikar.in/"} target="_blank" className="">
              <Image
                src={"/Dr-ganesh-kakandikar.jpg"}
                className={`rounded-2xl object-cover aspect-[4/3] h-full`}
                layout="fixed"
                width={400}
                height={300}
                unoptimized
                alt="Faculty Photo"
              />
            </Link>
            <div className="space-y-3 text-center md:text-left">
              <h1 className="text-2xl  font-bold ">
                Prof. Dr. Ganesh Kakandikar
              </h1>
              {/* <p className="font-medium max-w-md text-sm text-black/60">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent convallis elit condimentum, pharetra tortor quis,
                faucibus ante. Ut eget purus sagittis lacus tempor lacinia. "
              </p> */}

              <div className="flex gap-6 font-semibold justify-center md:justify-start">
                <Link
                  href={"https://kakandikar.in/"}
                  className="flex  items-center gap-2 text-blue-600"
                >
                  <ExternalLink size={18} />
                  Website
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/ganesh-kakandikar-814b3140/?originalSubdomain=in"}
                  className="flex  items-center gap-2 text-blue-600"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </Link>
              </div>

              <blockquote className="italic text-xl font-medium">
                {/* <svg
                  class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg> */}
                "Dream beyond limits <br /> achieve greatness with unwavering
                passion."
              </blockquote>
            </div>
          </div>
          <div className="sm:flex justify-evenly my-8 ">
            <Card
              image={"/omkar-kulkarni.jpg"}
              name={"Dr. Omkar Kulkarni"}
              website={"https://sites.google.com/site/omkarkul9/home"}
              // role={
              //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit condimentum, pharetra tortor quis, faucibus ante. Ut eget purus sagittis lacus tempor lacinia."
              // }
              linkedIn={
                "https://www.linkedin.com/in/omkar-kulkarni9/?originalSubdomain=in"
              }
            />
            <Card
              image={"/chetan-patil.jpg"}
              name={"Dr. Chetan Patil"}
              // website={"#"}
              // role={
              //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit condimentum, pharetra tortor quis, faucibus ante. Ut eget purus sagittis lacus tempor lacinia."
              // }
              linkedIn={
                "https://www.linkedin.com/in/chetan-patil-a82b1558/?originalSubdomain=in"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ image, name, role, website, linkedIn, className }) => {
  return (
    <div
      className={`p-4 space-y-3 w-fit flex flex-col items-center ${className}`}
    >
      <Link href={website || "#"} target="_blank">
        <Image
          src={image}
          className={`rounded-2xl object-cover aspect-[3/4]`}
          layout="fixed"
          width={200}
          height={100}
          unoptimized
          alt="Faculty Photo"
        />
      </Link>
      <h1 className="text-2xl text-center font-bold ">{name}</h1>
      <p className="font-medium  text-center max-w-md text-sm text-black/60">
        {role}
      </p>
      <div className="flex gap-6 font-semibold ">
        {website ? (
          <Link
            href={website || "#"}
            className="flex  items-center gap-2 text-blue-600"
          >
            <ExternalLink size={18} />
            Website
          </Link>
        ) : null}
        {linkedIn ? (
          <Link
            href={linkedIn}
            className="flex  items-center gap-2 text-blue-600"
          >
            <Linkedin size={18} />
            LinkedIn
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default FacultyCard;
