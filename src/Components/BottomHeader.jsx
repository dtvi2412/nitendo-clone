import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import imgs from '../images/svg.js';
const BottomHeader = ({
  isOpenNitendoStore,
  isOpenGame,
  isOpenNitendoSwitch,
  isOpenNitendoPlay,
  setIsOpenNitendoStore,
  setIsOpenGame,
  setIsOpenNitendoSwitch,
  setIsOpenNitendoPlay,
  setIsChooseCategories,
  setIsOpenNavLogin,
  handleCloseNitendoStore,
}) => {
  const { store, game, switchIcon, feedback, star } = imgs;

  return (
    <div className="flex items-center justify-center h-[44px] border-b border-[#dadada] bg-white">
      {/* Item */}
      <div
        className={`${
          isOpenNitendoStore && 'text-secondary'
        } flex items-center font-semibold p-3 hover:text-secondary cursor-pointer`}
        onClick={() => {
          if (!isOpenNitendoStore) {
            setIsOpenNitendoStore(true);
            setIsOpenGame(false);
            setIsOpenNitendoSwitch(false);
            setIsOpenNitendoPlay(false);

            setIsChooseCategories(false);
            setIsOpenNavLogin(false);
          } else {
            handleCloseNitendoStore();
          }
        }}
      >
        <span>{store}</span>
        <h3 className="mx-2">My Nintendo Store</h3>
        <BsChevronDown
          className={`${
            isOpenNitendoStore ? 'rotate-180' : 'rotate-0'
          } duration-500`}
        />
      </div>
      {/* Item */}
      <div
        className={`${
          isOpenGame && 'text-secondary'
        } flex items-center font-semibold p-3 hover:text-secondary cursor-pointer`}
        onClick={() => {
          if (!isOpenGame) {
            setIsOpenGame(true);
            setIsOpenNitendoStore(false);
            setIsOpenNitendoSwitch(false);
            setIsOpenNitendoPlay(false);

            setIsChooseCategories(false);
            setIsOpenNavLogin(false);
          } else {
            handleCloseNitendoStore();
          }
        }}
      >
        <span>{game}</span>
        <h3 className="mx-2">Game</h3>
        <BsChevronDown
          className={`${isOpenGame ? 'rotate-180' : 'rotate-0'} duration-500`}
        />
      </div>
      {/* Item */}
      <div
        className={`${
          isOpenNitendoSwitch && 'text-secondary'
        } flex items-center font-semibold p-3 hover:text-secondary cursor-pointer`}
        onClick={() => {
          if (!isOpenNitendoSwitch) {
            setIsOpenNitendoSwitch(true);
            setIsOpenNitendoStore(false);
            setIsOpenGame(false);
            setIsOpenNitendoPlay(false);

            setIsChooseCategories(false);
            setIsOpenNavLogin(false);
          } else {
            handleCloseNitendoStore();
          }
        }}
      >
        <span>{switchIcon}</span>
        <h3 className="mx-2">Nintendo Switch</h3>
        <BsChevronDown
          className={`${
            isOpenNitendoSwitch ? 'rotate-180' : 'rotate-0'
          } duration-500`}
        />
      </div>
      {/* Item */}
      <div className="flex items-center font-semibold p-3 hover:text-secondary cursor-pointer">
        <span>{feedback}</span>
        <h3 className="mx-2">News & Event</h3>
      </div>
      {/* Item */}
      <div
        className={`${
          isOpenNitendoPlay && 'text-secondary'
        } flex items-center font-semibold p-3 hover:text-secondary cursor-pointer`}
        onClick={() => {
          if (!isOpenNitendoPlay) {
            setIsOpenNitendoPlay(true);
            setIsOpenNitendoStore(false);
            setIsOpenGame(false);
            setIsOpenNitendoSwitch(false);

            setIsChooseCategories(false);
            setIsOpenNavLogin(false);
          } else {
            handleCloseNitendoStore();
          }
        }}
      >
        <span>{star}</span>
        <h3 className="mx-2">Play Nitendo</h3>
        <BsChevronDown
          className={`${
            isOpenNitendoPlay ? 'rotate-180' : 'rotate-0'
          } duration-500`}
        />
      </div>
    </div>
  );
};

export default BottomHeader;
