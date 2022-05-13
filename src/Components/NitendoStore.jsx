import React, { useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import imgs from '../images/svg.js';
import ItemsGame from './ItemsGame.jsx';
import ItemsNitendoPlay from './ItemsNitendoPlay.jsx';
import ItemsNitendoStore from './ItemsNitendoStore.jsx';
import ItemsNitendoSwitch from './ItemsNitendoSwitch.jsx';

const NitendoStore = ({
  isOpenNitendoStore,
  isOpenGame,
  isOpenNitendoSwitch,
  isOpenNitendoPlay,
  moveNitendoStore,
  setMoveNitendoStore,
  setIsOpenGame,
  setIsOpenNitendoStore,
  handleCloseNitendoStore,
}) => {
  // Render Nitendo Store
  const renderNitendoStore = () => {
    if (
      isOpenNitendoStore &&
      !isOpenGame &&
      !isOpenNitendoSwitch &&
      !isOpenNitendoPlay
    ) {
      return (
        <div>
          {/* Top */}
          <div className="relative mb-[1.5rem]  flex items-center justify-center bg-secondary text-white h-16">
            <a href="#nitendo">{imgs.nitendoStore}</a>
            <div className="absolute right-4 cursor-pointer hover:text-gray-200">
              <AiFillCloseCircle
                className="text-3xl"
                onClick={handleCloseNitendoStore}
              />
            </div>
            <div
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgNDUgMTQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5TdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuIiBmaWxsPSIjRTYwMDEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDUsMCBMMCwwIEwwLDEzLjc3MzY4IEMxLjMzMzAyMDAxLDEzLjgzNzcxOTMgMi42NDkxNDAxMywxMy40NTM5MDE4IDMuNzM4NzcsMTIuNjgzMzUgTDE5LjI4NDQ4LDEuNjI4NjYgQzIxLjM2NjIzOTQsMC4xNDgzMTg1OTggMjQuMTU3MDEwNiwwLjE0ODMxODU5OCAyNi4yMzg3NywxLjYyODY2IEw0MS43ODQ0OCwxMi42ODMzNSBDNDIuNzI4MzU2MywxMy4zNTAwNDM4IDQzLjg0NTI4NSwxMy43Mjg3NzYgNDUsMTMuNzczNjggTDQ1LDAgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg')",
              }}
              className=" absolute top-full left-0 right-0  bg-repeat-x w-full h-[14px]"
            ></div>
          </div>
          {/* Bottom */}
          <div className="px-4 pt-2 py-4 flex flex-col items-center justify-center">
            {/* Item */}
            <ItemsNitendoStore />
            <button className="group relative z-[2] mt-4 font-semibold  rounded-sm text-xl  px-5 py-2 mr-0 duration-500 hover:bg-red-100  hover:text-secondary hover:hue-rotate-15">
              Shop all
              <div className="border border-secondary absolute inset-0 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 group-hover:bg-red-100 z-[-1] rounded-sm duration-300"></div>
            </button>
          </div>
        </div>
      );
    }
  };

  //Render Game
  const renderGame = () => {
    if (
      isOpenGame &&
      !isOpenNitendoStore &&
      !isOpenNitendoSwitch &&
      !isOpenNitendoPlay
    ) {
      return <ItemsGame handleCloseNitendoStore={handleCloseNitendoStore} />;
    }
  };

  //Render Nitendo Switch
  const renderNitendoSwitch = () => {
    if (
      isOpenNitendoSwitch &&
      !isOpenNitendoStore &&
      !isOpenGame &&
      !isOpenNitendoPlay
    ) {
      return (
        <ItemsNitendoSwitch handleCloseNitendoStore={handleCloseNitendoStore} />
      );
    }
  };

  //Render Nitendo Play
  const renderNitendoPlay = () => {
    if (
      isOpenNitendoPlay &&
      !isOpenNitendoStore &&
      !isOpenGame &&
      !isOpenNitendoSwitch
    ) {
      return (
        <ItemsNitendoPlay handleCloseNitendoStore={handleCloseNitendoStore} />
      );
    }
  };
  //If Nitendo content open , move = false
  useEffect(() => {
    if (
      isOpenNitendoStore ||
      isOpenGame ||
      isOpenNitendoSwitch ||
      isOpenNitendoPlay
    ) {
      setMoveNitendoStore(false);
    }
  }, [
    isOpenNitendoStore,
    isOpenGame,
    isOpenNitendoSwitch,
    isOpenNitendoPlay,
    setMoveNitendoStore,
  ]);

  return (
    <div
      className={`${
        isOpenNitendoStore ||
        isOpenGame ||
        isOpenNitendoSwitch ||
        isOpenNitendoPlay
          ? 'visible opacity-100'
          : 'invisible opacity-0'
      } fixed top-[96px] left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] z-[10]`}
      onClick={handleCloseNitendoStore}
    >
      {/* Content */}
      <div
        className={`
        ${
          isOpenNitendoStore ||
          isOpenGame ||
          isOpenNitendoSwitch ||
          isOpenNitendoPlay
            ? 'top-0 opacity-100 visible'
            : '-top-full opacity-0 invisible'
        } 
        ${
          moveNitendoStore && '-top-full'
        } absolute  left-0 bg-white w-full duration-500`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nitendo Store */}
        {renderNitendoStore()}
        {/* End Nitendo Store */}

        {/* Game */}
        {renderGame()}
        {/* End Game */}

        {/* Nitendo Switch */}
        {renderNitendoSwitch()}
        {/* End Nitendo Switch */}

        {/* Nitendo Play */}
        {renderNitendoPlay()}
        {/* End Nitendo Play */}
      </div>
    </div>
  );
};

export default NitendoStore;
