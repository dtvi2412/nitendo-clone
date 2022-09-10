import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import img from '../images/svg.js';
const ItemsGame = ({ handleCloseNitendoStore }) => {
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
      <div className="flex items-center justify-center gap-[1.75rem] ">
        {/* Item */}
        <Link to="/store/games" className="hover:text-secondary">
          <div className="flex flex-col items-center ">
            <span className="rounded-md mb-[0.5rem] border border-[#dadada w-full h-[4.25rem] flex items-center justify-center hover:text-white hover:bg-secondary cursor-pointer duration-500">
              {img.switchIconLarge}
            </span>
            <h3>Nitendo Switch games</h3>
          </div>
        </Link>
        {/* Item */}
        <Link to="/store/games" className="hover:text-secondary">
          <div className="flex flex-col items-center ">
            <span className="rounded-md mb-[0.5rem] border border-[#dadada w-full h-[4.25rem] flex items-center justify-center hover:text-white hover:bg-secondary cursor-pointer duration-500">
              {img.loudSpeaker}
            </span>
            <h3>New releases</h3>
          </div>{' '}
        </Link>
        {/* Item */}
        <Link to="/store/games" className="hover:text-secondary">
          <div className="flex flex-col items-center ">
            <span className="rounded-md mb-[0.5rem] border border-[#dadada w-full h-[4.25rem] flex items-center justify-center hover:text-white hover:bg-secondary cursor-pointer duration-500">
              {img.calculatorLarge}
            </span>
            <h3>Coming son</h3>
          </div>
        </Link>
        {/* Item */}{' '}
        <Link to="/store/games" className="hover:text-secondary">
          <div className="flex flex-col items-center ">
            <span className="rounded-md mb-[0.5rem] border border-[#dadada w-full h-[4.25rem] flex items-center justify-center hover:text-white hover:bg-secondary cursor-pointer duration-500">
              {img.handleLarge}
            </span>
            <h3>Shop games</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemsGame;
