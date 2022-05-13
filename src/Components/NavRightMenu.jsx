import React from 'react';
import imgs from '../images/svg.js';
import bgLogin from '../images/background/bg-login.png';

const NavRightMenu = ({ isOpenNavLogin, onCloseNavLogin }) => {
  return (
    <div className="hidden lg:block">
      {/* Bg alpha black */}
      <div
        onClick={onCloseNavLogin}
        className={`${
          isOpenNavLogin ? 'fixed' : 'hidden'
        } duration-300 z-[10] inset-0 bg-[rgba(0,0,0,0.5)]`}
      ></div>
      {/* Content Right */}
      <div
        className={`${
          isOpenNavLogin ? 'translate-x-0' : 'translate-x-full'
        } duration-300 fixed right-0 top-0 z-[10000] px-[1.25rem] w-[360px] h-full bg-[rgb(239,239,239)]`}
      >
        {/* Top  */}
        <div className="flex items-center justify-between h-16">
          <h1 className="text-[1.325rem] font-semibold">Log in / Sign up</h1>
          <span
            onClick={onCloseNavLogin}
            className="cursor-pointer text-gray-300 duration-300 hover:text-gray-700"
          >
            {imgs.headerCloseIcon}
          </span>
        </div>
        {/* Mid & bottom */}
        <div>
          {/* Mid */}
          <div className="my-4">
            {/* Img and description */}
            <div className="mb-4 pt-4 px-7 pb-2 bg-white rounded-[0.25rem]">
              <img
                className="w-full h-full object-cover"
                src={bgLogin}
                alt="bg-login"
              />
              {/* Description */}
              <div className="px-3 font-bold text-base ">
                <p className="">With a free account, you can</p>
                <div className="flex items-center gap-2">
                  <span>{imgs.mark}</span>
                  <p className="text-[0.875rem]">Shop online</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>{imgs.mark}</span>
                  <p className="text-[0.875rem]">Earn My Nintendo points</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>{imgs.mark}</span>
                  <p className="text-[0.875rem]">Save a Wish List</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="w-full">
              <button className="font-bold w-full rounded-[0.25rem] h-12 text-[1.125rem] text-center text-white bg-secondary hover:bg-[#AC000D] duration-300">
                Log in
              </button>
              <button className="mt-2 font-bold w-full rounded-[0.25rem] h-12 text-[1.125rem] text-center text-secondary bg-transparent hover:text-[#AC000D] duration-300">
                Sign up
              </button>
            </div>
          </div>
          {/* Bottom */}
          <div>
            {/* Item */}
            <div className="group flex items-center gap-1 cursor-pointer bg-white border border-[rgb(218,218,218)]  h-[48px] px-6 font-bold">
              <span className="text-secondary"> {imgs.skeletonIcon}</span>
              <span className="group-hover:text-secondary duration-300">
                Order Status
              </span>
            </div>

            {/* Menu */}
            <div className="mt-6">
              {/* Item */}
              <div className="group flex items-center justify-between cursor-pointer bg-white border border-[rgb(218,218,218)]  h-[48px] px-6 font-bold">
                <div className="flex items-center gap-1">
                  <span className="text-secondary"> {imgs.store}</span>
                  <span className="group-hover:text-secondary duration-300">
                    My Nintendo
                  </span>
                </div>
                <span className="group-hover:text-secondary duration-300">
                  {imgs.offSiteIcon}
                </span>
              </div>
              {/* Item */}
              <div className="group flex items-center justify-between cursor-pointer bg-white border border-[rgb(218,218,218)]  h-[48px] px-6 font-bold">
                <div className="flex items-center gap-1">
                  <span className="text-secondary"> {imgs.cardCodeIcon}</span>
                  <span className="group-hover:text-secondary duration-300">
                    Redeem code
                  </span>
                </div>
                <span className="group-hover:text-secondary duration-300">
                  {imgs.offSiteIcon}
                </span>
              </div>
              {/* Item */}
              {/* Item */}
              <div className="group flex items-center justify-between cursor-pointer bg-white border border-[rgb(218,218,218)]  h-[48px] px-6 font-bold">
                <div className="flex items-center gap-1">
                  <span className="text-secondary"> {imgs.settingIcon}</span>
                  <span className="group-hover:text-secondary duration-300">
                    Account settings
                  </span>
                </div>
                <span className="group-hover:text-secondary duration-300">
                  {imgs.offSiteIcon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavRightMenu;
