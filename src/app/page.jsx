import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";

export default function Page() {
  return (
    <>
      <div className="flex-col text-center content-center h-screen items-center text-2xl  ">
        <div className="container flex-col gap-y-2.5 justify-center items-centerh-28">
          <h1 className="club-title text-6xl inline-block">
            Vegapod Hyperloop
          </h1>
          <br/>
          <p className="inline-block">accelerating the future</p>
        </div>
        {/* <Spotlight className={"club-title"} fill={'white'}/> */}
        {/* <SparklesCore background={'transparent'} className={'sparkles h-screen fixed -z-1 top-0 left-0 right-0'} particleDensity={6} /> */}
      </div>
    </>
  );
}
