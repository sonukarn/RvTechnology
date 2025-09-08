import React from "react";
import { motion } from "framer-motion";

export default function EnterpriseCTA() {
  return (
    <section className="py-12 px-6">
      <div
        className="max-w-5xl mx-auto text-center rounded-2xl shadow-sm px-8 py-12"
        style={{
          background: "linear-gradient(90deg, #e6f9f2 0%, #eae6f9 100%)",
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Explore Microsoft 365 for Enterprises
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Interested in how Microsoft 365 can transform your enterprise? Our
          Microsoft certified experts are here to help! Schedule a complimentary
          consulting call to learn more about our Microsoft 365 for Enterprise
          plans and find the perfect fit plan for your organization’s needs.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full shadow-md"
        >
          Schedule Your Free Consultation
        </motion.button>
      </div>
    </section>
  );
}
