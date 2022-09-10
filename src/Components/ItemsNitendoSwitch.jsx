import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import imgs from '../images/svg.js';

const ItemsNitendoSwitch = ({ handleCloseNitendoStore }) => {
  return (
    <div className="pt-2 pb-3">
      {/* Close  */}
      <div className="flex items-end justify-end pr-4 pb-1 cursor-pointer text-gray-300 hover:text-gray-600 duration-300 ">
        <AiFillCloseCircle
          className="text-3xl"
          onClick={handleCloseNitendoStore}
        />
      </div>
      {/* Lists */}
      <div class="flex items-center justify-center  cursor-pointer gap-7">
        <Link to="/store/games">
          {/* Item */}
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary cursor-pointer duration-300">
              <img
                className="w-full h-full"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/Dev/Global%20Navigation/lineup.png?_a=ATAK9AA0"
                alt="nitendo switch lineup"
              />
            </div>
            <h3 className="">Nitendo Switch lineup</h3>
          </div>
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="flex items-center justify-center  w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary cursor-pointer duration-300">
              {imgs.compareLarge}
            </div>
            <h3 className="">Compare systems</h3>
          </div>{' '}
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="flex items-center justify-center  w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary hover:text-white cursor-pointer duration-300">
              {imgs.onlineServiceLarge}
            </div>
            <h3 className="">Online service</h3>
          </div>
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="flex items-center justify-center  w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary cursor-pointer duration-300">
              <img
                className="w-full h-full"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_200/v1/Dev/Global%20Navigation/procon.png?_a=AJADJWI0"
                alt="nitendo switch lineup"
              />
            </div>
            <h3 className="">Accessories</h3>
          </div>
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="flex items-center justify-center  w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary cursor-pointer duration-300">
              <img
                className="w-full h-full"
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_200/v1/Dev/Global%20Navigation/oled.png?_a=AJADJWI0"
                alt="nitendo switch lineup"
              />
            </div>
            <h3 className="">Shop systems</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemsNitendoSwitch;
