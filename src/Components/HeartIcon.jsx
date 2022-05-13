import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const HeartIcon = () => {
  return (
    <div className="heartIcon cursor-pointer">
      <AiOutlineHeart />
      {/* light heart */}
      <div className="heartIcon__light">
        {/* Vertical */}
        <div className="absolute top-1/2 -translate-y-1/2  rotate-90 left-0 right-0 bg-transparent w-full h-[1px] ">
          <div className="absolute -left-1 top-0 h-[1px] w-[0px] bg-[#ac000d] animate-light-heart"></div>
          <div className="absolute -right-1 top-0 h-[1px] w-[0px] bg-[#ac000d] animate-light-heart"></div>
        </div>
        {/* Top */}
        {/* ac000d */}
        <div className="absolute top-0 left-0 right-0 bg-transparent w-full h-[1px]">
          <div className="absolute top-0 left-0 h-[1px] w-[0px] bg-[#ac000d] rotate-45 animate-light-heart"></div>
          <div className="absolute top-0 right-0 h-[1px] w-[0px] bg-[#ac000d] -rotate-45 animate-light-heart"></div>
        </div>
        {/* Mid */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-transparent w-full h-[1px]">
          <div className="absolute top-1/2 -translate-y-1/2 -left-1 h-[1px] w-[0px] bg-[#ac000d] animate-light-heart "></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 h-[1px] w-[0px] bg-[#ac000d] animate-light-heart "></div>
        </div>
        {/* Bottom */}
        <div className="absolute top-full left-0 right-0 bg-transparent w-full h-[1px]">
          <div className="absolute top-0 left-0 h-[1px] w-[0px] bg-[#ac000d] -rotate-45 animate-light-heart"></div>
          <div className="absolute top-0 right-0 h-[1px] w-[0px] bg-[#ac000d] rotate-45 animate-light-heart"></div>
        </div>
      </div>
    </div>
  );
};

export default HeartIcon;
