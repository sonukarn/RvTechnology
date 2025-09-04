import React from "react";
import FancyButton from "./ui/FancyButton";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaSwift,
  FaLaravel,
  FaPython,
  FaAngular,
  FaUnity,
  FaHtml5,
  FaDrupal,
  FaUsers,
  FaGamepad,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";
import { SiFlutter, SiRubyonrails, SiTypescript } from "react-icons/si";

const TechPill = ({ icon }) => (
  <div className="h-12 w-12 flex items-center justify-center  rounded-full ring-1 ring-gray-300 text-3xl text-gray-700">
    {icon}
  </div>
);

const ServiceItem = ({ icon, title, description, href, tech = [] }) => (
  <article className="py-12 pr-14">
    <div className="flex items-start gap-5">
      <div className="h-12 w-12 text-rose-500">{icon}</div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
          {description}
        </p>
        <a
          href={href}
          className="mt-4 inline-block font-semibold text-rose-500 hover:text-rose-600"
        >
          Learn more..
        </a>
      </div>
    </div>
    {tech.length > 0 && (
      <div className="mt-8 flex flex-wrap  gap-3 max-w-xl">
        {tech.map((icon, idx) => (
          <TechPill key={idx} icon={icon} />
        ))}
      </div>
    )}
  </article>
);

const services = [
  {
    col: 0,
    icon: <FaMobileAlt size={48} />,
    title: "Mobile Development",
    description:
      "Mobile apps built to achieve your business goals. We handle design through development with native iOS and Android or cross-platform frameworks like Flutter and React Native, plus follow-up support.",
    href: "#",
    tech: [<FaApple />, <FaAndroid />, <FaReact />, <SiFlutter />, <FaSwift />],
  },
  {
    col: 1,
    icon: <FaGlobe size={48} />,
    title: "Web Development",
    description:
      "Future-ready, cross-device web apps backed by top engineers using Laravel, Python, React, and TypeScript to fuel performance and growth.",
    href: "#",
    tech: [
      <FaAngular />,
      <FaLaravel />,
      <FaPython />,
      <SiRubyonrails />,
      <FaDrupal />,
    ],
  },
  {
    col: 0,
    icon: <FaGamepad size={48} />,
    title: "Game Development",
    description:
      "End-to-end mobile game development—from concept to addictive 2D/3D gameplay—using Unity and modern toolchains.",
    href: "#",
    tech: [<FaUnity />, <FaHtml5 />, <FaGamepad />, <FaApple />, <FaAndroid />],
  },
  {
    col: 1,
    icon: <FaUsers size={48} />,
    title: "Hire Developers",
    description:
      "Scale your team with dedicated developers—analysts, designers, creators, and innovators—ready to ship and accelerate your roadmap.",
    href: "#",
    tech: [
      <FaReact />,
      <FaAngular />,
      <SiFlutter />,
      <FaPython />,
      <FaLaravel />,
    ],
  },
];

export default function ServiceSection() {
  const leftCol = services.filter((s) => s.col === 0);
  const rightCol = services.filter((s) => s.col === 1);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-slate-900 leading-tight">
          Services designed to{" "}
          <span className="text-rose-500">launch you as a market leader</span>
        </h2>

        {/* Two column grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:divide-x lg:divide-gray-200">
          <div className="lg:pr-12">
            {leftCol.map((s) => (
              <ServiceItem key={s.title} {...s} />
            ))}
          </div>
          <div className="lg:pl-12">
            {rightCol.map((s) => (
              <ServiceItem key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <FancyButton>Explore Services</FancyButton>
        </div>
      </div>
    </section>
  );
}
