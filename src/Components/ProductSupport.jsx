import React from 'react';
import imgs from '../images/svg.js';
import rule from '../images/background/rule.png';
const ProductSupport = () => {
  return (
    <div className="my-12">
      <div className="max-w-[71.5rem] mx-4 lg:w-[96%] lg:mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          {/* Left */}
          <div className="min-h-[210px] flex-[1] w-full bg-[rgb(248,248,248)] py-6 px-8 flex items-center justify-center flex-col gap-4">
            <h4 className="font-bold text-[1rem]">ESRB rating</h4>
            <div className="flex items-center gap-2 bg-white rounded-[0.25rem] py-4 px-8 shadow-custom">
              <img
                className="h-[60px] w-[40px] object-cover"
                src={rule}
                alt="rule"
              />
              <p className="text-[0.8rem] text-gray-500">Cartoon Violence</p>
            </div>
          </div>
          {/* Right */}
          <div className="min-h-[210px] w-full bg-[rgb(248,248,248)] py-6 px-8 flex-[1] flex items-center justify-center flex-col gap-4">
            <h4 className="font-bold text-[1rem]">Supported play modes</h4>
            <div className="grid grid-cols-3 gap-4">
              {/* Item */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[rgb(57,70,180)]  text-white py-4  px-2 md:px-4 lg:px-12 flex items-center justify-center rounded-[0.25rem]">
                  {imgs.tvIcon}
                </div>
                <p className="font-bold text-[0.8rem] md:text-[1rem]">TV</p>
              </div>
              {/* Item */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[rgb(57,70,180)]  text-white py-4  px-2 md:px-4 lg:px-12 flex items-center justify-center rounded-[0.25rem]">
                  {imgs.tabletTopIcon}
                </div>
                <p className="font-bold text-[0.8rem] md:text-[1rem]">
                  Tabletop
                </p>
              </div>
              {/* Item */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[rgb(57,70,180)]  text-white py-4  px-2 md:px-4 lg:px-12 flex items-center justify-center rounded-[0.25rem]">
                  {imgs.handHeld}
                </div>
                <p className="font-bold text-[0.8rem] md:text-[1rem]">
                  Handheld
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mid */}
        <div className="my-8">
          {/* Item */}
          <div className="grid grid-cols-12 md:grid-cols-3 py-4 px-2 border-t border-b border-[rgb(218,218,218)]">
            <div className="flex col-span-2 md:col-span-1 items-center gap-4">
              <span className="">{imgs.calendar}</span>
              <h3 className="hidden md:block font-bold">Release date</h3>
            </div>
            <div className="flex flex-col col-span-10 md:col-span-2">
              <h3 className="md:hidden font-bold">Release date</h3>
              <p className="col-span-2 text-[1rem] font-light">March 8, 2018</p>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-12 md:grid-cols-3 py-4 px-2 border-b border-[rgb(218,218,218)]">
            <div className="flex col-span-2 md:col-span-1 items-center gap-4">
              <span>{imgs.productGameIcon}</span>
              <h3 className="hidden md:block font-bold">Genre</h3>
            </div>
            <div className="flex flex-col col-span-10 md:col-span-2">
              <h3 className="md:hidden font-bold">Genre</h3>
              <div className="flex items-center gap-3">
                <span className="text-secondary border-b-2 font-bold border-secondary pb-[2px] cursor-pointer hover:text-red-700 hover:border-red-700 duration-300">
                  Action
                </span>
                <span className="text-secondary border-b-2 font-bold border-secondary pb-[2px] cursor-pointer hover:text-red-700 hover:border-red-700 duration-300">
                  Multiplayer
                </span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-12 md:grid-cols-3 py-4 px-2 border-b border-[rgb(218,218,218)]">
            <div className="flex col-span-2 md:col-span-1 items-center gap-4">
              <span>{imgs.publisherIcon}</span>
              <h3 className="hidden md:block font-bold">Publisher</h3>
            </div>
            <div className="col-span-10 md:col-span-2">
              <h3 className="md:hidden font-bold">Publisher</h3>
              <div className="flex items-center gap-3">
                <span className="text-secondary border-b-2 font-bold border-secondary pb-[2px] cursor-pointer hover:text-red-700 hover:border-red-700 duration-300">
                  Nitendo
                </span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-12 md:grid-cols-3 py-4 px-2 border-b border-[rgb(218,218,218)]">
            <div className="flex col-span-2 md:col-span-1 items-center gap-4">
              <span>{imgs.settingIconlarge}</span>
              <h3 className="hidden md:block font-bold">ESRB rating</h3>
            </div>
            <div className="col-span-10 md:col-span-2">
              <h3 className="md:hidden font-bold">ESRB rating</h3>
              <div className="flex items-center gap-3">
                <span className="text-secondary border-b-2 font-bold border-secondary pb-[2px] cursor-pointer hover:text-red-700 hover:border-red-700 duration-300">
                  Everyone 10+
                </span>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-12 md:grid-cols-3 py-4 px-2 border-b border-[rgb(218,218,218)]">
            <div className="flex col-span-2 md:col-span-1 items-center gap-4">
              <span className="">{imgs.supportPlaymodesIcon}</span>
              <h3 className="hidden md:block font-bold">
                Supported play modes
              </h3>
            </div>
            <div className="flex flex-col col-span-10 md:col-span-2">
              <h3 className="md:hidden font-bold">Supported play modes</h3>
              <p className="col-span-2 text-[1rem] font-light">
                TV mode, Tabletop mode, Handheld mode
              </p>
            </div>
          </div>
          {/* End List Item*/}
        </div>
      </div>
    </div>
  );
};

export default ProductSupport;
