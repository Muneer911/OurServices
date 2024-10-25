import React from "react";
import assetts from "../assetts";
import { motion } from "framer-motion";
export default function Testemonial({ name, description, location, source }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="border-[1px] border-black w-[250px] h-[350px] flex flex-col justify-center items-center mt-[70px]"
    >
      <div className="iimg flex-1 flex justify-center items-center ">
        <img className=" " src={source} alt="" />
      </div>
      <div className="text flex-1 bg-slate-50 px-5 text-center">
        <p className=" ">{description}</p>
        <hr />
        <h1 className=" pt-3">{name}</h1>{" "}
        <span>
          {" "}
          <p> {location}</p>
        </span>
      </div>
    </motion.div>
  );
}
