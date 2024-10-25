import React, { useState } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import Sholder from "./Sholder";
import Services from "./Services";

export default function Header() {
  const [focusedItem, setFocusedItem] = useState();

  const handleFocus = (item) => {
    setFocusedItem(item);
  };

  return (
    <div className="Container flex flex-col mt-[80px]">
      <div className="secUp flex justify-between my-[30px]">
        <div className="secUp-left flex-1">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="secUp-left-title italic mb-6 text-[#b64a00] flex items-center gap-2 text-lg"
          >
            <span className="bg-[#b64a00] h-[1px] w-5 flex" /> Our Services
          </motion.h2>
          <h1 className="secUp-left-subTitle md:text-6xl text-4xl font-[600]">
            Our Provided Services.
          </h1>
        </div>
        <div className="secUp-right hidden lg:flex flex-1  justify-end text-center ">
          <svg
            width="208"
            height="135"
            viewBox="0 0 208 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[200px]"
          >
            <path
              d="M19.6169 123.14C20.6463 111.277 28.7172 99.0992 41.9266 98.1642C52.0374 97.4485 62.4739 103.318 70.0563 109.121C71.3076 110.079 81.3446 118.298 74.8228 120.23C62.8974 123.762 54.0203 114.599 51.1104 103.871C46.7868 87.9309 52.6539 72.2188 64.534 61.0524C79.2715 47.2 104.532 34.7079 124.263 44.6478C133.463 49.2827 137.955 55.5734 140.534 65.2943C142.588 73.033 143.675 82.7185 137.146 89.0235C126.402 99.4 113.619 89.2013 108.019 78.9243C96.6719 58.0998 105.645 29.1356 126.578 18.2184C144.94 8.64251 166.135 5.38629 186.563 4.11791"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="secDown grid md:grid-cols-2 lg:grid-cols-3 my-20 gap-[40px] "
      >
        {/* Mapping over the Sholder {Services object} to render them*/}
        {Sholder.map((item) => (
          <Services
            key={item.id}
            item={item.name}
            desc={item.desc}
            onFocus={handleFocus}
          />
        ))}
      </motion.div>
    </div>
  );
}
