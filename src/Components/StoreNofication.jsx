import React from 'react';
import imgs from '../images/svg.js';
const StoreNofication = () => {
  return (
    <div className="flex items-center text-[0.7rem] md:text-[0.75rem] lg:text-[1rem] p-0 bg-[rgb(248,248,248)] justify-center min-h-[36px] sm:min-h-[48px] md:p-4">
      {/* Left */}
      <div className="hidden lg:flex items-center border-r border-[rgb(150,150,150)] gap-3 px-4">
        <span className="text-secondary">{imgs.transportIcon}</span>
        <span className="text-[1rem]">
          <b>Free shipping</b> on order $50 or more
          <span className="ml-2 text-[0.875rem] underline">
            <a href="#apply">Restrictions apply</a>
          </span>
        </span>
      </div>
      {/* Right */}
      <div className="flex items-center px-4 gap-3">
        <span className="text-secondary">{imgs.pointTransportIcon}</span>
        <span>
          Earn
          <a href="#points">
            <b className="underline"> My Nitendo Points </b>
          </a>
          on digital games
        </span>
      </div>
    </div>
  );
};

export default StoreNofication;
