import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TrustedParteners() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="bannarTrust flex flex-col justify-around items-center my-[150px] gap-10 -z-10">
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        initial={{ opacity: 0, x: -50 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="tr flex-1"
      >
        <h1 className="font-extralight text-center lg:text-left text-[38px]">
          Trusted Partners
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        initial={{ opacity: 0, y: -50 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="mgs flex flex-1 justify-around items-center w-[400px] lg:w-[900px]"
      >
        <h1 className="text-sm lg:text-4xl font-extrabold text-[#878787] shadow-lg shadow-[#00000013] h-[90px] flex items-center px-10">
          SPC FZ . Godaddy . Shopify . Respond.io
        </h1>
      </motion.div>
    </div>
  );
}
