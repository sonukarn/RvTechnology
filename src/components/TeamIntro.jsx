import React from "react";
import teambg from "../assets/about-us-bg-1.jpg";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TeamIntro = () => {
  // useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // 30% visible triggers
  });

  return (
    <section ref={ref} className="relative text-white">
      {/* Background Image (Fixed only on lg and above) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-scroll lg:bg-fixed"
        style={{
          backgroundImage: `url(${teambg})`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(18,31,75,0.7)]"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
          Trustworthy. Passionate. Dependable.{" "}
          <span className="text-red-500">Meet our A team.</span>
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-center text-lg sm:text-xl text-gray-200 leading-relaxed">
          Ever since 2007, we’ve been consistently helping businesses achieve
          excellence and success by enabling them to scale with technology. The
          RV Technologies team comprises individuals who are passionate about
          making a difference for you through impactful product development.
        </p>

        {/* Icons + Counters Section */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-lg">
              <span className="text-4xl">🏆</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {inView && <CountUp end={15} duration={3} />}+
            </p>
            <p className="text-base font-medium">Years of Excellence</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-lg">
              <span className="text-4xl">👥</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {inView && <CountUp end={250} duration={3} />}+
            </p>
            <p className="text-base font-medium">Team Members</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-lg">
              <span className="text-4xl">⭐</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {inView && <CountUp end={500} duration={3} />}+
            </p>
            <p className="text-base font-medium">Projects Delivered</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-lg">
              <span className="text-4xl">👍</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {inView && <CountUp end={100} duration={3} />}%
            </p>
            <p className="text-base font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
