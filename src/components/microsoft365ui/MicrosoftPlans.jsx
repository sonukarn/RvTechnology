import React from "react";
import { motion } from "framer-motion";

// Import default logos
import GEP from "../../assets/GEP.webp";
import TATA from "../../assets/TATA.png";
import Fullerton from "../../assets/Fullerton-India.png";
import FCB from "../../assets/FCB-Ulka.webp";
import SBI from "../../assets/SBI-1.webp";
import Eclerx from "../../assets/E-clerex.webp";
import Indigo from "../../assets/Indigo.webp";
import Hero from "../../assets/GEP.webp";
import Corbus from "../../assets/Corbus-logo.png";
import Jsw from "../../assets/JSW-logo.webp";
import HeroFincorp from "../../assets/hero-fincorp.webp";
import Welspoon from "../../assets/Welspun.webp";
import Oil from "../../assets/Oil-India-Logo.webp";

// Import app icons
import Word from "../../assets/word-org.svg";
import Excel from "../../assets/excel-org.svg";
import PowerPoint from "../../assets/powerpoint-org.svg";
import Outlook from "../../assets/outlook-org.svg";
import ExchangeIcon from "../../assets/exchange-icon-qwom3gmju187ioga1ytz5n5yqv4mljx3qd5gf9auxk.webp";
import PublisherIcon from "../../assets/Publisher_icon-qwom3gmjw8602qzr23xwu3bds1ezyuhbwa3tmohyzw.png";
import AccessIcon from "../../assets/Access_icon-qwom3foppe4pr5147lja9ljx6njmr5dlk5gc5ejd64.webp";

// Import service icons
import Teams from "../../assets/teams-org.svg";
import OneDrive from "../../assets/Onedrive_icon-qwom3foppe4pr5147lja9ljx6njmr5dlk5gc5ejd64.png";
import SharePoint from "../../assets/SharePoint_icon-qwom3gmjw8602qzr23xwu3bds1ezyuhbwa3tmohyzw.png";
import Yammer from "../../assets/yammer-org.svg";

// Array of default logos
const DEFAULT_LOGOS = [
  { src: GEP, alt: "GEP" },
  { src: TATA, alt: "TATA" },
  { src: Fullerton, alt: "Fullerton" },
  { src: FCB, alt: "FCB AFRICA" },
  { src: SBI, alt: "SBI" },
  { src: Eclerx, alt: "eClerx" },
  { src: Corbus, alt: "Corbus" },
  { src: Jsw, alt: "JSW" },
  { src: Indigo, alt: "Indigo" },
  { src: HeroFincorp, alt: "HeroFinCorp" },
  { src: Welspoon, alt: "Welspoon" },
  { src: Oil, alt: "Oil" },
];

// Array of plan objects
const plans = [
  {
    title: "MICROSOFT 365 BUSINESS BASIC",
    oldPrice: "₹145.00",
    price: "₹123",
    subtitle: "/User/Month annual commitment",
    features: [
      "Start with web and mobile apps",
      "Chat, call, meet up to 300 attendees",
      "Web and mobile versions of Office apps",
      "1 TB of cloud storage per user",
      "Business-class email",
      "Standard security",
      "Anytime phone and web support",
    ],
    apps: [Word, Excel, PowerPoint, Outlook],
    services: [Teams, OneDrive, SharePoint, Yammer],
  },
  {
    title: "MICROSOFT 365 BUSINESS STANDARD",
    oldPrice: "₹720.00",
    price: "₹654",
    subtitle: "/User/Month annual commitment",
    features: [
      "Everything in Business Basic, plus",
      "Desktop versions of Office apps with premium features",
      "Easily host webinars",
      "Attendee registration & reporting tools",
      "Manage customer appointments",
    ],
    apps: [Word, Excel, PowerPoint, Outlook, PublisherIcon, AccessIcon],
    services: [Teams, OneDrive, SharePoint, Yammer],
  },
  {
    title: "MICROSOFT 365 BUSINESS PREMIUM",
    oldPrice: "₹1830.00",
    price: "₹1555",
    subtitle: "/User/Month annual commitment",
    features: [
      "Everything in Business Standard, plus",
      "Advanced security",
      "Access and data control",
      "Cyberthreat protection",
    ],
    apps: [Word, Excel, PowerPoint, Outlook, PublisherIcon, AccessIcon],
    services: [Teams, OneDrive, SharePoint, Yammer],
  },
  {
    title: "MICROSOFT 365 APPS FOR BUSINESS",
    oldPrice: "₹685.00",
    price: "₹582",
    subtitle: "/User/Month annual commitment",
    features: [
      "Excludes chat, email, meetings",
      "Desktop versions of Office apps only",
      "1 TB of cloud storage per user",
      "Standard security",
      "Anytime phone/web support",
    ],
    apps: [Word, Excel, PowerPoint, Outlook, PublisherIcon, AccessIcon],
    services: [OneDrive],
  },
];

