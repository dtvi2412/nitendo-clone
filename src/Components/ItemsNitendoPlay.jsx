import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import imgs from '../images/svg.js';

const ItemsNitendoPlay = ({ handleCloseNitendoStore }) => {
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
        {/* Item */}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="min-w-[120px]  flex items-center justify-center w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary hover:text-white cursor-pointer duration-300">
              {imgs.smileOneLarge}
            </div>
            <h3 className="hover:text-secondary">For kids</h3>
          </div>
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games">
          <div className="flex flex-col items-center justify-center hover:text-secondary">
            <div className="min-w-[120px]  flex items-center justify-center w-full h-[4.25rem] border border-[#dedede] mb-2 rounded-md hover:bg-secondary hover:text-white cursor-pointer duration-300">
              {imgs.smileTwoLarge}
            </div>
            <h3 className="hover:text-secondary">For parents</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemsNitendoPlay;
