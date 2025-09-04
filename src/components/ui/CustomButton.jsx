// import { Link } from "react-router-dom";

// const CustomButton = ({
//   children = "Get Started",
//   to = "#",
//   className,
//   ...props
// }) => {
//   return (
//     <Link
//       to={to}
//       {...props}
//       className={`
//         relative inline-flex items-center justify-center
//         px-6 py-3 overflow-hidden font-semibold
//         text-white bg-red-600/78 rounded-lg shadow-lg
//         transition-all duration-500 ease-out
//         hover:bg-white hover:text-red-600
//         group
//         ${className}
//       `}
//     >
//       {/* Sliding Shine Effect */}
//       <span
//         className="
//           absolute inset-0 w-[200%] h-[200%]
//           bg-gradient-to-br from-white/40 to-transparent
//           -translate-x-full -translate-y-full
//           rotate-45
//           group-hover:translate-x-0 group-hover:translate-y-0
//           transition-transform duration-700 ease-in-out

//         "
//       ></span>

//       {/* Button Text */}
//       <span className="relative z-10 group-hover:text-red-600 transition-colors duration-500">
//         {children}
//       </span>
//     </Link>
//   );
// };

// export default CustomButton;

import { Link } from "react-router-dom";

const CustomButton = ({
  children = "Get Started",
  to = "#",
  className,
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className={`
        relative inline-flex items-center justify-center 
        px-6 py-3 font-semibold 
        text-white bg-red-600/80 rounded-lg shadow-lg 
        overflow-hidden
        transition-all duration-500 ease-out 
        hover:bg-white hover:text-red-600
        group
        ${className}
      `}
    >
      {/* Diagonal Shine Effect */}
      <span
        className="
          absolute inset-0 
          before:content-[''] before:absolute 
          before:w-[150%] before:h-[300%] 
          before:bg-gradient-to-br before:from-white/50 before:to-transparent
          before:-translate-x-full before:-translate-y-full
          before:rotate-45
          before:transition-transform before:duration-700 before:ease-in-out
          group-hover:before:translate-x-0 group-hover:before:translate-y-0
        "
      ></span>

      {/* Text */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-red-600">
        {children}
      </span>
    </Link>
  );
};

export default CustomButton;