// Animation variants
const listVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};
const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function MicrosoftPlans({ logos = DEFAULT_LOGOS }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* TOP: left text + right logos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Transforming 2500+ <span className="block">Organizations</span>
            </h2>
            <p className="text-gray-600 mt-3 text-2xl md:text-3xl">
              With 1500+ decade long engagements
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-block bg-blue-900 text-white px-8 py-4 rounded-full text-md shadow hover:bg-red-700"
            >
              Talk to our Experts Now
            </motion.button>
          </motion.div>

          <motion.div
            className="md:col-span-8"
            initial="hidden"
            animate="show"
            variants={listVariant}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
              {logos.map((l, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center p-2"
                  variants={itemVariant}
                >
                  <img
                    src={l.src}
                    alt={l.alt || `logo-${i}`}
                    className="h-12 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CENTER HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Microsoft 365 Plans at Discounted Price
          </h2>
          <p className="text-md text-gray-500 mt-2">
            (Minimum purchase of 50 licenses is required)
          </p>
        </div>

        {/* PRICING CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={listVariant}
        >
          {plans.map((p, idx) => {
            const gradients = [
              "bg-gradient-to-br from-blue-50 to-blue-100",
              "bg-gradient-to-br from-green-50 to-green-100",
              "bg-gradient-to-br from-purple-50 to-purple-100",
              "bg-gradient-to-br from-pink-50 to-pink-100",
              "bg-gradient-to-br from-yellow-50 to-yellow-100",
              "bg-gradient-to-br from-indigo-50 to-indigo-100",
            ];

            return (
              <motion.div
                key={idx}
                className={`rounded-lg shadow border border-gray-200 p-6 flex flex-col ${
                  gradients[idx % gradients.length]
                }`}
                variants={itemVariant}
              >
                {/* Title */}
                <h4 className="text-md text-center font-bold text-gray-800 uppercase mb-2">
                  {p.title}
                </h4>

                {/* Old price */}
                <p className="text-md text-gray-500 mt-2">
                  Microsoft Offers{" "}
                  <span className="line-through">{p.oldPrice}</span>
                </p>

                {/* New Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-blue-900">
                    {p.price}
                  </span>
                  <span className="text-sm text-gray-600">/User/Month</span>
                </div>
                <p className="text-xs text-gray-600 mb-4">{p.subtitle}</p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mb-6 bg-blue-900 text-white rounded-full py-2 px-4 text-sm"
                >
                  Enquire Now
                </motion.button>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Office Apps Included */}
                {p.apps?.length > 0 && (
                  <div className="mb-4">
                    {/* Divider line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    <h5 className="font-semibold text-sm text-gray-800 mb-2">
                      Office Apps Included
                    </h5>
                    <div
                      className={`grid gap-1  ${
                        idx === 0 ? "grid-cols-4" : "grid-cols-3"
                      } `}
                    >
                      {p.apps.map((app, i) => (
                        <img
                          key={i}
                          src={app}
                          alt={`app-${i}`}
                          className="h-8 w-8 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Included */}
                {p.services?.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-sm text-gray-800 mb-2">
                      Services Included
                    </h5>
                    <div className="flex gap-2 flex-wrap">
                      {p.services.map((srv, i) => (
                        <img
                          key={i}
                          src={srv}
                          alt={`srv-${i}`}
                          className="h-6 w-6 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-8 text-left">
          *Annual commitment & GST extra as applicable
        </p>
        <p className="text-xs text-gray-500 mt-2 text-left">
          *Annual commitment & GST extra as applicable
        </p>
      </div>
    </section>
  );
}
