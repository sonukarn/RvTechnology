// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { NAV_ITEMS } from "./NavItems";
import FancyButton from "./ui/FancyButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover dropdown index
  const [mobileAccordion, setMobileAccordion] = useState(null); // mobile submenu index

  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? window.scrollY > 20 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // helper toggles
  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    setMobileAccordion(null);
  };
  const toggleAccordion = (i) =>
    setMobileAccordion((prev) => (prev === i ? null : i));

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP INFO BAR */}
      <div className="bg-[#111835] text-slate-300 text-sm">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-center md:justify-between h-10">
          <div className="flex items-center gap-4">
            {/* left optional content, e.g. small CTA */}
            <span className="hidden md:inline">
              Delivering quality software — since 2010
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 md:gap-6">
            <a
              href="mailto:info@rvtechnologies.com"
              className="flex items-center gap-2 hover:text-white"
            >
              {/* mail icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 8.5L12 13 3 8.5"
                />
              </svg>
              <span className=" sm:inline">info@rvtechnologies.com</span>
            </a>

            <a
              href="tel:+918968519881"
              className="flex items-center gap-2 hover:text-white"
            >
              {/* phone icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2 6.5C2 4 4 2 6.5 2h3C11.71 2 13 3.29 13 4.75V7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 16.5a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 16.5V8.5"
                />
              </svg>
              <span className=" sm:inline">+91 8968519881</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        className={`w-full fixed z-30 transition-colors duration-300 ${
          scrolled
            ? "bg-[#0f2e5a] shadow-lg text-white"
            : "bg-transparent text-white"
        }`}
      >
        {/* translate-y-[-20px] */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* LEFT: LOGO */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-3">
                {/* Place your logo at public/assets/logo.png or a path you prefer */}
                <img
                  src={Logo}
                  alt="RV Technologies"
                  className="h-auto md:h-12 w-auto"
                />
              </Link>
            </div>

            {/* CENTER (desktop): MENU */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-2">
                {NAV_ITEMS.map((item, idx) => (
                  // <li
                  //   key={item.title}
                  //   className="relative group"
                  //   onMouseEnter={() => setOpenDropdown(idx)}
                  //   onMouseLeave={() => setOpenDropdown(null)}
                  // >
                  <li
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() =>
                      item.submenu && item.submenu.length > 0
                        ? setOpenDropdown(idx)
                        : setOpenDropdown(null)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className={`px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
                        scrolled
                          ? "text-white hover:text-rose-600"
                          : "text-white hover:text-rose-400"
                      }`}
                    >
                      <Link to={item.path} className="font-medium">
                        {item.title}
                      </Link>
                      {item.submenu && item.submenu.length > 0 && (
                        <svg
                          className="w-3 h-3 text-white/70"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.0-1.08z" />
                        </svg>
                      )}
                    </div>

                    {/* Dropdown panel (desktop) */}
                    {/* item.submenu && item.submenu.length > 0 */}
                    {item.submenu &&
                      item.submenu.length > 0 &&
                      (item.megaMenu ? (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-0.5 w-[900px] bg-white shadow-lg border-t-2 border-b-2 border-red-500 rounded-md transition-all duration-200 z-50 ${
                            openDropdown === idx
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                        >
                          <div className="grid grid-cols-3 gap-6 p-6">
                            {item.submenu.map((col) => (
                              <div key={col.heading}>
                                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
                                  {col.heading}
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        to={sub.path}
                                        className="flex items-center gap-2 text-sm text-slate-700 hover:bg-[#0f2e5a] hover:text-white rounded-md px-2 py-1 transition-colors"
                                      >
                                        <span className="flex items-center justify-center text-slate-500">
                                          {sub.icon}
                                        </span>{" "}
                                        {/* ✅ icon */}
                                        <span className="leading-none">
                                          {sub.title}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                {col.extra && (
                                  <>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase mt-6">
                                      {col.extra.heading}
                                    </h4>
                                    <ul className="space-y-2">
                                      {col.extra.items.map((sub) => (
                                        <li key={sub.title}>
                                          <Link
                                            to={sub.path}
                                            className="flex items-center gap-2 text-sm text-slate-700 hover:bg-[#0f2e5a] hover:text-white rounded-md px-2 py-1 transition-colors"
                                          >
                                            {sub.icon && (
                                              <span className="flex items-center justify-center text-slate-500">
                                                {sub.icon}
                                              </span>
                                            )}
                                            <span className="leading-none">
                                              {sub.title}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`absolute left-0 top-full mt-0.5  min-w-[260px] border-t-2 border-b-2 border-red-500 bg-white rounded-md shadow-lg overflow-hidden  transition-opacity duration-200 ${
                            openDropdown === idx
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                          // pointereventsnone
                          role="menu"
                          aria-hidden={openDropdown !== idx}
                        >
                          <div className="py-3 px-2">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.title}
                                to={sub.path}
                                // className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-[#0f2e5a] hover:text-white"
                              >
                                <span className="flex items-center justify-center text-slate-500">
                                  {sub.icon}
                                </span>{" "}
                                {/* ✅ icon */}
                                <span className="leading-none">
                                  {sub.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                  </li>
                ))}
              </ul>
              <FancyButton to="/contact">Contact</FancyButton>
            </div>

            {/* RIGHT: CTA + hamburger (mobile) */}
            <div className="flex items-center gap-4">
              {/* WhatsApp circular button (desktop) */}
              <a
                href="https://wa.me/918968519881"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-lg animate-pulse duration-200"
              >
                {/* whatsapp icon (simple) */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.52 3.48A11.95 11.95 0 0012.01.99C6.02.99 1.2 5.81 1.2 11.8c0 2.08.55 4.03 1.6 5.75L.25 23.6l6.31-2.07c1.68.9 3.63 1.38 5.45 1.38 5.99 0 10.81-4.82 10.81-10.81 0-3.01-1.17-5.82-3.05-7.62zM12 20.2c-1.6 0-3.16-.42-4.54-1.2l-.32-.18-3.75 1.23 1.27-3.65-.2-.36A8.92 8.92 0 013.1 11.8c0-4.92 4-8.92 8.9-8.92 4.92 0 8.92 4 8.92 8.92 0 4.9-4 8.9-8.9 8.9z" />
                </svg>
              </a>

              {/* mobile hamburger */}
              <button
                onClick={toggleMobile}
                className="md:hidden p-2 rounded-md text-slate-200 hover:bg-slate-700/60 focus:outline-none"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          className={`md:hidden fixed inset-0 z-40 transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleMobile}
            aria-hidden
          ></div>
          <div className="absolute left-0 top-0 h-full w-[320px] bg-slate-900 text-slate-100 shadow-lg p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src={Logo} alt="RV" className="h-10 w-auto" />
              </Link>
              <button onClick={toggleMobile} className="p-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item, i) => (
                  <li
                    key={item.title}
                    className="border-b border-slate-800/50 pb-2"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 block font-medium"
                      >
                        {item.title}
                      </Link>
                      {item.submenu && item.submenu.length > 0 && (
                        <button
                          onClick={() => toggleAccordion(i)}
                          aria-expanded={mobileAccordion === i}
                          className="p-2"
                        >
                          <svg
                            className={`w-4 h-4 transform transition-transform ${
                              mobileAccordion === i ? "rotate-180" : "rotate-0"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.0-1.08z" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* mobile submenu */}
                    {item.submenu && item.submenu.length > 0 && (
                      <div
                        className={`mt-2 pl-3 overflow-hidden transition-[max-height] duration-300 ${
                          mobileAccordion === i ? "" : "max-h-0"
                        }`}
                      >
                        {item.megaMenu
                          ? item.submenu.map((col) => {
                              return (
                                <div key={col.heading} className="mb-3">
                                  <h4 className="text-xs uppercase text-slate-400 font-semibold mb-1">
                                    {col.heading}
                                  </h4>
                                  {col.items.map((sub) => {
                                    return (
                                      <Link
                                        key={sub.title}
                                        to={sub.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-1 pl-2 text-sm text-slate-300"
                                      >
                                        {sub.title}
                                      </Link>
                                    );
                                  })}
                                  {col.extra && (
                                    <>
                                      <h4 className="text-xs uppercase text-slate-400 font-semibold mt-2 mb-1">
                                        {col.extra.heading}
                                      </h4>
                                      {col.extra.items.map((sub) => {
                                        return (
                                          <Link
                                            key={sub.title}
                                            to={sub.path}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-1 pl-2 text-sm text-slate-300"
                                          >
                                            {sub.title}
                                          </Link>
                                        );
                                      })}
                                    </>
                                  )}
                                </div>
                              );
                            })
                          : item.submenu.map((sub) => {
                              return (
                                <Link
                                  key={sub.title}
                                  to={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-slate-300"
                                >
                                  {sub.title}
                                </Link>
                              );
                            })}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/portfolio"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-2 rounded-full bg-rose-500 font-semibold"
                >
                  See Portfolio
                </Link>
                <a
                  href="https://wa.me/918968519881"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-4 text-center py-2 text-sm"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
