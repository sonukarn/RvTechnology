// import React from "react";
// import { motion } from "framer-motion";
// import { Award, Star, Trophy } from "lucide-react";

// const AwardBadge = ({ title, subtitle, year, colors, icon: Icon, delay }) => {
//   return (
//     <motion.div
//       className={`relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${colors} group`}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5, scale: 1.02 }}
//     >
//       {/* Award Icon */}
//       <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//         <Icon size={20} className="text-yellow-600" />
//       </div>

//       {/* Microsoft Logo Placeholder */}
//       <div className="flex items-center mb-4">
//         <div className="w-8 h-8 grid grid-cols-2 gap-1">
//           <div className="bg-red-500 rounded-sm"></div>
//           <div className="bg-green-500 rounded-sm"></div>
//           <div className="bg-blue-500 rounded-sm"></div>
//           <div className="bg-yellow-500 rounded-sm"></div>
//         </div>
//         <span className="ml-2 text-sm font-medium text-gray-700">
//           Microsoft
//         </span>
//       </div>

//       {/* Winner Badge */}
//       <div className="inline-block bg-white bg-opacity-90 rounded-full px-3 py-1 mb-3">
//         <span className="text-sm font-semibold text-gray-800">Winner</span>
//       </div>

//       {/* Title */}
//       <h3 className="text-white font-bold text-lg leading-tight mb-2">
//         {title}
//       </h3>

//       {/* Subtitle */}
//       <p className="text-white text-opacity-90 text-sm mb-3">{subtitle}</p>

//       {/* Year */}
//       <div className="text-white text-opacity-80 text-xs font-medium">
//         {year}
//       </div>
//     </motion.div>
//   );
// };

// const EmbeeMicrosoftAwards = () => {
//   const awards = [
//     {
//       title:
//         "2024 Microsoft India & South Asia Partner of the Year - Modern Work",
//       subtitle: "Recognized for excellence in Modern Work solutions",
//       year: "2024",
//       colors: "bg-gradient-to-br from-blue-600 to-blue-800",
//       icon: Trophy,
//       delay: 0.1,
//     },
//     {
//       title: "Microsoft India Area Award MWP Partner of the Year - 2022",
//       subtitle: "Outstanding performance in Microsoft Workplace solutions",
//       year: "2022",
//       colors: "bg-gradient-to-br from-purple-600 to-purple-800",
//       icon: Award,
//       delay: 0.2,
//     },
//     {
//       title: "Cloud Innovation Partner of the year Azure and MWS",
//       subtitle: "Excellence in Azure and Modern Workplace Services",
//       year: "India Area Award 2021",
//       colors: "bg-gradient-to-br from-indigo-600 to-indigo-800",
//       icon: Star,
//       delay: 0.3,
//     },
//     {
//       title: "Azure AppHack First Runner up 2021",
//       subtitle: "Innovation in Azure application development",
//       year: "2021",
//       colors: "bg-gradient-to-br from-green-600 to-green-800",
//       icon: Trophy,
//       delay: 0.4,
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
//           {/* Left Content */}
//           <motion.div
//             className="lg:w-1/3 text-center lg:text-left"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.h1
//               className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               Embee +<span className="block text-blue-600">Microsoft</span>
//             </motion.h1>

//             <motion.p
//               className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               Empowering innovations together for a seamless digital future
//             </motion.p>
//           </motion.div>

//           {/* Right Content - Awards Grid */}
//           <div className="lg:w-2/3">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {awards.map((award, index) => (
//                 <AwardBadge
//                   key={index}
//                   title={award.title}
//                   subtitle={award.subtitle}
//                   year={award.year}
//                   colors={award.colors}
//                   icon={award.icon}
//                   delay={award.delay}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-20 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-20"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30"
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1.5,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmbeeMicrosoftAwards;

import React from "react";
import { motion } from "framer-motion";
import MicrosoftAwards from "../../assets/2024-Microsoft-India-award.webp";
import Wslid2 from "../../assets/wslide2.webp";
import MicrosoftCloud from "../../assets/microsoft-Cloud-Innovation-Partner-2021-1-1.webp";
import MicrosoftAzure from "../../assets/microsoft-azure-AppHack-2021-1.webp";
const AwardCard = ({ imageSrc, alt, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

const EmbeeMicrosoftAwards = () => {
  // Placeholder images - replace with your actual award images
  const awards = [
    {
      imageSrc: MicrosoftAwards,
      alt: "2024 Microsoft India Partner Award",
      delay: 0.1,
    },
    {
      imageSrc: Wslid2,
      alt: "Microsoft India Area Award 2022",
      delay: 0.2,
    },
    {
      imageSrc: MicrosoftCloud,
      alt: "Cloud Innovation Partner Award 2021",
      delay: 0.3,
    },
    {
      imageSrc: MicrosoftAzure,
      alt: "Azure AppHack First Runner up 2021",
      delay: 0.4,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Container with Background and Rounded Corners */}
        <motion.div
          className="rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(90deg, #e6f9f2 0%, #eae6f9 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/3 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Embee +
                <span className="block text-blue-600 mt-1">Microsoft</span>
              </motion.h1>

              <motion.p
                className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Empowering innovations together for a seamless digital future
              </motion.p>
            </motion.div>

            {/* Right Content - Small Award Cards Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {awards.map((award, index) => (
                  <div key={index} className="h-24 sm:h-28 lg:h-32">
                    <AwardCard
                      imageSrc={award.imageSrc}
                      alt={award.alt}
                      delay={award.delay}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmbeeMicrosoftAwards;
