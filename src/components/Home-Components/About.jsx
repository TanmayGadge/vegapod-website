import React from "react";
import dynamic from "next/dynamic";


const DynamicVideo = dynamic(() => import("../Video/LazyVideo"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const About = () => {
  return (
    <>
      <section className=" bg-primary-800 text-light-100  p-4 py-32">
        <div className="max-w-7xl font-extralight selection:bg-light-100 selection:text-primary-800 space-y-8 mx-auto">
          <h2 className="text-5xl h flex items-end">Breaking Barriers</h2>
          <p className="text-xl sm:text-2xl p-[0.5rem]">
            <span className="float-left text-6xl pr-2">V</span>ision challenges
            conformity. Conformity creates conventions. Conventions build
            barriers that prevent a better future. But when many people who
            believe in that vision come together, they remove the barriers to
            progress. By removing the financial, technological, safety and
            environmental risks, and by removing the wasted time, stress, and
            complications of travel, we are taking the world where it wants to
            go. We're moving the world faster forward. Get on board
          </p>
          <p className="text-xl sm:text-2xl  text-justify p-[0.5rem]">
            Team Vegapod Hyperloop is a dynamic, student-led initiative
            incubated at MIT-WPU, comprising of{" "}
            <strong className="font-semibold">40 talented students </strong>{" "}
            from various disciplines, dedicated towards{" "}
            <strong className="font-semibold">
              advancing hyperloop technology
            </strong>
            . We craft sub-scale hyperloop prototypes, incorporating
            cutting-edge technologies such as levitation, , contactless
            propulsion, regenerative braking, power electronics, and cooling
            systems.
          </p>
        </div>
        <div className="mt-16 relative max-w-7xl mx-auto">
          <DynamicVideo src="/video/vegapod-video.mp4" />
        </div>
      </section>

      
    </>
  );
};

export default About;
