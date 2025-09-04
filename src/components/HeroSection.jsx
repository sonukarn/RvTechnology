import React, { useEffect } from "react";
import bgVideo from "../assets/home_bannervideo.mp4"; // replace with your video
import Arrow from "../assets/go-to.png";
import FancyButton from "./ui/FancyButton";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("services"); // id of next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        id="hero-video"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#020f2f]/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 mt-18 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Disrupt <span className="text-red-500">.</span> Accelerate{" "}
          <span className="text-red-500">.</span> Scale
          <span className="text-red-500">.</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white max-w-3xl">
          We’re your{" "}
          <span className="text-red-500 font-semibold">trusted partner</span> in
          building apps and products{" "}
          <span className="text-red-500 font-semibold">
            unique to your business.
          </span>
        </p>

        {/* CTA Button */}
        <FancyButton to="/portfolio">Portfolio</FancyButton>
        {/* <CustomButton className="mt-4" to="/portfolio">
          Portfolio
        </CustomButton> */}

        {/* Awards / Badges */}
        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <img
            src="/assets/clutch1.png"
            alt="clutch award"
            className="h-20 w-auto"
          />
          <img
            src="/assets/goodfirms.png"
            alt="goodfirms award"
            className="h-20 w-auto"
          />
          <img
            src="/assets/clutch2.png"
            alt="clutch award"
            className="h-20 w-auto"
          />
        </div>
      </div>
      {/* Scroll Down Icon */}
      <div
        onClick={scrollToNext}
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      >
        {/* <ChevronDown className="h-10 w-10 text-red-500 bg-white rounded-full shadow-lg p-2" /> */}
        <img src={Arrow} alt="Arrow image" />
      </div>
    </section>
  );
};

export default HeroSection;
