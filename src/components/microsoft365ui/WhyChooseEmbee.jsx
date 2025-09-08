// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import whyChoseImg from '../../assets/Why-Choose-Embee_.jpg'
// const CollapsibleItem = ({
//   title,
//   content,
//   isOpen,
//   onToggle,
//   isFirst = false,
// }) => {
//   return (
//     <motion.div
//       className="border-b border-gray-200 last:border-b-0"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <button
//         onClick={onToggle}
//         className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors duration-200 px-1"
//       >
//         <span
//           className={`font-semibold text-gray-900 ${
//             isFirst ? "text-lg" : "text-base"
//           }`}
//         >
//           {title}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 90 : 0 }}
//           transition={{ duration: 0.2 }}
//           className="flex-shrink-0 ml-4"
//         >
//           {isOpen ? (
//             <ChevronDown size={20} className="text-gray-600" />
//           ) : (
//             <ChevronRight size={20} className="text-gray-600" />
//           )}
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <div className="pb-4 px-1">
//               <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const WhyChooseEmbee = () => {
//   const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

//   const toggleItem = (index) => {
//     setOpenItems((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const accordionItems = [
//     {
//       title: "Deep-rooted Expertise",
//       content:
//         "With over 35+ years of industry experience, Embee has honed its skills to perfection, ensuring that clients receive top-notch IT solutions tailored to their unique needs.",
//     },
//     {
//       title: "Customer-Centric Approach",
//       content:
//         "We prioritize our clients' success above all else, delivering customized solutions that align perfectly with their business objectives and drive measurable results.",
//     },
//     {
//       title: "Pan-India Presence",
//       content:
//         "Our extensive network across India ensures comprehensive support and service delivery, enabling us to serve clients effectively regardless of their geographical location.",
//     },
//     {
//       title: "Project Excellence",
//       content:
//         "We maintain the highest standards of project delivery through rigorous quality processes, ensuring every project meets expectations and delivers exceptional value.",
//     },
//     {
//       title: "Digital Transformation Leader",
//       content:
//         "As a pioneer in digital transformation, we help organizations modernize their operations, embrace new technologies, and stay ahead in the competitive landscape.",
//     },
//     {
//       title: "Accolades and Recognition",
//       content:
//         "Our commitment to excellence has been recognized through numerous industry awards and certifications, validating our expertise and trustworthiness as a technology partner.",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
//           {/* Left Content - Accordion */}
//           <motion.div
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* Header */}
//             <motion.div
//               className="mb-8"
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 Why Choose Embee
//               </h1>
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Embee stands as a beacon of excellence in the realm of IT
//                 solutions, with a rich legacy that spans over three decades.
//                 Here's why Embee should be your go-to solutions provider:
//               </p>
//             </motion.div>

//             {/* Accordion Items */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//               {accordionItems.map((item, index) => (
//                 <CollapsibleItem
//                   key={index}
//                   title={item.title}
//                   content={item.content}
//                   isOpen={openItems[index] || false}
//                   onToggle={() => toggleItem(index)}
//                   isFirst={index === 0}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Content - Image */}
//           <motion.div
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative">
//               <motion.div
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Business Growth Illustration */}
//                 <div className="relative h-80 lg:h-96 flex items-center justify-center p-8">
//                   {/* Background Grid Pattern */}
//                   <div className="absolute inset-0 opacity-10">
//                     <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
//                       {Array.from({ length: 96 }).map((_, i) => (
//                         <div key={i} className="border border-gray-400"></div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Growth Bars */}
//                   <div className="relative flex items-end justify-center space-x-4 h-48">
//                     {[40, 60, 80, 100, 120].map((height, index) => (
//                       <motion.div
//                         key={index}
//                         className="bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-lg opacity-80"
//                         style={{ width: "40px", height: `${height}px` }}
//                         initial={{ height: 0 }}
//                         whileInView={{ height: `${height}px` }}
//                         transition={{ duration: 0.8, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                       />
//                     ))}
//                   </div>

//                   {/* Business Person Silhouette */}
//                   <motion.div
//                     className="absolute right-8 bottom-8"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, delay: 0.5 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="w-16 h-16 bg-gray-900 rounded-full relative">
//                       {/* Simple silhouette representation */}
//                       <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
//                       <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-900 rounded-t-full"></div>
//                     </div>
//                   </motion.div>

//                   {/* Growth Arrow */}
//                   <motion.div
//                     className="absolute top-8 left-8 right-8"
//                     initial={{ pathLength: 0 }}
//                     whileInView={{ pathLength: 1 }}
//                     transition={{ duration: 1.2, delay: 0.3 }}
//                     viewport={{ once: true }}
//                   >
//                     <svg viewBox="0 0 300 100" className="w-full h-16">
//                       <motion.path
//                         d="M 20 80 Q 150 20 280 40"
//                         stroke="#60A5FA"
//                         strokeWidth="3"
//                         fill="none"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         whileInView={{ pathLength: 1 }}
//                         transition={{ duration: 1.2, delay: 0.3 }}
//                       />
//                       <motion.polygon
//                         points="280,40 270,35 270,45"
//                         fill="#60A5FA"
//                         initial={{ scale: 0 }}
//                         whileInView={{ scale: 1 }}
//                         transition={{ duration: 0.3, delay: 1.5 }}
//                       />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseEmbee;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import whychoseimg from "../../assets/Why-Choose-Embee_.jpg";
const CollapsibleItem = ({
  title,
  content,
  isOpen,
  onToggle,
  isFirst = false,
}) => {
  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors duration-200 px-1"
      >
        <span
          className={`font-semibold text-gray-900 ${
            isFirst ? "text-lg" : "text-base"
          }`}
        >
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <ChevronDown size={20} className="text-gray-600" />
          ) : (
            <ChevronRight size={20} className="text-gray-600" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-1">
              <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WhyChooseEmbee = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const accordionItems = [
    {
      title: "Deep-rooted Expertise",
      content:
        "With over 35+ years of industry experience, Embee has honed its skills to perfection, ensuring that clients receive top-notch IT solutions tailored to their unique needs.",
    },
    {
      title: "Customer-Centric Approach",
      content:
        "We prioritize our clients' success above all else, delivering customized solutions that align perfectly with their business objectives and drive measurable results.",
    },
    {
      title: "Pan-India Presence",
      content:
        "Our extensive network across India ensures comprehensive support and service delivery, enabling us to serve clients effectively regardless of their geographical location.",
    },
    {
      title: "Project Excellence",
      content:
        "We maintain the highest standards of project delivery through rigorous quality processes, ensuring every project meets expectations and delivers exceptional value.",
    },
    {
      title: "Digital Transformation Leader",
      content:
        "As a pioneer in digital transformation, we help organizations modernize their operations, embrace new technologies, and stay ahead in the competitive landscape.",
    },
    {
      title: "Accolades and Recognition",
      content:
        "Our commitment to excellence has been recognized through numerous industry awards and certifications, validating our expertise and trustworthiness as a technology partner.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start px-8">
          {/* Left Content - Accordion */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Embee
              </h1>
              <p className="text-gray-700 text-base leading-relaxed">
                Embee stands as a beacon of excellence in the realm of IT
                solutions, with a rich legacy that spans over three decades.
                Here's why Embee should be your go-to solutions provider:
              </p>
            </motion.div>

            {/* Accordion Items */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {accordionItems.map((item, index) => (
                <CollapsibleItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openItems[index] || false}
                  onToggle={() => toggleItem(index)}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={whychoseimg} // Replace with your actual image path
                  alt="Why Choose Embee - Business Growth"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEmbee;
