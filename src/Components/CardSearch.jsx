import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CardSearch = ({ image, title, category }) => {
  return (
    <div className="flex items-center rounded-md overflow-hidden border border-[#dadada]">
      {/* Image  */}
      <div className="max-w-[8.8125rem] cursor-pointer relative group">
        <img
          className="w-full h-full bg-[rgb(255,255,255)]"
          src={image}
          alt={title}
        />
        {/* Fade Background */}
        <div className="hidden group-hover:block absolute inset-0 bg-[rgba(0,0,0,0.4)] w-full h-full" />
      </div>
      {/* Information */}
      <div className="mx-3 my-2 flex items-center justify-between w-full">
        <div className="w-[80%]">
          <h3 className="font-bold text-[0.8rem] cursor-pointer hover:text-secondary ">
            {title}
          </h3>
          <span className="border-b-2 border-secondary text-[#484848] font-light p-b-[0.125rem]">
            {category}
          </span>
        </div>
        <div className="w-[20%] relative group cursor-pointer">
          <AiOutlineHeart className="ml-4 text-xl text-secondary cursor-pointer hover:text-[#ac000d]" />

          {/* Light Heart */}
          <div className="hidden group-hover:block duration-500 transition-all">
            <div className="lines absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 w-full h-[1px] ">
              {/* Vertical */}
              <div className="absolute top-0 left-2  animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
              <div className="absolute top-0 right-2  animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
            </div>

            {/* Top */}
            <div className="lines absolute top-0 right-0  w-full h-[1px] ">
              <div className="absolute top-0 left-3 rotate-45 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
              <div className="absolute top-0 right-3 -rotate-45 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
            </div>
            {/* Mid */}
            <div className="lines absolute top-1/2 right-0  w-full h-[1px] ">
              <div className="absolute top-0 left-2 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
              <div className="absolute top-0 right-2 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
            </div>
            {/* Bottom */}
            <div className="lines absolute bottom-0 right-0  w-full h-[1px] ">
              <div className="absolute top-0 left-3 -rotate-45 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
              <div className="absolute top-0 right-3 rotate-45 animate-light-heart  w-0 bg-secondary h-[1px] hover:bg-[#ac000d]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
