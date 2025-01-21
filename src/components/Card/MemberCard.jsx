import Image from "next/image";
import Link from "next/link";

const Card = ({ image, name, role, desc, linkedIn , className, imageStyle}) => {
    return (
      <>
        <div className={`p-4 space-y-2 h-fit `}>
          <Link href={linkedIn || "#"} target={`${linkedIn && "_blank"}`}>
            <Image
              src={image}
              className={`rounded-2xl object-cover aspect-square`}
              layout="fixed"
              width={500}
              height={300}
              alt="Member Photo"
            />
          </Link>
          <h1 className="text-xl font-semibold w-fit">{name}</h1>
          <p className="font-medium w-fit">{role}</p>
          {desc && <p className="font-light w-fit">{desc}</p>}
          
        </div>
      </>
    );
  };

export default Card