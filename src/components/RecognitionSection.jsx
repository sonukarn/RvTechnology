import React from "react";
import { motion } from "framer-motion";
import spriteImage from "../assets/spritesheet-awards.webp";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Recognition data
const recognitions = [
  { id: 1, alt: "Clutch", posY: "0px", rating: 4.8 },
  { id: 2, alt: "GoodFirms", posY: "-135px", rating: 4.7 },
  { id: 3, alt: "AppFutura", posY: "-260px", rating: 4.6 },
  { id: 4, alt: "BusinessOfApps", posY: "-379px", rating: 4.9 },
  { id: 5, alt: "ITFirms", posY: "-500px", rating: 4.8 },
  { id: 6, alt: "TopDevelopers", posY: "-634px", rating: 4.7 },
  { id: 7, alt: "Manifest", posY: "-780px", rating: 4.6 },
  { id: 8, alt: "Upwork", posY: "-910px", rating: 4.9 },
];

// Animation variants
const overlayVariants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const RecognitionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
          We’re <span className="text-red-500">recognized</span> by some of the{" "}
          <span className="text-red-500">best in the industry.</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recognitions.map((item) => (
            <motion.div
              key={item.id}
              className="relative bg-white rounded-xl shadow-md flex items-center justify-center p-6 min-h-[140px] group overflow-hidden"
              whileHover="hover"
              initial="initial"
            >
              {/* Sprite logo */}
              <div
                className="min-w-44 min-h-30 bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url(${spriteImage})`,
                  backgroundPosition: `center ${item.posY}`,
                  backgroundSize: "185px",
                }}
                aria-label={item.alt}
              />

              {/* Overlay with animation */}
              <motion.div
                variants={overlayVariants}
                className="absolute inset-0 bg-[rgba(3,20,62,0.9)] flex flex-col items-center justify-center text-white text-center px-4"
              >
                <motion.p
                  variants={childVariants}
                  className="text-lg font-semibold"
                >
                  Rating
                </motion.p>
                <motion.p
                  variants={childVariants}
                  className="text-2xl text-red-400 font-bold my-1"
                >
                  - {item.rating} -
                </motion.p>
                <motion.div
                  variants={childVariants}
                  className="flex text-yellow-400"
                >
                  {renderStars(item.rating)}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper to render stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  return stars;
};

export default RecognitionSection;
