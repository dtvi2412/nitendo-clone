import React from 'react';
import imgs from '../images/svg.js';
import Button from './Button';

import arrowWall from '../images/background/arrow-wall.svg';
import bgBelowWall from '../images/background/bg-bottom.png';
import { Link } from 'react-router-dom';
const OnlineStore = () => {
  return (
    <div className="flex flex-col gap-12 ">
      <h1 className="text-[1.75rem] font-bold">Online Store</h1>
      <div className="relative flex flex-col lg:flex-row items-center gap-[1.25rem] justify-between  bg-secondary pt-[2.5rem] px-12 pb-16 mb-8">
        {/* Logo nitendo Store */}
        <div className="flex-[1] max-w-[280px] md:max-w-[550px]  lg:max-w-[440px] mx-auto flex items-center justify-center text-white mb-4">
          {imgs.nitendoStoreLarge}
        </div>
        {/* List icon */}
        <div className="text-[#ac000d] flex-[1] flex items-center justify-around gap-4 md:gap-2 lg:gap-0">
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.gameFullWidth}
          </div>
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.handleFullWidth}
          </div>
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.tshirtFullWidth}
          </div>
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.salesFullWidth}
          </div>
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.charactorFullWidth}
          </div>
          <div className="w-full max-w-[2rem] md:max-w-[2.5rem]">
            {imgs.star2FullWidth}
          </div>
        </div>
        {/* Arrow Wall*/}
        <div
          style={{
            backgroundImage: `url(${arrowWall})`,
          }}
          className=" absolute top-full left-0 right-0  bg-repeat-x w-full h-[14px] z-[1]"
        ></div>
        {/* Background bottom */}
        <div
          style={{
            backgroundImage: `url(${bgBelowWall})`,
          }}
          className=" absolute top-full left-0 right-0  bg-repeat-x w-full h-[25%] -z-[1] object-cover"
        ></div>
      </div>
      {/* Bottom */}
      <Link to="/store/games">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <b className="text-[1.1rem] md:text-[1.3125rem] ">
            Shop games, exclusive Nintendo merchandise, and more! Plus, get free
            shipping on orders $50 and over.
          </b>
          <Button text="Start shopping" />
        </div>
      </Link>
    </div>
  );
};

export default OnlineStore;
