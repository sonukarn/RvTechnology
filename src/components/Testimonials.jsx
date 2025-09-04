import React from "react";
import mapBg from "../assets/testimonials-bg.png";
import img1 from "../assets/note7.webp";
import img2 from "../assets/note10.webp";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    text: "I’ve had a long-term working relationship with RV Technologies and I am delighted to say that all the work they have delivered has been to the highest standards. Looking forward to working with them again.",
    img: img1,
    name: "Laura Husson",
    role: "CEO, LauraHusson.com, United States.",
  },
  {
    id: 2,
    text: "I have hired RV Technologies to work on different projects. The development team has always shown dedication & persistence even while dealing with difficulties. Thanks to RV Technologies, I’ve been able to focus on my core business objectives.",
    img: img2,
    name: "Joshua Howell",
    role: "Director of Marketing, Generations Hospice Care",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-[50px] px-[20px] bg-[#f8f8fc] testimonials_sec relative"
      style={{
        backgroundImage: `url(${mapBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="w-[90%] mx-auto text-center mb-25">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c1632] leading-snug">
          You’re in <span className="text-[#ff5a5f]">good company.</span> Our
          customers love <span className="text-[#ff5a5f]">♥ us.</span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="client-note relative p-7 z-1 h-full">
                <div className="client-note-inner h-full bg-[#fff] flex flex-col pt-[35px] pr-[35px] pb-[35px] pl-[45px] shadow-md rounded-lg">
                  <p className="font-semibold">{testimonial.text}</p>
                  <div className="client-note-foot mt-auto pt-6 flex items-center">
                    <div className="left pr-3.5 w-[130px]">
                      <img
                        width="114"
                        height="110"
                        alt={testimonial.name}
                        className="lazy max-w-full h-auto rounded-full"
                        src={testimonial.img}
                      />
                    </div>
                    <div className="right text-left">
                      <strong>{testimonial.name}</strong>
                      <p className="font-semibold mt-0 mb-4 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center mt-12">
        <a
          href="#"
          className="px-6 py-3 bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7f] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          Read More Testimonials
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
