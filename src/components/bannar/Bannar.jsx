import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Bannar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      initial={{ opacity: 0, y: 50 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="bannarFather flex flex-col lg:flex-row justify-evenly items-center bg-black rounded-3xl h-[300px] gap-10 mb-[100px] "
    >
      <div className="coco md:h-[70px] text-white lg:w-[450px] lg:text-left text-center h-[0px]">
        <p className=" text-[#b64a00] text-xl">Have any projects?</p>
        <h2 className="lg:text-[40px] font-bold">
          Don't hesitate to send us message.
        </h2>
      </div>
      <button className="contact-us text-white">
        <a href="/">Get Started Today!</a>
      </button>
    </motion.div>
  );
}
