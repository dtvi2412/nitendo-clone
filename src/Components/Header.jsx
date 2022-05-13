import React, { useEffect, useRef, useState } from 'react';
import {
  AiOutlineSearch,
  AiFillHeart,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { BsChevronDown, BsFillCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import imgs from '../images/svg.js';
import SuggestSearch from './SuggestSearch.jsx';
import BottomHeader from './BottomHeader';
import NitendoStore from './NitendoStore';
import NavRightMenu from './NavRightMenu.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isChooseCategories, setIsChooseCategories] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [moveSuggest, setMoveSuggest] = useState(false);

  const [isOpenNavLogin, setIsOpenNavLogin] = useState(false);

  const [isOpenNitendoStore, setIsOpenNitendoStore] = useState(false);
  const [moveNitendoStore, setMoveNitendoStore] = useState(false);

  const [isOpenGame, setIsOpenGame] = useState(false);
  const [isOpenNitendoSwitch, setIsOpenNitendoSwitch] = useState(false);
  const [isOpenNitendoPlay, setIsOpenNitendoPlay] = useState(false);

  const timeoutIsOpenSearchRef = useRef(null);
  const timeoutIsOpenNitendoStoreRef = useRef(null);

  //Handle close container search
  const handleCloseSearch = () => {
    setMoveSuggest(!moveSuggest);
    timeoutIsOpenSearchRef.current = setTimeout(() => {
      setIsOpenSearch(false);
      setIsChooseCategories(false);
    }, 250);
  };

  //Handle Open Nav Login
  const handleOpenNavLogin = () => {
    setIsOpenNavLogin(true);

    setIsOpenNitendoStore(false);
    setIsOpenGame(false);
    setIsOpenNitendoPlay(false);
    setIsOpenNitendoSwitch(false);

    setIsChooseCategories(false);
  };

  //Handle Close Nav Login
  const handleCloseNavLogin = () => {
    setIsOpenNavLogin(false);

    setIsChooseCategories(false);
  };

  //Handle close container Nitendo Store
  const handleCloseNitendoStore = () => {
    setMoveNitendoStore(!moveNitendoStore);
    timeoutIsOpenNitendoStoreRef.current = setTimeout(() => {
      setIsChooseCategories(false);
      setIsOpenNitendoStore(false);
      setIsOpenGame(false);
      setIsOpenNitendoSwitch(false);
      setIsOpenNitendoPlay(false);
    }, 250);
  };

  useEffect(() => {
    function closeHeaderContent() {
      const innerWidth = window.innerWidth;
      if (innerWidth <= 1024) {
        setIsOpenSearch(false);
        setIsChooseCategories(false);

        setIsOpenNitendoStore(false);
        setMoveNitendoStore(false);
        setIsOpenGame(false);
        setIsOpenNitendoSwitch(false);
        setIsOpenNitendoPlay(false);

        setIsOpenNavLogin(false);
      }
    }

    window.addEventListener('resize', closeHeaderContent);

    //clean up
    return () => {
      clearTimeout(timeoutIsOpenSearchRef.current);
      clearTimeout(timeoutIsOpenNitendoStoreRef.current);
      window.removeEventListener('resize', closeHeaderContent);
    };
  }, []);

  return (
    <>
      {/* header fixed top-0 left-0 right-0  */}
      <header className="bg-secondary  lg:bg-primary">
        {/* Top Header */}
        <div
          className={`${
            isOpenSearch
              ? 'lg:border-b lg:border-white'
              : 'lg:border-b lg:border-[#dadada]'
          } flex items-center justify-between fixed top-0 left-0 right-0 z-[9999] bg-secondary lg:bg-primary`}
        >
          {/* Left  */}
          <div className="flex items-center justify-between">
            {/* Logo  */}
            <Link
              to="/"
              className="text-white w-[105px] h-[52px] bg-secondary flex items-center justify-center"
            >
              {imgs.logo}
            </Link>
            {/* Search */}
            <div className="hidden lg:flex items-center mx-5 border-b border-black font-[0.875rem] h-[2.125rem] hover:border-[#E60012] cursor-pointer">
              <div
                className="flex items-center min-w-[300px] hover:text-secondary"
                onClick={() => {
                  setIsOpenSearch(true);
                  setIsChooseCategories(false);
                }}
              >
                <AiOutlineSearch className="text-[1.4rem] mr-[10px]" />
                <input
                  className="border-none outline-none text-black hover:placeholder:text-secondary placeholder:text-[0.9rem] "
                  placeholder="Search game, hardware, news, etc"
                />
              </div>
              <div>
                {/* Choose select  */}
                <div
                  className="relative flex items-center text-black font-semibold hover:text-secondary z-[9999]"
                  onClick={setIsChooseCategories.bind(
                    this,
                    !isChooseCategories
                  )}
                >
                  <h3 className="mr-2">All categories</h3>
                  <BsChevronDown
                    className={`${
                      isChooseCategories ? 'rotate-180' : 'rotate-0'
                    } duration-500`}
                  />

                  {/* Option  */}
                  {isChooseCategories && (
                    <div
                      onMouseMove={(e) => e.stopPropagation()}
                      className="absolute top-full left-0 w-full  bg-white border border-[#dddddd] shadow-lg py-1 text-thirdColor text-[0.875rem] rounded-md z-[999]"
                    >
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">
                        All Categories
                      </p>
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">Games</p>
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">
                        Hardware
                      </p>
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">
                        Merchandise
                      </p>
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">
                        News & Events
                      </p>
                      <p className="px-2 hover:bg-[#dbdbdb] py-[2px]">
                        Support
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Close Search  */}
            {isOpenSearch && (
              <div
                className="hidden lg:block ml-2 text-3xl cursor-pointer"
                onClick={handleCloseSearch}
              >
                <AiFillCloseCircle />
              </div>
            )}
          </div>
          {/* Right */}
          {!isOpenSearch && (
            <div className="hidden lg:flex items-center px-5">
              <div className="flex items-center hover:text-secondary cursor-pointer mr-4 font-semibold">
                <span className="mr-2">{imgs.support}</span>
                <h3 className="text-[0.925rem]">Support</h3>
              </div>
              <div className="flex items-center hover:text-secondary cursor-pointer mr-4 font-semibold">
                <span className="mr-2">
                  <AiFillHeart />
                </span>
                <h3 className="text-[0.925rem]">Wish List</h3>
              </div>
              <div className="flex items-center hover:text-secondary cursor-pointer mr-4 font-semibold">
                <span className="mr-2">
                  <BsFillCartFill />
                </span>
                <h3 className="text-[0.925rem]">Cart</h3>
              </div>
              <div className="flex items-center hover:text-secondary cursor-pointer font-semibold">
                <span className="mr-2">
                  <FaUser />
                </span>
                <h3 onClick={handleOpenNavLogin} className="text-[0.925rem]">
                  Log in / Sign up
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Header  */}
        <div className="hidden lg:block fixed top-[52px] left-0 right-0 z-[100]">
          <BottomHeader
            isOpenNitendoStore={isOpenNitendoStore}
            isOpenGame={isOpenGame}
            isOpenNitendoSwitch={isOpenNitendoSwitch}
            isOpenNitendoPlay={isOpenNitendoPlay}
            setIsChooseCategories={setIsChooseCategories}
            setIsOpenNitendoStore={setIsOpenNitendoStore}
            setIsOpenGame={setIsOpenGame}
            setIsOpenNitendoSwitch={setIsOpenNitendoSwitch}
            setIsOpenNitendoPlay={setIsOpenNitendoPlay}
            setIsOpenNavLogin={setIsOpenNavLogin}
            handleCloseNitendoStore={handleCloseNitendoStore}
          />
        </div>

        {/* Suggest Search */}
        <div className="hidden lg:block ">
          <SuggestSearch
            moveSuggest={moveSuggest}
            setMoveSuggest={setMoveSuggest}
            isOpenSearch={isOpenSearch}
            setIsOpenSearch={setIsOpenSearch}
            handleCloseSearch={handleCloseSearch}
          />
        </div>

        {/* My Nitendo Store */}

        <div className="hidden lg:block">
          <NitendoStore
            isOpenNitendoStore={isOpenNitendoStore}
            isOpenGame={isOpenGame}
            isOpenNitendoSwitch={isOpenNitendoSwitch}
            isOpenNitendoPlay={isOpenNitendoPlay}
            moveNitendoStore={moveNitendoStore}
            setMoveNitendoStore={setMoveNitendoStore}
            setIsOpenGame={setIsOpenGame}
            setIsOpenNitendoStore={setIsOpenNitendoStore}
            handleCloseNitendoStore={handleCloseNitendoStore}
          />
        </div>
      </header>
      <NavRightMenu
        onCloseNavLogin={handleCloseNavLogin}
        isOpenNavLogin={isOpenNavLogin}
      />
    </>
  );
};

export default Header;
