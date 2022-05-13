import React from 'react';
import imgs from '../images/svg.js';
const StoreGamesBottom = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[96%] mx-auto my-12 gap-4">
      {/* Item */}
      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer duration-300 gap-4">
        <span className="text-secondary">{imgs.orderStatus}</span>
        <h1 className="hover:text-secondary font-bold text-[1.25rem]">
          Order status
        </h1>
      </div>
      {/* Item */}
      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer duration-300 gap-4">
        <span className="text-secondary">{imgs.cardCodeLarge}</span>
        <h1 className="hover:text-secondary font-bold text-[1.25rem]">
          Redeem code
        </h1>
      </div>
      {/* Item */}
      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer duration-300 gap-4">
        <span className="text-secondary">{imgs.heartLarge}</span>
        <h1 className="hover:text-secondary font-bold text-[1.25rem]">
          Top picks for you
        </h1>
      </div>
      {/* Item */}
      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer duration-300 gap-4">
        <span className="text-secondary">{imgs.supportLarge}</span>
        <h1 className="hover:text-secondary font-bold text-[1.25rem]">
          Store support
        </h1>
      </div>
    </div>
  );
};

export default StoreGamesBottom;
