// import React from "react";
// import bgImage from "../../assets/Component-293-–-2.webp";
// import microsoftlogo from "../../assets/Microsoft_logo_2012.svg.png";

// const Header = () => {
//   return (
//     <div>
//       <div className=" h-[15%] w-full overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-[18%] bg-[#020f2f]/70 z-10"></div>
//       </div>
//       <div
//         className="relative z-20 mt-[6.5rem] flex justify-between items-center px-4 py-3"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div>
//           <img src="" alt="Logo comes" />
//         </div>
//         <div>
//           <img src={microsoftlogo} alt="Logo comes" />
//         </div>
//         <div>
//           <span>+844706744</span>
//           <span>s.sonukarn.1997@gmail.com</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import bgImage from "../../assets/Component-293-–-2.webp";
// import microsoftlogo from "../../assets/Microsoft_logo_2012.svg.png";

// const Header = () => {
//   return (
//     <div
//       className=" h-[10%] w-full overflow-hidden"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="flex justify-around items-center px-4 py-3">
//         <div>
//           <img src="" alt="Logo comes" />
//         </div>
//         <div>
//           <img src={microsoftlogo} alt="Logo comes" />
//         </div>
//         <div>
//           <span>+844706744</span>
//           <span>s.sonukarn.1997@gmail.com</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Mail, Phone } from "lucide-react";
import bgImage from "../../assets/Component-293-–-2.webp";
import logo from "../../assets/logo.png";
import microsoftlogo from "../../assets/Microsoft_logo_2012.svg.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="
          flex flex-col md:flex-row 
          justify-around items-center
          px-4 py-6 gap-3 md:gap-0
          text-gray-600 
        "
      >
        {/* Left Logo */}
        <div onClick={() => navigate} className="flex-shrink-0">
          <img
            src={logo} // Replace with actual logo
            alt="Logo"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Microsoft Logo Center */}
        <div className="flex-shrink-0">
          <img
            src={microsoftlogo}
            alt="Microsoft Logo"
            className="h-8 md:h-12 object-contain"
          />
        </div>

        {/* Contact Info Right */}
        <div className="flex flex-col sm:flex-row sm:gap-4 text-sm md:text-base text-center md:text-right">
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <Mail size={20} className="text-blue-600" />
            <span>s.sonukarn.1997@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <Phone size={20} className="text-blue-600" />
            <span>4443344544645</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
