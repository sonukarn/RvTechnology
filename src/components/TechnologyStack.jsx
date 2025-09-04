import React from "react";
const logos = [
  { id: 1, label: "Flutter", src: "/icons/flutter.svg" },
  { id: 2, label: "React", src: "/icons/react.svg" },
  { id: 3, label: "Swift", src: "/icons/swift.svg" },
  { id: 4, label: "Kotlin", src: "/icons/kotlin.svg" },
  { id: 5, label: "Laravel", src: "/icons/laravel.svg" },
  { id: 6, label: "Node JS", src: "/icons/nodejs.svg" },
  { id: 7, label: "Angular", src: "/icons/angular.svg" },
  { id: 8, label: "Python", src: "/icons/python.svg" },
];

export default function TechnologyStackSection() {
  return (
    <section className="relative min-h-[95vh] bg-[#071233] overflow-hidden group flex items-center py-12">
      {/* RED OVERLAY (hidden on small & medium devices) */}
      <div
        className="
          hidden lg:block
          absolute top-0 left-0 h-full w-1/3
          bg-[#ff6565]
          transform transition-transform duration-700 ease-in-out
          group-hover:-translate-x-full
          z-0
        "
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12">
          {/* LEFT COLUMN */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              {/* Border */}
              <div
                className="
                  absolute top-3 left-3
                  w-full h-full
                  border-2 border-[#ff8a8a] rounded-lg
                  z-10
                "
              />
              {/* Card */}
              <div
                className="
                  relative
                  w-full h-auto
                  rounded-lg shadow-2xl
                  flex flex-col justify-center p-6 sm:p-8
                  z-20
                  bg-white transition-colors duration-500
                  group-hover:bg-[#ff6565] group-hover:text-white
                "
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  Our Technology Stack
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-relaxed">
                  We are adept at all possible tech stacks for both web and
                  mobile, as well as a wide range of platforms, languages, and
                  database systems.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 place-items-center text-white">
              {logos.map((l) => (
                <div key={l.id} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img
                      src={l.src}
                      alt={l.label}
                      className="max-h-10 sm:max-h-12 max-w-full"
                    />
                  </div>
                  <div className="text-xs sm:text-sm mt-1 text-[#dbe6ff]">
                    {l.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
