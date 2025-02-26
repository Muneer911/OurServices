import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import assets from "../../JsData/assets.js";
import SideNavBar from "./SideNavBar.jsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  // Handle the fixed navbar
  const handleScroll = () => {
    setScrolled(window.scrollY > 64);
  };

  // Track the screen Y-axis
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the navbar
  useEffect(() => {
    if (scrolled) {
      controls.start({ y: 20, transition: { type: "spring" } });
      setTimeout(() => {
        controls.start({ y: 0, transition: { type: "spring" } });
      }, 100);
    } else {
      controls.start({ y: 0, transition: { type: "spring" } });
    }
  }, [scrolled, controls]);

  return (
    <motion.nav
      animate={controls}
      className={`w-full border-b-[1px] border-gray-300 ${
        scrolled ? "fixed top-0 left-0 right-0 bg-white z-20" : ""
      }`}
    >
      {/* Make this div fill the whole parent */}
      <div className="w-full flex justify-between px-6 lg:px-[64px] h-[90px] items-center">
        {/* Logo */}
        <div className="w-[40px]">
          <a href="/">
            <img src={assets.ww} alt="blomLogo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex justify-evenly gap-[80px] text-[16px]">
            <li className="nav-item">
              <a href="https://bloomtechno.com/">Home</a>
            </li>
            <li className="nav-item">
              <a href="https://bloomtechno.com/business-setup" target="_blank">
                Business Setup
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" target="_blank">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a target="_blank" href="https://bloomtechno.com/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="https://bloomtechno.com/about-us-v1" target="_blank">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <button className="contactUs shadow-md shadow-slate-400">
            <a href="https://bloomtechno.com/contact">Contact Us</a>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <SideNavBar />
        </div>
      </div>
    </motion.nav>
  );
}
