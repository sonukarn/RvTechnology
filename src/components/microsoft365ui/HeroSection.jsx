import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/priya.png"; // Replace with your background image

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[80vh]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Buy Microsoft 365 – <br />
            Power Your Work <br />
            with the Best <br />
            Productivity Suite!
          </h1>

          {/* Yellow underline */}
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

          {/* Subtext */}
          <p className="text-gray-200 text-base md:text-lg mb-8">
            Get the best subscription plans tailored to your needs. Buy
            Microsoft 365 online hassle-free.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition"
            >
              Buy Microsoft 365 Now!
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition"
            >
              View Plans
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/priya.png"; // Replace with your background image
// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white min-h-[95vh] flex items-center"
//       style={{
//         backgroundImage: `url(${bgImage})`, // Replace with your background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl"
//         >
//           <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
//             Buy Microsoft 365 – <br />
//             Power Your Work <br />
//             with the Best Productivity Suite!
//           </h1>

//           {/* Yellow underline */}
//           <div className="w-16 h-1 bg-yellow-400 mt-6 mb-4"></div>

//           <p className="text-gray-200 mb-8">
//             Get the best subscription plans tailored to your needs. Buy
//             Microsoft 365 online hassle-free.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow-lg"
//             >
//               Buy Microsoft 365 Now!
//             </motion.a>
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow-lg"
//             >
//               View Plans
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
