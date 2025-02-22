import React from "react";
import assetts from "../../JsData/assets";
export default function Footer() {
  return (
    <div className="footer px-8 flex flex-col lg:flex-row justify-between items-center h-[95px] border-t-[1px] border-gray-300 font-semibold ">
      <div className="left flex gap-10">
        <a className=" hover:text-[#b64a00]" href="/">
          Careers
        </a>
        <a className=" hover:text-[#b64a00]" href="/">
          Contact
        </a>
      </div>
      <div className="mid">
        <p>Copyright © 2024 Bloom Techno</p>
      </div>
      <div className="right flex gap-5">
        <a href="/">
          {" "}
          <img src={assetts.facebook} alt="facebook" />
        </a>
        <a href="/">
          <img src={assetts.linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}
