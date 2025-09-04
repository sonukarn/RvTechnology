import React from "react";
import bgImage from "../assets/grigora_case_study.webp";
const CaseStudySection = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <section className="bg-[#0c1b4c] relative" id="case">
        <div className="relative">
          <div className="block">
            <img
              width="1920"
              height="960"
              alt=""
              src={bgImage}
              className="block w-full max-w-full h-auto"
            />
          </div>
          <div className="content-outer lg:absolute bottom-0 z-[1] max-w-[1320px] w-full h-full lg:px-[48px] px-3 pb-[62px] flex justify-center items-center lg:justify-start lg:items-end">
            <div className="case-content pointer-events-none max-w-[360px] xl:max-w-[460px] 2xl:max-w-[500px]">
              <h2 className="block text-white text-3xl md:text-4xl font-bold mb-4">
                Grigora
              </h2>
              <p className="text-white text-base md:text-lg">
                An all-in-one food delivery platform to help users order food
                from nearby restaurants and manage orders more conveniently.
              </p>
              <a
                className="mt-4 inline-block font-semibold text-rose-500 bg-amber-300 hover:text-rose-600 border rounded-4xl text-center pointer-events-auto
          px-4 py-2"
                href="https://rvtechnologies.com/case-studies.html"
              >
                See All Case Studies
              </a>
              <div className="text-right hidden">
                <a href="#skip-sec" className="skip-btn">
                  SKIP
                </a>
                <a href="#GoTo" className="d-none skip-top">
                  SKIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseStudySection;
