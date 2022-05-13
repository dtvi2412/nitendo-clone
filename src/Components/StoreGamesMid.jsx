import React, { useState } from 'react';
import imgs from '../images/svg.js';
import { dataStoreGames } from '../data.js';
import Button from './Button';
import HeartIcon from './HeartIcon';
import { Link } from 'react-router-dom';

const StoreGamesMid = () => {
  const [checkboxs, setCheckboxs] = useState([
    {
      id: 1,
      name: 'Deals',
      count: 1810,
      check: false,
    },
    {
      id: 2,
      name: 'Demo Available',
      count: 187,
      check: false,
    },
    {
      id: 3,
      name: 'DLC',
      count: 172,
      check: false,
    },
    {
      id: 4,
      name: 'Game with DLC',
      count: 147,
      check: false,
    },
  ]);

  const handleChangeCheckboxs = (id) => {
    setCheckboxs((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        } else {
          return { ...item };
        }
      });
    });
  };

  const renderProducts = () => {
    return dataStoreGames.map((item) => {
      if (item.category === 'news') {
        return (
          <Link key={item.id} to={`/news/${item.title}`}>
            <div className="col-span-2 rounded-sm  border border-gray-300">
              <div className="hover:-translate-y-4 duration-300 border-t border-gray-300">
                <img
                  className="w-full h-full object-cover"
                  src={item.linkImg}
                  alt={item.title}
                />
              </div>
              <div className="mt-full flex items-center justify-between p-5">
                <h1 className="text-[1.125rem] font-bold">{item.title}</h1>
                <Button
                  lgMaxWidth="max-w-[105px]"
                  className="text-[0.9rem]"
                  text={item.btnText}
                />
              </div>
            </div>{' '}
          </Link>
        );
      } else {
        return (
          <Link to={`/products/${item.title}`}>
            <div className="group col-span-1 rounded-sm border border-gray-300 flex flex-col justify-between cursor-pointer">
              <div className="flex flex-col gap-2 mb-8">
                <div className="group-hover:-translate-y-4 rounded-sm overflow-hidden duration-300 border border-gray-300">
                  <img
                    src={item.linkImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-bold text-[0.8rem] md:text-[0.9rem]  px-4">
                  {item.title}
                </h1>
              </div>
              <div className="p-4">
                <p className="font-bold">${item.price}</p>
                <div className="flex items-center justify-between">
                  <span className="ml-[8px] relative after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[2.5px] after:h-[14px] text-[0.775rem]  text-gray-500">
                    {item.category}
                  </span>
                  <HeartIcon />
                </div>
              </div>
            </div>{' '}
          </Link>
        );
      }
    });
  };

  const renderFilters = () => {
    const isCheckbox = checkboxs.some((item) => item.check);
    if (isCheckbox) {
      return (
        <div className="bg-[#EFEFEF]  mb-8 min-h-[4.5rem] p-2 flex flex-wrap items-center gap-2">
          {checkboxs.map((item) => {
            if (item.check) {
              return (
                <span
                  onClick={() => handleChangeCheckboxs(item.id)}
                  className="text-[0.8rem] lg:text-[1rem] duration-500 cursor-pointer rounded-full border-2 p-2 border-[rgb(57,60,160)] bg-white hover:bg-[rgb(57,60,160)] hover:text-white font-bold text-[rgb(57,60,160)]"
                  key={item.id}
                >
                  ✘ {item.name}
                </span>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
  };

  const handleClearAllCheckBoxs = () => {
    setCheckboxs((prev) => {
      return prev.map((item) => {
        return { ...item, check: false };
      });
    });
  };
  return (
    <div className="grid grid-cols-12 w-[96%] mx-auto">
      {/* Left */}
      <div className="hidden lg:block lg:col-span-3 py-4 bg-[rgb(239,239,239)] rounded-md ">
        <div className="px-4 flex flex-col gap-4  h-[calc(100vh-6.875rem)] sticky top-[6.875rem] overflow-y-scroll">
          {/* Title */}
          <div className="flex items-center justify-center text-[rgb(57,60,160)] hover:text-black font-bold gap-2 text-[1rem] cursor-pointer duration-300">
            <span>{imgs.closeIcon}</span>
            <p onClick={handleClearAllCheckBoxs}>Clear all</p>
          </div>
          {/* Content */}
          <div className="bg-white">
            {/* Top */}
            <div className="py-5 px-6 flex flex-col gap-4">
              {/* Input Item */}
              {checkboxs.map((item) => (
                <div
                  onClick={() => handleChangeCheckboxs(item.id)}
                  key={item.id}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={item.id}
                    className={`cursor-pointer relative h-6 min-w-[1.5rem] rounded-md overflow-hidden appearance-none border border-gray-500 
                    ${
                      item.check ? 'after:block' : 'after:hidden'
                    } after:content-[''] after:absolute after:inset-0 after:bg-[rgb(57,60,160)] after:z-[1] 
                    ${
                      item.check ? 'before:block' : 'before:hidden'
                    }  before:content-['✓'] before:absolute before:inset-0 before:z-[2] before:text-white before:text-center before:font-bold before:text-[1rem]`}
                  />
                  <label
                    className="cursor-pointer text-[1rem] font-light"
                    for={item.id}
                  >
                    {item.name}{' '}
                    <span className="text-[0.875rem]">{item.count}</span>
                  </label>
                </div>
              ))}
            </div>
            {/* End Top */}
            {/* Nitendo Switch */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Nintendo Switch Online features</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Nitendo Switch */}
            {/* Platform */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Platform</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Platform */}
            {/* Availability */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Availability</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Availability */}
            {/* Game type */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Game type</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Game type */}
            {/* Edition */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Edition</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Edition */}
            {/* Character or series */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Character or series</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Character or series */}
            {/* Price */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>Price</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End Price */}
            {/* ESRB Rating */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>ESRB Rating</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End ESRB Rating */}
            {/* No. of players */}
            <div className="py-5 px-6 border-t border-b border-gray-300">
              <div className="flex items-center justify-between gap-4 font-bold text-[1rem]">
                <h1>No. of players</h1>
                <span>{imgs.headerArrowDownIcon}</span>
              </div>
            </div>
            {/* End No. of players */}
          </div>
        </div>
      </div>
      {/* Right */}

      <div className="col-span-12 lg:col-span-9 lg:pl-8">
        {renderFilters()}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-y-12 gap-x-8">
          {renderProducts()}
        </div>
      </div>
    </div>
  );
};

export default StoreGamesMid;
