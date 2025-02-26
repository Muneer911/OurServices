import React from "react";
import Accordion from "../Accordation/Accordion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="solution flex flex-col lg:flex-row gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="solRight flex-1"
      >
        <h6 className="text-[#b64a00] text-xl flex items-center gap-2 font-light">
          {" "}
          <span className="bg-[#b64a00] h-[1px] w-5 flex" />
          SOLUTION
        </h6>
        <h2 className="mt-7 text-4xl lg:text-6xl w-[300px] lg:w-[550px] font-[500]">
          Digital solutions for businss.
        </h2>
        <p className="font-[380] text-xl leading-8 my-7 text-[#6a6a6a] lg:w-[415px]">
          Do you have more question about our solution? Just send us a message
          for help
        </p>
        <a className="underline block pb-10 nav-item" href="/">
          More About Bloom Techno{" "}
        </a>
        <button className="contactUs shadow-md shadow-slate-400 px-10">
          <a href="https://bloomtechno.com/contact"> Contact Us</a>
        </button>
      </motion.div>
      <div className="solLeft flex-1 flex flex-col ">
        <hr />
        <Accordion title="What is Bloom Techno, and how can it help me?">
          <p className="">
            Bloom Techno is a dynamic company that specializes in business setup
            services, cutting-edge tech solutions, and nurturing startups in the
            UAE. We assist entrepreneurs in establishing their businesses, offer
            tailored technology services, and provide ongoing support for
            success.
          </p>
        </Accordion>
        <hr />
        <Accordion title="What tech services do we offer for businesses?">
          <p>
            Our tech services cover web design, e-commerce development, software
            solutions, and mobile app development. We tailor our tech solutions
            to meet your specific business goals.
          </p>
        </Accordion>
        <hr />
        <Accordion title="Why should I choose Bloom Techno for my business setup needs?">
          <p>
            Bloom Techno offers a proven track record of success through our
            experience at Sinad Solutions. We simplify business setup processes,
            provide tailored solutions, and have a deep understanding of the
            UAE's entrepreneurial landscape.
          </p>
        </Accordion>
        <hr />
        <Accordion title="What types of businesses do you support with setup?">
          <p>
            We assist a wide range of businesses, from startups to established
            companies, across various industries. Whether you're launching a new
            venture or expanding into the UAE, we have solutions to suit your
            needs.
          </p>
        </Accordion>
        <hr />
      </div>
    </div>
  );
}
