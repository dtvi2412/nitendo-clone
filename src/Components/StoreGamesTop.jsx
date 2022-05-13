import React, { useEffect, useState } from 'react';
import imgs from '../images/svg.js';

const StoreGamesTop = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      setIsOpenCategory(false);
    };
    window.addEventListener('click', handleClick);
    return () => {
      setIsOpenCategory(false);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  //Handle Category
  const handleOpenCategory = (e) => {
    setIsOpenCategory((prev) => !prev);
    e.stopPropagation();
  };
  return (
    <div className="flex items-center justify-between w-[96%] mx-auto my-12">
      {/* Left */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center gap-2 text-[0.875rem] font-semibold text-gray-400">
          <h3>Home</h3>
          <span>{imgs.arrowNextBreadCrums}</span>
        </div>
        <div className="flex items-center gap-2 text-[0.875rem] font-semibold text-gray-400 ml-3">
          <h3>My Nitendo Store</h3>
          <span>{imgs.arrowNextBreadCrums}</span>
        </div>
        <div className="flex items-center gap-2 text-[0.875rem] font-semibold text-black ml-3">
          <h3>Games</h3>
        </div>
      </div>
      {/* End Left */}
      {/* Right */}

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
        <h3 className="text-[rgb(72,72,72)]">Sort by:</h3>
        <div className=" relative min-w-[158px] sm:min-w-[180px] flex items-center justify-between">
          <div
            onClick={(e) => handleOpenCategory(e)}
            className="flex-[1] cursor-pointer bg-white hover:bg-gray-200 duration-300 font-bold border-2 border-gray-500 rounded-md py-2 px-4 flex items-center justify-between gap-4"
          >
            <h1>Featured</h1>
            <span
              className={`${
                isOpenCategory ? 'rotate-180' : 'rotate-0'
              } duration-300`}
            >
              {imgs.headerArrowDownIcon}
            </span>
          </div>
          {/* Option Select */}
          <div
            className={`${
              isOpenCategory ? 'flex' : 'hidden'
            } flex-col rounded-md border border-[rgb(171,171,171)] shadow-custom py-1 absolute top-[calc(100%+4px)] left-0 right-0 z-[100]`}
          >
            <a className="bg-white hover:bg-gray-200 px-4 py-1" href="#feture">
              Feature
            </a>
            <a className="bg-white hover:bg-gray-200 px-4 py-1" href="#release">
              Release data
            </a>
            <a className="bg-white hover:bg-gray-200 px-4 py-1" href="#titleaz">
              Title (A-Z)
            </a>
            <a
              className="bg-white  hover:bg-gray-200 px-4 py-1"
              href="#titleza"
            >
              Title (Z-A)
            </a>
            <a
              className="bg-white  hover:bg-gray-200 px-4 py-1"
              href="#pricehighttolow"
            >
              Price (high to low)
            </a>
            <a
              className="bg-white  hover:bg-gray-200 px-4 py-1"
              href="#pricelowtohight"
            >
              Price (low to high)
            </a>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div className="group lg:hidden  mt-[36px] relative z-[1] flex items-center gap-2 text-white py-2 px-4 font-bold text-[1.125rem] cursor-pointer ">
        <span>{imgs.filterIcon}</span>
        <h3>Filter</h3>
        <div className="group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 duration-300 group-hover:bg-blue-900 absolute bg-[#3946a0] rounded-md inset-0 z-[-1]"></div>
      </div>
      {/* End Filter */}

      {/* End Right */}
    </div>
  );
};

export default StoreGamesTop;
