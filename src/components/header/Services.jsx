import React, { useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Services({ item, onFocus, onNoFocus, desc }) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleBlur = () => {
    setIsFocused(false);
    onNoFocus && onNoFocus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFocused && !event.target.closest(".grid-item")) {
        setIsFocused(false);
        onNoFocus && onNoFocus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const variants = {
    hover: { scale: 1.1 },
    tap: { scale: 1.2 },
    focused: {
      scale: 1.5,
      zIndex: 100,
      background: "white",
      width: "400px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      animate={isFocused ? "focused" : ""}
      onClick={handleFocus}
      className="secDownCard" // Ensure the grid-item class is applied
    >
      {isFocused ? (
        <div className="p-1 flex flex-col items-center gap-5">
          <h1 className="text-lg font-semibold">{item}</h1>
          <p className="text-[14px]">{desc}</p>
        </div>
      ) : (
        <div className="">{item}</div>
      )}
    </motion.div>
  );
}
