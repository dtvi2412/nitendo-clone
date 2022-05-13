import React from 'react';
import bgLogin from '../images/background/bg-login.png';
import imgs from '../images/svg.js';
const TabletLogin = ({ onCloseContenntMenu }) => {
  return (
    <div className="bg-[#efefef]">
      {/* Top */}
      <div className="relative h-16 border-b border-[rgb(218,218,218)] bg-white flex items-center justify-center">
        <h1 className="text-[1.3125rem] font-bold">Log in / Sign up</h1>
        <span
          onClick={onCloseContenntMenu}
          className="absolute right-4 text-[rgb(200,200,200)] hover:text-gray-700 duration-300 cursor-pointer"
        >
          {imgs.headerCloseIcon}
        </span>
      </div>
      {/* Content Scroll */}
      <div className="overflow-y-scroll  h-[calc(80vh-4rem)] pb-12">
        {/* Mid */}
        <div className="m-4 ">
          {/* Img & Text */}
          <div className="bg-white px-7 pt-4 pb-2 mb-4">
            <img
              className="w-full h-full object-cover"
              src={bgLogin}
              alt="bg-login"
            />
            <div className="font-bold">
              <p className="text-[1rem]">With a free account, you can</p>
              <div className="flex items-center gap-2 text-[0.875rem]">
                <span>{imgs.mark}</span>
                <p>Shop online</p>
              </div>
              <div className="flex items-center gap-2 text-[0.875rem]">
                <span>{imgs.mark}</span>
                <p>Earn My Nintendo points</p>
              </div>
              <div className="flex items-center gap-2 text-[0.875rem]">
                <span>{imgs.mark}</span>
                <p>Save a Wish List</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <div>
            <button className="h-12 w-full bg-secondary text-white hover:bg-[#AC000D] rounded-sm font-bold text-[1.125rem] duration-300">
              Log in
            </button>
            <button className="h-12 w-full bg-transparent text-secondary hover:text-[#AC000D] rounded-sm font-bold text-[1.125rem] duration-300">
              Sign up
            </button>
          </div>
        </div>
        {/* Bottom */}
        <div>
          {/* Item */}
          <div className="group cursor-pointer bg-white flex items-center h-[60px] px-6 gap-2">
            <span className="text-secondary">{imgs.skeletonIcon}</span>
            <p className="group-hover:text-secondary transition font-bold">
              Order status
            </p>
          </div>
          <div className="mt-4">
            {/* Item */}
            <div className="group cursor-pointer bg-white flex items-center justify-between h-[60px] px-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary">{imgs.store}</span>
                <p className="group-hover:text-secondary transition font-bold">
                  My Nintendo
                </p>
              </div>
              <span className="group-hover:text-secondary duration-300">
                {imgs.offSiteIcon}
              </span>
            </div>
            {/* Item */}
            <div className="group cursor-pointer bg-white flex items-center justify-between h-[60px] px-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary">{imgs.cardCodeIcon}</span>
                <p className="group-hover:text-secondary transition font-bold">
                  Redeem code
                </p>
              </div>
              <span className="group-hover:text-secondary duration-300">
                {imgs.offSiteIcon}
              </span>
            </div>
            {/* Item */}
            <div className="group cursor-pointer bg-white flex items-center justify-between h-[60px] px-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary">{imgs.settingIcon}</span>
                <p className="group-hover:text-secondary transition font-bold">
                  Account settings
                </p>
              </div>
              <span className="group-hover:text-secondary duration-300">
                {imgs.offSiteIcon}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletLogin;
