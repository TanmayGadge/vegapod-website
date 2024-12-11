import React from "react";
import Image from "next/image";
import aeron from "@/assets/logo/sponsors/AERON.png";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-light-100">
      <div className="max-w-7xl p-4 mx-auto">
        <h1 className="text-5xl w-fit mx-auto p-4">
          A Heartfelt Thank You to Our Sponsors
        </h1>
        <p className="p-4 text-xl sm:text-2xl mt-16">
          We, at Team Vegapod Hyperloop, extend our deepest gratitude to all our
          valued sponsors for their unwavering support and belief in our vision.<br/>
          Your generous contributions are the driving force behind our progress
          and innovation. Together, we are pushing the boundaries of technology,
          striving to shape the future of transportation. Your partnership
          allows us to continue representing India on the global stage,
          developing cutting-edge hyperloop technology, and inspiring the next
          generation of engineers and innovators. Thank you for being an
          integral part of our journey!
        </p>

        <div className="">
          <SponsorCard image={aeron} name={"aeron"} desc={""} link={"#"}/>
        </div>

      </div>
    </section>
  );
};

// const SponsorCard = ({logo, name, descption})=>{
//   return(
//     <div className="">
//       <Image src={logo} alt="sponsor logo" height={200} />
//       <div className="">{name}</div>
//       <div className="">{desc}</div>
//     </div>
//   )
// }

const SponsorCard = ({ image, name, desc, link }) => {
  return (
    <>
      <div className="p-4 space-y-2">
        <Link href={link} target="_blank">
          <Image
            src={image}
            className="rounded-2xl  "
            layout="fixed"
            width={300}
          />
        </Link>
        <h1 className="text-xl font-semibold">{name}</h1>
        {/* <p className="font-medium">{role}</p> */}
        <p className="font-light">{desc}</p>
      </div>
    </>
  );
};

export default page;
