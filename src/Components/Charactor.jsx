import React from 'react';

const Charactor = ({ item: { bgImg, charactorImg, name } }) => {
  return (
    <div className="flex flex-col cursor-pointer">
      {/* Combine charactor with background */}
      <div className="relative z-[1] w-full min-h-[150px] sm:min-h-[324px] md:min-h-[200px] lg:min-h-[262px] mb-2 group rounded-md overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full rounded-md group-hover:scale-100 scale-[1.15] duration-300 overflow-hidden ">
          <img
            className=" w-full min-h-[100%] object-cover rounded-md "
            src={bgImg}
            alt={name}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full rounded-md group-hover:scale-[1.1] scale-100 duration-300 overflow-hidden">
          <img
            className="w-full min-h-[100%] object-cover rounded-md"
            src={charactorImg}
            alt={name}
          />
        </div>
      </div>
      <h1 className="text-[1rem] md:text-[1.3125rem] font-bold pb-[1em]">
        {name}
      </h1>
    </div>
  );
};

export default Charactor;
