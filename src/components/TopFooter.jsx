import React from "react";
import { FaStar } from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
      {/* Partner Logos */}
      <div className="flex flex-wrap items-center gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google.png/320px-Google.png"
          alt="Google Partner"
          className="h-8 object-contain"
        />
        <img
          src="https://www.nasscom.in/sites/default/files/NASSCOM%20LOGO.png"
          alt="Nasscom Member"
          className="h-8 object-contain"
        />
        <img
          src="https://cdn.shopify.com/static/shopify-favicon.png"
          alt="Shopify Partner"
          className="h-8 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are an award-winning, web and mobile app development company.
              With over 120+ full-time experts across gaming, mobile and web
              development, and digital marketing, we empower your business with
              our comprehensive, customized solutions.
            </p>

            {/* Reviews */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <span className="text-gray-600 text-sm">56 Reviews</span>
              </div>
              <p className="text-sm text-gray-600">
                ⭐ 5.0 out of 5.0 by 4585 clients on over 6000+ projects
              </p>
            </div>
          </div>

          {/* Associate Member */}
          <div className="flex flex-wrap items-center gap-6">
            <img
              src="https://www.nasscom.in/sites/default/files/NASSCOM%20LOGO.png"
              alt="Nasscom"
              className="h-8 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/TIE_logo.png"
              alt="TiE Chandigarh"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>AI Development</li>
              <li>Mobile Development</li>
              <li>Web Development</li>
              <li>Game Development</li>
              <li>MVP Development</li>
              <li>Hire Developers</li>
              <li>E-commerce Development</li>
              <li>CMS Development</li>
              <li>Metaverse Development</li>
              <li>Digital Marketing Services</li>
              <li>Software Testing</li>
              <li>Indian App Developers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Work</li>
              <li>Delivery Process</li>
              <li>Customer Testimonials</li>
              <li>About Us</li>
              <li>Design Portfolio</li>
              <li>Careers</li>
              <li>Life @ RV Technologies</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>GDPR Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
