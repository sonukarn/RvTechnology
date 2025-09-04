import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    text: "RV Technologies has consistently met or exceeded our expectations.",
    name: "Founder & Director",
    company: "Seecloud Limited",
  },
  {
    text: "We are happy about the deliverables.",
    name: "Executive",
    company: "Hi Acta Limited",
  },
  {
    text: "I was most impressed with their communication skills and willingness to provide clarity on...",
    name: "CEO",
    company: "Equalizer Games Inc",
  },
  {
    text: "Great technical team, reliable delivery, and excellent customer service.",
    name: "CTO",
    company: "TechVision Ltd",
  },
  {
    text: "RV Technologies turned our ideas into reality with outstanding execution.",
    name: "Product Manager",
    company: "InnovateX",
  },
];

export default function BottomFooter() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-[#172446] py-16 overflow-hidden">
      <div className="bg-[#fafafa] w-full px-4 sm:px-6 lg:px-12 py-12 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-2xl font-bold text-[#172446]">
            RV Technologies Reviews
          </h2>

          <div className="flex items-center mt-4 sm:mt-0">
            <span className="text-lg font-semibold text-gray-800 mr-2">
              4.8
            </span>
            <div className="flex text-red-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} fill="red" stroke="red" />
                ))}
            </div>
            <span className="text-gray-600 ml-2">56 reviews</span>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
                <div className="flex items-center mb-2 text-red-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="red" stroke="red" />
                    ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{review.name}</span>,{" "}
                    {review.company}
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    ✔ Verified Review
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-[#172446]" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-20"
        >
          <ChevronRight className="w-6 h-6 text-[#172446]" />
        </button>
      </div>
    </section>
  );
}
