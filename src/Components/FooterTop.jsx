import React from 'react';
import imgs from '../images/svg.js';
const FooterTop = () => {
  return (
    <div className="bg-secondary py-[2.25rem] px-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
      <div className="w-[195px] text-white cursor-pointer">
        {imgs.logoLarge}
      </div>
      <div className="flex items-center gap-8 md:gap-16">
        <div className="text-white cursor-pointer">{imgs.fb}</div>
        <div className="text-white cursor-pointer">{imgs.instagram}</div>
        <div className="text-white cursor-pointer">{imgs.twitter}</div>
        <div className="text-white cursor-pointer">{imgs.youtube}</div>
      </div>
    </div>
  );
};

export default FooterTop;
