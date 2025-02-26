import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Services({ item, desc }) {
  const [isFocused, setIsFocused] = useState(false);

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
  };

  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      animate={isFocused ? "focused" : " "}
      onClick={handleFocus}
      className={`secDownCard ${isFocused ? "flashing-text flex" : ""}`} // Ensure the grid-item class is applied
    >
      {isFocused ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="p-1 flex content-center gap-2 relative"
        >
          <p className="text-center text-[16px] font-normal">{desc}</p>
        </motion.div>
      ) : (
        <div className="">{item}</div>
      )}
    </motion.div>
  );
}
