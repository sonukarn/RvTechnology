import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Users,
  ArrowUpRight,
  Headphones,
  GraduationCap,
  CreditCard,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Icon Container */}
      <motion.div
        className="flex justify-center mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
          <Icon size={28} className="text-blue-600" />
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

const CTAButton = () => {
  return (
    <motion.div
      className="flex justify-center mt-16"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.button
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Request a free demo</span>
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default function Microsoft365Services() {
  const services = [
    {
      icon: Settings,
      title: "Identify the Right Plan",
      description:
        "We have curated different M365 plans for different business needs. Not sure, which plan is right for you. Let us guide you.",
    },
    {
      icon: Users,
      title: "Setup & Deployment",
      description:
        "Our Microsoft experts will take care of setting up and configuring M365 solutions according to your needs and budget.",
    },
    {
      icon: ArrowUpRight,
      title: "Migration",
      description:
        "Migrate your current data and applications to Microsoft 365 securely and easily without any glitches.",
    },
    {
      icon: Headphones,
      title: "Support",
      description:
        "We provider 24*7*365 support to our customers. Don't worry our Microsoft experts are with you on every step of the journey.",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "Get low cost trainings to drive Teams adoption with guaranteed minimum 40% user adoption.",
    },
    {
      icon: CreditCard,
      title: "Billing",
      description:
        "No matter what's your preferred payment mode. We provide you different modes of payment options when you buy Microsoft 365 from us.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-5xl mx-auto">
            As a Microsoft Solutions and FastTrack partner, we offer Microsoft
            365 services at never seen before prices.
          </h1>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Create your own remote digital workspaces to scale and excel with
            Embee, the Microsoft India and South Asia Partner of the Year 2024
            for Modern Work.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Call to Action */}
        <CTAButton />

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-60 h-60 bg-indigo-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
