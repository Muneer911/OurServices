import React, { Children, useState } from "react";
import assetts from "../../JsData/assetts";
import { motion } from "framer-motion";
export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="py-9"
      onClick={toggleAccordion}
    >
      <div className="d flex justify-center items-center gap-9">
        <h1
          className="cursor-pointer text-xl md:text-2xl font-[600]"
          onClick={toggleAccordion}
        >
          {title}
        </h1>
        <span>
          <img
            className=" w-[24px]"
            src={isOpen ? assetts.collapse : assetts.expand}
            alt=""
          />
        </span>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="nasty mt-3 text-lg md:text-lg"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
