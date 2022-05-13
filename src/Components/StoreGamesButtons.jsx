import React from 'react';

const StoreGamesButtons = () => {
  return (
    <div className="my-8 w-[96%] mx-auto flex items-center justify-center flex-wrap gap-4">
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        Best sellers
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        Coming soon
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        Mario
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        Pokémon
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        The Legend of Zelda
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
      <button className="group h-[46px] flex items-center justify-center text-[0.9rem] md:text-[1.3125rem] relative text-secondary font-bold px-8 py-4 rounded-full z-[1]">
        $19.99 and under
        <div className="ease-in duration-300 absolute inset-0 rounded-full group-hover:bg-red-100 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 border border-secondary bg-white z-[-1]"></div>
      </button>
    </div>
  );
};

export default StoreGamesButtons;
