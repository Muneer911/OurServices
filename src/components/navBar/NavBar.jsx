import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import assetts from "../../JsData/assetts.js";
import SideNavBar from "./SideNavBar.jsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  // Handle the fixed navbar
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // To track the screen Y axis
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({ y: 20, transition: { type: "spring" } });
      setTimeout(() => {
        controls.start({ y: 0, transition: { type: "spring" } });
      }, [100]);
    } else {
      controls.start({ y: 0, transition: { type: "spring" } });
    }
  }, [scrolled]);

  return (
    <motion.nav
      animate={controls}
      className={`flex items-center border-b-[1px] border-gray-300 ${
        scrolled ? "fixed top-0 left-0 right-0 bg-white z-20" : ""
      }`}
    >
      <div className="momva flex justify-between px-[50px] h-[90px] items-center w-full">
        <div className="logo w-[40px]">
          <a href="/">
            <img src={assetts.ww} alt="logo" />
          </a>
        </div>
        <div className="links hidden lg:flex">
          <ul className="flex justify-evenly gap-[80px] text-[16px]">
            <li className="home loser">
              <a href="/">home</a>
            </li>
            <li className="home loser">
              <a href="/">Business</a>
            </li>
            <li className="home loser transition-all">
              <a href="/">Services</a>
            </li>
            <li className="home loser">
              <a href="/">Pricing</a>
            </li>
            <li className="home loser">
              <a href="/">About us</a>
            </li>
          </ul>
        </div>
        <div className="button hidden lg:block">
          <button className="contact-us shadow-slate-400 shadow-md">
            Contact us
          </button>
        </div>
        <div className="lg:hidden">
          <SideNavBar />
        </div>
      </div>
    </motion.nav>
  );
}
