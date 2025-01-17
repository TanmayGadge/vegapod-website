import React from "react";
// import Card from '@/components/Card/MemberCard';
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Linkedin } from "lucide-react";

const FacultyCard = () => {
  return (
    <>
      <div className="h-[60rem] w-full  bg-white bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}

        <div className="absolute pointer-events-none inset-0 flex items-center bg-white z-10 justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="w-full absolute z-20">
          <Card
            image={"/Dr-ganesh-kakandikar.jpg"}
            name={"Prof. Dr. Ganesh Kakandikar"}
            role={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit condimentum, pharetra tortor quis, faucibus ante. Ut eget purus sagittis lacus tempor lacinia."
            }
            className={"mx-auto mt-16"}
            website={"https://kakandikar.in/"}
            linkedIn={"#"}
          />
          <div className="flex justify-evenly my-8">
            <Card
              image={"/omkar-kulkarni.jpg"}
              name={"Prof. Omkar Kulkarni"}
              website={"https://kakandikar.in/"}
              role={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit condimentum, pharetra tortor quis, faucibus ante. Ut eget purus sagittis lacus tempor lacinia."
              }
              linkedIn={
                "https://www.linkedin.com/in/omkar-kulkarni9/?originalSubdomain=in"
              }
            />
            <Card
              image={"/chetan-patil.jpg"}
              name={"Prof. Chetan Patil"}
              website={"https://kakandikar.in/"}
              role={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit condimentum, pharetra tortor quis, faucibus ante. Ut eget purus sagittis lacus tempor lacinia."
              }
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
      <Link href={website} target="_blank">
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
            href={website}
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
