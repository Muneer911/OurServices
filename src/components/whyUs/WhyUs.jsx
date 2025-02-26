import React from "react";
import assetts from "../../JsData/assets.js";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyUs() {
  const ref = useRef(null);
  //Using UseInView hook to manage exicuting the animation based on the in or out the view
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className="whyUs flex-col lg:my-[100px] flex lg:flex-row gap-0 -z-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="whyUs-left flex flex-col flex-1"
      >
        <h6 className="text-xl text-[#b64a00] flex items-center gap-2">
          <span className="bg-[#b64a00] h-[1px] w-5 flex" />
          WHY US
        </h6>
        <h2 className="my-7 text-xl md:text-4xl lg:text-6xl lg:w-[550px] font-[500]">
          Your Success, Our Experties.
        </h2>
        <p className="font-[380] text-xl leading-8">
          Cultivate Your Business Dreams with Bloom Techno, Where Expertise
          Meets Entrepreneurship, and Your Success Becomes Our Mission.
        </p>
        <ul className="text-[#826958] mt-10 text-xl space-y-2">
          <li className="flex items-center gap-4">
            {" "}
            <span>
              {" "}
              <img src={assetts.checkSign} alt="" />{" "}
            </span>{" "}
            Proven Success
          </li>
          <li className="flex items-center gap-4">
            {" "}
            <span>
              {" "}
              <img src={assetts.checkSign} alt="" />{" "}
            </span>{" "}
            Tailored Solutions
          </li>
          <li className="flex items-center gap-4">
            {" "}
            <span>
              {" "}
              <img src={assetts.checkSign} alt="" />{" "}
            </span>{" "}
            Unwavering Support
          </li>
        </ul>
      </motion.div>
      {/* The rightside is the infographical shapes hold some elements */}
      <div className="whyUs-right flex-1 grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ ease: "backInOut", duration: 2 }}
          className="lafo flex flex-col lg:flex-row lg:col-span-2 h-[100%] lg:justify-between"
        >
          <div className="dogo hidden md:flex  w-[100px] h-fit relative top-[100px]">
            <img src={assetts.shape136} alt="c" />
          </div>
          <div className="mogo border-[#ffae10] bg-[#fff3c9] border-2 rounded-tl-[44px] rounded-br-[54px] w-[330px] h-[250px] relative bottom-[20px] flex flex-col gap-4 justify-center px-14 mt-[100px]">
            <h1 className=" ">Tech Expertise</h1>
            <p>
              We harness cutting-edge technology to keep your business
              competitive and relevant.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 40 },
          }}
          transition={{ ease: "backInOut", duration: 2.5 }}
          className="hafo
        
         border-[#9650ef] bg-[#a25bfb33] border-2 rounded-tl-[54px] rounded-br-[54px] h-[230px] w-[300px] flex flex-col gap-4 justify-center px-14"
        >
          <h1 className=" ">Fast-Track to Growth</h1>
          <p>
            Get UAE residency in just 5 days, so you can focus on growing your
            business.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0.5, x: 50 },
          }}
          transition={{ ease: "easeInOut", duration: 2.3 }}
          className="chaco border-[#00bde5] bg-[#00d1ff33] border-2 rounded-bl-[54px] rounded-tr-[54px] w-[230px] h-[230px] flex flex-col lg:relative lg:left-[55px] lg:top-[240px] justify-center gap-4 px-7 "
        >
          <h1 className=" ">Simplified Setup</h1>
          <p>
            Get UAE residency in just 5 days, so you can focus on growing your
            business.
          </p>
        </motion.div>
        <div className="icons hidden lg:block h-10">
          <img
            className="relative left-[350px] bottom-[290px]"
            src={assetts.nn}
            alt=""
          />
          <img
            className=" relative size-[36px] right-[29px] bottom-[230px] "
            src={assetts.qq}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
