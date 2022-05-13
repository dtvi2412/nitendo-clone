import React from 'react';
import imgs from '../images/svg.js';
const FooterBottom = () => {
  return (
    <div className="text-[0.625rem] sm:text-[0.725rem] bg-[#242424] pt-8 px-4 pb-[114px] md:py-8 lg:px-4 flex flex-col md:flex-row justify-center items-center gap-8">
      <p className=" text-white font-[300]">
        <span>© Nintendo. </span>
        <span>Games are property of their respective owners. </span>
        <span>
          Nintendo of America Inc. Headquarters are in Redmond, Washington, USA
        </span>
      </p>
      <div className="flex items-center  gap-2  font-bold">
        <a className="inline-block" href="#careers">
          <span className="group relative text-white">
            Contact us
            <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] h-[1px]"></div>
          </span>
        </a>
        <a className="inline-block" href="#careers">
          <span className="group relative text-white">
            Website feedback
            <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] h-[1px]"></div>
          </span>
        </a>
        <a className="inline-block" href="#careers">
          <span className="group relative text-white">
            Terms of Use
            <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] h-[1px]"></div>
          </span>
        </a>
        <a className="inline-block" href="#careers">
          <span className="group relative text-white">
            Documents & Policies
            <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] h-[1px]"></div>
          </span>
        </a>
      </div>
      {/* Region */}
      <div>
        <a className="flex items-center  font-bold" href="#careers">
          <div className="mr-2">{imgs.region}</div>
          <span className="group relative text-white">
            Change region
            <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#fff] h-[1px]"></div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
