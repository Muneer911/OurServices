import React, { useState } from "react";
import assetts from "../../JsData/assetts";

export default function Togglee() {
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className=" flex justify-center ">
      {open && (
        <div className="bg-white shadow-black shadow-xl absolute left-0 top-0 w-[330px] h-screen flex flex-col gap-[70px] ">
          <div className="mt-10 pl-5 w-[70px]">
            <img src={assetts.ww} alt="" />
          </div>
          <div className="pl-5">
            <ul className=" flex flex-col gap-7">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Bussiness Setup</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button className="contact-us ">Contact Us</button>
          </div>
        </div>
      )}

      <button onClick={toggle} className="">
        <img src={open ? assetts.iconsClose : assetts.iconsmMenu} alt="" />
      </button>
    </div>
  );
}
