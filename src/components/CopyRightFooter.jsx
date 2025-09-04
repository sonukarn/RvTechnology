import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const CopyRightFooter = () => {
  return (
    <footer className="bg-[#0c1834] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <div className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          Copyright 2025 ©{" "}
          <span className="font-medium">
            RV Technologies Softwares Pvt. Ltd.
          </span>{" "}
          | All Rights Reserved
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">Let's Connect</span>
          <a
            href="#"
            className="bg-white text-[#0c1834] p-2 rounded-md shadow hover:bg-gray-200 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#"
            className="bg-white text-[#0c1834] p-2 rounded-md shadow hover:bg-gray-200 transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="bg-white text-[#0c1834] p-2 rounded-md shadow hover:bg-gray-200 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="#"
            className="bg-white text-[#0c1834] p-2 rounded-md shadow hover:bg-gray-200 transition"
          >
            <FaTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CopyRightFooter;
