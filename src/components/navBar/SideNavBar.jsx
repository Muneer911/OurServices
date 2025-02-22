import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import assetts from "../../JsData/assets";

export default function SideNavBar() {
  const controls = useAnimation();
  const [open, setOpen] = useState();
  // toggle the side navbar
  const toggle = () => {
    setOpen(!open);
  };
  // animate the side navbar
  useEffect(() => {
    if (open) {
      controls.start({ x: 0, transition: { type: "spring" } });
    } else {
      controls.start({ x: -350, transition: { type: "spring" } });
    }
  }, [toggle]);

  return (
    <div className="sideNavBarContainer flex justify-center">
      <motion.div
        animate={controls}
        className="sideNavBarContent bg-white shadow-black shadow-xl absolute left-[0]  top-0 w-[330px] h-screen flex flex-col gap-[70px] "
      >
        <div className="bloomLogo mt-10 pl-5 w-[70px]">
          <img src={assetts.ww} alt="" />
        </div>
        <div className="sideNavBarItems pl-5">
          <ul className="itemsList flex flex-col gap-7">
            <li className="nav-item border-b border-gray-300 pb-2">
              <a href="/Home">Home</a>
            </li>
            <li className="nav-item border-b border-gray-300 pb-2">
              <a href="/business">Bussiness</a>
            </li>
            <li className="nav-item">
              <a href="/services">Services</a>
            </li>
            <li className="nav-item border-b border-gray-300 pb-2">
              <a href="/Pricing">Pricing</a>
            </li>
            <li className="nav-item border-b border-gray-300 pb-2">
              <a href="/About-us">About Us</a>
            </li>
          </ul>
        </div>
        <div className="contactUsButton flex justify-center items-center">
          <button className="contactUs">Contact Us</button>
        </div>
      </motion.div>

      <button
        onClick={toggle}
        className="sideNavBarButton flex justify-center items-center"
      >
        <motion.img
          transition={{ type: "easeInOut" }}
          animate={{ rotate: open ? 180 : 0 }}
          src={open ? assetts.iconsClose : assetts.iconsmMenu}
          alt=""
        />
      </button>
    </div>
  );
}
