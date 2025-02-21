import React, { useEffect, useState } from "react";
import assetts from "../../JsData/assetts.js";
import Togglee from "./Togglee.jsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState();
  //handle the fix navBar
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  //To track the screen Y axis
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`flex items-center border-b-[1px] border-gray-300 ${
        scrolled ? "fixed top-0 left-0 right-0  bg-white z-20 " : ""
      }}`}
    >
      <div className="momva lg:flex justify-between p-6  h-[90px] items-center  w-full ">
        <div className="logo w-[38px]">
          <a href="/">
            <img src={assetts.ww} alt="logo" />
          </a>
        </div>
        <div className="links hidden lg:flex">
          <ul className="flex justify-evenly gap-[66px]">
            <li className="home loser">
              <a href="/">home</a>
            </li>
            <li className="home loser ">
              <a href="/">Business</a>
            </li>
            <li className="home loser transition-all ">
              <a href="/">Services</a>
            </li>
            <li className="home loser ">
              <a href="/">Pricing</a>
            </li>
            <li className="home loser">
              <a href="/">About us</a>
            </li>
          </ul>
        </div>
        <div className="button hidden lg:block">
          <button className="contact-us">Contact us</button>
        </div>
      </div>
      {/* SideBar menu */}
      <div className="lg:hidden">
        <Togglee />
      </div>
    </nav>
  );
}
