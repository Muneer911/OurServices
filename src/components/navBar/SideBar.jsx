import React from "react";
import Togglee from "./Togglee";
import assetts from "../../assetts";
export default function SideBar() {
  return (
    <div className=" lg:hidden flex justify-between items-center bg-slate-400 w-full">
      <div className=" w-[40px]">
        <img src={assetts.ww} alt="" />
      </div>
      <div>
        <Togglee />
      </div>
    </div>
  );
}
