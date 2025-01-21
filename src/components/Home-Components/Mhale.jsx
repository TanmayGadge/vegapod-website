import { ExternalLink, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mhale = () => {
  return (
    <section className="bg-light-100  h-screen">
        <div className="max-w-7xl mx-auto space-y-8 ">
          <h1 className="text-center text-5xl sm:text-7xl text-primary-800 pt-16">
            <b>TEAM VEGAPOD HYPERLOOP</b> <br/> Welcomes
          </h1>
          <div className="w-fit mx-auto space-y-6">
            <Image
              src={"/sponsors/mahle.svg"}
              className="mx-auto -my-40"
              width={400}
              height={200}
            />
            <div className="flex justify-evenly ">
              <Link
                href={"https://www.mahle.com/"}
                className="flex  items-center gap-2 text-blue-600 w-fit"
              >
                <ExternalLink size={18} />
                Website
              </Link>
              <Link
                href={"https://instagram.com/mahlegroup/?hl=en"}
                className="flex  items-center gap-2 text-blue-600 w-fit"
              >
                <Instagram size={18} />
                Instagram
              </Link>

              <Link
                  href={"https://www.linkedin.com/company/mahle"}
                  className="flex  items-center gap-2 text-blue-600"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </Link>
            </div>
          </div>

          <p className="text-xl text-center w-3/4 mx-auto p-4 pb-8 font-light">
            Team Vegapod Hyperloop is proud to announce our partnership with the
            esteemed MAHLE Group. Through their CSR initiative, MAHLE is
            enabling us to implement novel technologies and drive innovation in
            our hyperloop prototype. Their support is instrumental in advancing
            sustainable engineering and preparing us for European Hyperloop Week
            2025 in Netherlands, where we will showcase cutting-edge
            advancements. We are truly grateful for their belief in our vision.
          </p>
        </div>
      </section>
  )
}

export default Mhale