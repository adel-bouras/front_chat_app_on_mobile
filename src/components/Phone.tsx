import React from "react";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "@/../public/avatar.jpg";

interface Props {
  text: string;
  color: string;
  bg: string;
  rounded: string;
}

const Message = (props: Props) => {
  return (
    <p
      className={`text-${props.color} bg-${props.bg} rounded-lg ${props.rounded}`}
    >
      {props.text}
    </p>
  );
};

interface VProps {
  price: number;
  text: string;
}

const Price = (props: VProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">{props.text}</div>
      <h1>{props.price}</h1>
    </div>
  );
};

export default function Phone() {
  return (
    <div className="w-[300px] overflow-hidden relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:rounded-b-2xl before:bg-white before:w-[60%] before:h-[23px] shadow-2xl z-30 h-[644px] rounded-[44px] bg-light_grayish_violet border-[10px] border-white flex flex-col items-center">
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
      <div className="flex flex-col overflow-y-scroll gap-5">
        <Message />
        <Message />
        <div></div>
        <Message />
        <Message />

        <Message />
      </div>

      <div className="bg-white flex items-center justify-between h-[50px] w-[95%] p-2 rounded-3xl">
        <input
          type="text"
          placeholder="Type a message"
          className="outline-none w-[80%] "
        />
        <button className="bg-very_dark_desaturated_violet rounded-full h-[30px] flex items-center justify-center w-[30px]">
          <ChevronRight color="white" />
        </button>
      </div>
    </div>
  );
}
