import React from "react";
import { ChevronLeft, EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "@/../public/avatar.jpg";

export default function Phone() {
  return (
    <div className="w-[300px] overflow-hidden relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:rounded-b-2xl before:bg-white before:w-[60%] before:h-[23px] shadow-2xl z-30 h-[644px] rounded-[44px] bg-light_grayish_violet border-[10px] border-white flex flex-col items-center">
      {/**header bar*/}
      <div className=" pl-2 pr-2 flex bg-gradient-to-l rounded-b-sm from-gradient_light_magenta to-gradient_light_violet h-[100px] w-full flex-row items-end pb-5 justify-between ">
        <div className="flex  items-center w-full justify-between">
          <div className="flex gap-2 items-center justify-start">
            <ChevronLeft color="white" />
            <Avatar>
              <AvatarImage width={10} src={avatar.src} alt="image" />
              <AvatarFallback>Sa</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-sm text-white">Samuel Green</h1>
              <p className="text-xs text-green-50">Available to walk</p>
            </div>
          </div>
          <EllipsisVertical color="white" />
        </div>
      </div>

      {/**messages */}
      <div></div>

      {/*typing*/}
      <div>
        <input type="text" />
        <button></button>
      </div>
    </div>
  );
}
