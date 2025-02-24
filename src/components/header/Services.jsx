import React, { useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Services({ item, onFocus, desc }) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // Function to handle clicks outside the focused element
    const handleClickOutside = (event) => {
      // Check if the element is focused and the click is outside the grid-item
      if (isFocused && !event.target.closest(".grid-item")) {
        setIsFocused(false); // Set isFocused to false if the click is outside
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]); // Dependency array to run the effect when isFocused changes

  const handleFocus = () => {
    setIsFocused(true);
  };

  const variants = {
    hover: { scale: 1.1 },
    tap: { scale: 1.2 },
    focused: {
      transition: { duration: 1, type: " spring " },
      // zIndex: 100,
      // background: "white",
      // width: "400px",
      // position: "fixed",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%, -50%)",
    },
  };

  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      animate={isFocused ? "focused" : " "}
      onClick={handleFocus}
      className={`secDownCard ${isFocused ? "flashing-text" : ""} `} // Ensure the grid-item class is applied
    >
      {isFocused ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="p-1 flex flex-col content-center center gap-2 relative"
        >
          <h1 className="text-lg font-bold">{item}</h1>
          <p className="text-[13px] font-normal">{desc}</p>
        </motion.div>
      ) : (
        <div className="">{item}</div>
      )}
    </motion.div>
  );
}
