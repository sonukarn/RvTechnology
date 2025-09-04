// import React from "react";

// export default function FancyButton({
//   children = "Get Started",
//   className = "",
//   ...props
// }) {
//   return (
//     <button className={`rv-btn ${className}`} {...props}>
//       <span className="rv-btn-label">{children}</span>
//     </button>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const FancyButton = ({
  children = "Get Started",
  to = "/",
  className,
  ...props
}) => {
  return (
    <Link to={to} className={`common-btn inline-block ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default FancyButton;
