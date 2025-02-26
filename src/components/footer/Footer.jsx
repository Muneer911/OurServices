import React from "react";
import assetts from "../../JsData/assets";
export default function Footer() {
  return (
    <div className="footer px-8 flex flex-col lg:flex-row justify-between items-center h-[95px] border-t-[1px] border-gray-300">
      <div className="left flex justify-start gap-10 w-[33%]">
        <a className="nav-item font-normal" href="/">
          Careers
        </a>
        <a className="nav-item font-normal" href="/">
          Contact
        </a>
      </div>
      <div className="mid flex justify-center w-[33%]">
        <p>Copyright © 2025 Bloom Techno</p>
      </div>
      <div className="right flex justify-end gap-5 w-[33%]">
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
