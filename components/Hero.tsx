import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-10 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center mt-10">
        <div className="max-w-[89vw] md:max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left: Image */}
          <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-white brightness-125">
            <img
              src="/my-pic.jpg"
              alt="Monisha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <p className="uppercase tracking-widest text-sm text-blue-100">
              HI, I'M
            </p>

            <TextGenerateEffect
              words="MONISHA"
              className="text-[48px] md:text-6xl lg:text-7xl font-bold"
            />

            <p className="uppercase tracking-widest text-sm text-blue-100">
              PIXELS, PASSION & POSSIBILITIES
            </p>
          </div>
        </div>
      </div>

      {/* Resume Download Button — move it here */}
      <div className="relative z-10 mt-10 flex justify-center">
        <a
          href="/Monisha-J resume.pdf"
          download
          className="bg-[#161A31] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#1f223b] transition duration-300 shadow-lg"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
