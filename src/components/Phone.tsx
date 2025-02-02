import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Circle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "@/../public/avatar.jpg";
import first from "@/../public/dog-image-1.jpg";
import second from "@/../public/dog-image-2.jpg";
import third from "@/../public/dog-image-3.jpg";
import Image from "next/image";

interface VProps {
  price: number;
  text: string;
}

const Price = (props: VProps) => {
  return (
    <div className="flex items-center max-w-[80%] bg-gradient-to-r from-gradient_light_magenta to-gradient_light_violet rounded-2xl p-2 rounded-bl-lg justify-between">
      <div className="flex items-center text-xs text-white justify-start gap-3">
        <Circle width={20} height={20} color="white" /> {props.text}
      </div>
      <h1 className="font-extrabold text-lg text-white">${props.price}</h1>
    </div>
  );
};

export default function Phone() {
  return (
    <div className="w-[300px] overflow-hidden relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:rounded-b-2xl before:bg-white before:w-[60%] before:h-[23px] shadow-2xl z-30 pb-3 rounded-[44px] bg-light_grayish_violet border-[10px] border-white flex flex-col justify-start items-center">
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
              <p className="text-xs text-pale_violet">Available to walk</p>
            </div>
          </div>
          <EllipsisVertical color="white" />
        </div>
      </div>

      {/**messages */}
      <div className="flex flex-col p-3 gap-3">
        <p className="text-moderate_violet p-2 rounded-2xl rounded-bl-lg bg-moderate_violet/10 max-w-[70%] text-xs">
          That sounds great. I’d be happy with that.
        </p>
        <p className="text-moderate_violet p-2 rounded-2xl rounded-bl-lg bg-moderate_violet/10 max-w-[70%] text-xs">
          Could you send over some pictures of your dog, please?
        </p>

        <div className="self-end flex flex-col gap-3 items-end">
          <div className="flex justify gap-3">
            <Image
              src={first}
              alt="image"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <Image
              src={second}
              alt="image"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <Image
              src={third}
              alt="image"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
          <p className="text-black p-2 rounded-2xl rounded-br-lg bg-white max-w-[70%] text-xs">
            Here are a few pictures. She’s a happy girl!
          </p>
          <p className="text-black p-2 rounded-2xl rounded-br-lg bg-white max-w-[70%] text-xs">
            Can you make it?
          </p>
        </div>

        <p className="text-moderate_violet p-2 rounded-2xl rounded-bl-lg bg-moderate_violet/10 max-w-[70%] text-xs">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
        <Price price={29} text="30 minute walk" />
        <Price price={49} text="1 hour walk" />
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
