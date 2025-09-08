// import React from "react";
// import { motion } from "framer-motion";
// import { Users, TrendingUp, Quote } from "lucide-react";
// import Venue from "../../assets/Asset-2.png";

// const BenefitBadge = ({ icon: Icon, title, delay }) => {
//   return (
//     <motion.div
//       className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-300"
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6, delay }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
//         <Icon size={20} className="text-blue-600" />
//       </div>
//       <span className="text-gray-800 font-medium text-sm">{title}</span>
//     </motion.div>
//   );
// };

// const TestimonialCard = ({ quote, author, company, delay }) => {
//   return (
//     <motion.div
//       className="bg-gray-50 rounded-2xl p-8 relative group hover:bg-gray-100 transition-colors duration-300"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5 }}
//     >
//       {/* Quote Icon */}
//       <motion.div
//         className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
//         whileHover={{ scale: 1.1 }}
//       >
//         <Quote size={16} className="text-white" fill="currentColor" />
//       </motion.div>

//       {/* Quote Text */}
//       <p className="text-gray-700 leading-relaxed mb-6 pt-4 text-sm">{quote}</p>

//       {/* Author */}
//       <div className="border-t border-gray-200 pt-4">
//         <p className="font-semibold text-gray-900 text-sm">{author}</p>
//         <p className="text-gray-600 text-xs mt-1">{company}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default function ClientSuccessStories() {
//   const benefits = [
//     {
//       icon: Users,
//       title: "Better Collaboration and Efficiency",
//     },
//     {
//       icon: TrendingUp,
//       title: "Enhanced Productivity",
//     },
//   ];

//   return (
//     <div className="bg-white py-20 px-6">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
//             Showcasing Client Success Stories
//           </h1>
//         </motion.div>

//         {/* Main Content with Centered Layout */}
//         <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-12 space-y-12 lg:space-y-0">
//           {/* Left Column */}
//           <motion.div
//             className="flex-1 flex flex-col items-center text-center space-y-8 max-w-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             {/* Company Logo */}
//             <motion.div
//               className="mb-6"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <img
//                 src={Venue}
//                 alt="VenueImage"
//                 className="max-w-[250px] w-full object-contain"
//               />
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               className="text-gray-600 leading-relaxed text-sm text-left"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Embee Software delivered a transformative Microsoft 365
//               implementation for Venus Remedies, a pharmaceutical giant with a
//               vast global footprint, streamlining their communication and
//               collaboration infrastructure. The intervention modernized their
//               workplace, enhancing their operational efficiency and enabling
//               better collaboration across geographies. The project, executed
//               with meticulous planning and zero downtime, led to increased
//               agility within the IT team and across the organization.
//               {benefits.map((benefit, index) => (
//                 <BenefitBadge
//                   key={index}
//                   icon={benefit.icon}
//                   title={benefit.title}
//                   delay={0.4 + index * 0.2}
//                 />
//               ))}
//             </motion.p>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             className="flex-1 flex items-start justify-center max-w-lg"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <TestimonialCard
//               quote="The right tool pays for itself in weeks. You don't need people to sit and turn the handle to make it start working. Embee Software has an incredible flexibility to evolve with ever-changing space and we know that they can deliver time and time again and we can always see the audit. We have trust and faith in Embee as our technology solutions partner and advisor."
//               author="Aditya Sharda"
//               company="Venus Remedies"
//               delay={0.4}
//             />
//           </motion.div>
//         </div>

//         {/* Background Decoration */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-20 right-10 w-2 h-2 bg-blue-300 rounded-full opacity-30"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute bottom-20 left-10 w-3 h-3 bg-red-300 rounded-full opacity-20"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Quote } from "lucide-react";
import Venue from "../../assets/Asset-2.png";

const BenefitBadge = ({ icon: Icon, title, delay }) => {
  return (
    <motion.div
      className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
        <Icon size={20} className="text-blue-600" />
      </div>
      <span className="text-gray-800 font-medium text-sm">{title}</span>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, company, delay }) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-2xl p-8 relative group hover:bg-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <motion.div
        className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <Quote size={16} className="text-white" fill="currentColor" />
      </motion.div>

      {/* Quote Text */}
      <p className="text-gray-700 leading-relaxed mb-6 pt-4 text-sm">{quote}</p>

      {/* Author */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900 text-sm">{author}</p>
        <p className="text-gray-600 text-xs mt-1">{company}</p>
      </div>
    </motion.div>
  );
};

export default function ClientSuccessStories() {
  const benefits = [
    {
      icon: Users,
      title: "Better Collaboration and Efficiency",
    },
    {
      icon: TrendingUp,
      title: "Enhanced Productivity",
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Showcasing Client Success Stories
          </h1>
        </motion.div>

        {/* Main Content with Centered Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-12 space-y-12 lg:space-y-0">
          {/* Left Column */}
          <motion.div
            className="flex-1 flex flex-col items-center text-center space-y-8 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Company Logo */}
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={Venue}
                alt="VenueImage"
                className="max-w-[250px] w-full object-contain"
              />
            </motion.div>

            {/* Description and Benefits Container */}
            <motion.div
              className="text-left w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Embee Software delivered a transformative Microsoft 365
                implementation for Venus Remedies, a pharmaceutical giant with a
                vast global footprint, streamlining their communication and
                collaboration infrastructure. The intervention modernized their
                workplace, enhancing their operational efficiency and enabling
                better collaboration across geographies. The project, executed
                with meticulous planning and zero downtime, led to increased
                agility within the IT team and across the organization.
              </p>

              {/* Benefits - aligned with paragraph start */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <BenefitBadge
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    delay={0.4 + index * 0.2}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex-1 flex items-start justify-center max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              quote="The right tool pays for itself in weeks. You don't need people to sit and turn the handle to make it start working. Embee Software has an incredible flexibility to evolve with ever-changing space and we know that they can deliver time and time again and we can always see the audit. We have trust and faith in Embee as our technology solutions partner and advisor."
              author="Aditya Sharda"
              company="Venus Remedies"
              delay={0.4}
            />
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-2 h-2 bg-blue-300 rounded-full opacity-30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-3 h-3 bg-red-300 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
