import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatCard = ({ number, suffix, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group"
    >
      {/* Number Circle */}
      <motion.div
        className="relative mb-8"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-56 h-56 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center shadow-lg border border-blue-100 group-hover:shadow-xl transition-shadow duration-300">
          <motion.span
            className="text-5xl md:text-6xl font-bold text-gray-800 tracking-tight"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
            viewport={{ once: true }}
          >
            <Counter
              end={parseInt(number.replace(/\D/g, ""))}
              suffix={suffix}
            />
          </motion.span>
        </div>

        {/* Decorative ring */}
        <motion.div
          className="absolute inset-0 w-56 h-56 border-2 border-blue-200 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 0.5 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold text-gray-700 leading-relaxed max-w-xs px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default function ByTheNumbers() {
  const stats = [
    {
      number: "120",
      suffix: "K+",
      title: "Cloud Virtual Machines Deployed & Managed",
    },
    {
      number: "500",
      suffix: "K",
      title: "Active Seats on Office365",
    },
    {
      number: "150",
      suffix: "+",
      title: "Microsoft Certified Resources",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            By the Numbers
          </h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Glimpse into Our Track Record and Expertise in Implementing
            Microsoft Solutions
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              title={stat.title}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
