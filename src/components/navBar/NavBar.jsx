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
      className={`nav flex items-center border-b-[1px] border-gray-300 ${
        scrolled ? "fixed top-0 left-0 right-0 bg-white z-20" : ""
      }`}
    >
      <div className="container flex justify-between px-[50px] h-[90px] items-center w-full">
        <div className="bloomLogo w-[40px]">
          <a href="/">
            <img src={assets.ww} alt="blomLogo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navLinks hidden lg:flex">
          <ul className="navItem flex justify-evenly gap-[80px] text-[16px]">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/business">Business</a>
            </li>
            <li className="nav-item">
              <a href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="contactUsButton hidden lg:block">
          <button className="contactUs shadow-slate-400 shadow-md">
            Contact Us
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="sideNavBar lg:hidden">
          <SideNavBar />
        </div>
      </div>
    </motion.nav>
  );
}
