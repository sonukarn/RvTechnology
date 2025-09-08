import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Presentation,
  Bot,
  Grid3x3,
  Cloud,
} from "lucide-react";

const SpecializationCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  isActive,
}) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-full md:w-80 lg:w-72 xl:w-80 mx-4 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Header with icon */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
          <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} className="text-white" />
          </div>

          <div className="pr-20">
            <div className="inline-block bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {subtitle}
            </div>
            <h3 className="text-xl font-bold leading-tight">{title}</h3>
          </div>
        </div>

        {/* Badge */}
        <div className="relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-white border-4 border-gray-100 rounded-lg px-6 py-2 shadow-lg">
              <span className="text-sm font-bold text-gray-800">
                Advanced Specializations
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-12">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      </div>
    </motion.div>
  );
};

const DotsIndicator = ({ total, current, onDotClick }) => {
  return (
    <div className="flex justify-center space-x-3 mt-8">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            i === current
              ? "bg-blue-600 scale-125"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default function MicrosoftSpecializationsCarousel() {
  const specializations = [
    {
      title: "Threat Protection",
      subtitle: "Advanced Specializations",
      description:
        "Defend against cyber threats with advanced Azure safeguards.",
      icon: Shield,
    },
    {
      title: "Accelerate Developer Productivity",
      subtitle: "Advanced Specializations",
      description:
        "Boost efficiency with tools that streamline workflows on Azure.",
      icon: Presentation,
    },
    {
      title: "AI Platform on Microsoft Azure",
      subtitle: "Advanced Specializations",
      description:
        "Harness Azure's AI to drive smarter solutions effortlessly.",
      icon: Bot,
    },
    {
      title: "Build AI Apps on Microsoft Azure",
      subtitle: "Advanced Specializations",
      description: "Create intelligent apps with Azure's powerful AI tools.",
      icon: Grid3x3,
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Advanced Specializations",
      description:
        "Unlock scalable cloud solutions powered by Azure infrastructure.",
      icon: Cloud,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Responsive items calculation
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, specializations.length - itemsToShow);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsToShow, specializations.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, specializations.length - itemsToShow);
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, specializations.length - itemsToShow);
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, specializations.length - itemsToShow);
    setCurrentIndex(Math.min(index, maxIndex));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const maxDots = Math.max(1, specializations.length - itemsToShow + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Embee's Microsoft Approved Advanced Specializations
          </h1>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            These advanced specializations validate the Embee's capability to
            deliver best-in-class specialized services in complex solution areas
            with Azure.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{
                x: `-${currentIndex * (100 / itemsToShow)}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                  className="px-2"
                >
                  <SpecializationCard
                    {...spec}
                    isActive={
                      index >= currentIndex &&
                      index < currentIndex + itemsToShow
                    }
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots Indicator */}
        <DotsIndicator
          total={maxDots}
          current={currentIndex}
          onDotClick={handleDotClick}
        />

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <motion.div
            className="text-xs text-gray-500 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-green-400" : "bg-gray-400"
              } animate-pulse`}
            ></div>
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
