import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import assetts from "../../JsData/assetts";

export default function Togglee() {
  const controls = useAnimation();
  const [open, setOpen] = useState();
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      controls.start({ x: 0, transition: { type: "spring" } });
    } else {
      controls.start({ x: -350, transition: { type: "spring" } });
    }
  }, [toggle]);

  return (
    <div className=" flex justify-center">
      {/* {open && ( */}
      <motion.div
        animate={controls}
        className="side bg-white shadow-black shadow-xl absolute left-[0]  top-0 w-[330px] h-screen flex flex-col gap-[70px] "
      >
        <div className="mt-10 pl-5 w-[70px]">
          <img src={assetts.ww} alt="" />
        </div>
        <div className="pl-5">
          <ul className="flex flex-col gap-7">
            <li className="loser border-b border-gray-300 pb-2">
              <a href="">Home</a>
            </li>
            <li className="loser border-b border-gray-300 pb-2">
              <a href="">Bussiness Setup</a>
            </li>
            <li className="loser border-b border-gray-300 pb-2">
              <a href="">Pricing</a>
            </li>
            <li className="loser border-b border-gray-300 pb-2">
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button className="contact-us ">Contact Us</button>
        </div>
      </motion.div>
      {/* )} */}

      <button onClick={toggle} className="flex justify-center items-center">
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
