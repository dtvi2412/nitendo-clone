import React, { useEffect, useRef, useState } from 'react';
import imgs from '../images/svg.js';
import TabletContentNavbar from './TabletContentNavbar.jsx';
import TabletLogin from './TabletLogin.jsx';
import TabletMyNitendoStore from './TabletMyNitendoStore.jsx';
import TabletNavbarGames from './TabletNavbarGames.jsx';
import TabletNavbarNitendoSwitch from './TabletNavbarNitendoSwitch.jsx';
import TabletNavbarPlayNitendo from './TabletNavbarPlayNitendo.jsx';

const HeaderTablet = () => {
  const [isOpenListHeader, setIsOpenListHeader] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [nameNavbar, setNameNavbar] = useState('');

  const contentListMenuRef = useRef(null);
  const loginRef = useRef(null);
  const timeOutContentHeader = useRef(null);

  //Handle close content list menu
  const handleCloseContenntMenu = () => {
    const TIMEOUT = 300;

    contentListMenuRef.current.classList.remove('animate-header-tb-move');
    contentListMenuRef.current.classList.add('animate-header-tb-close');

    loginRef.current.classList.remove('animate-header-tb-login-move');
    loginRef.current.classList.add('animate-header-tb-login-close');

    timeOutContentHeader.current = setTimeout(() => {
      contentListMenuRef.current.classList.remove('animate-header-tb-close');
      contentListMenuRef.current.classList.add('animate-header-tb-move');

      loginRef.current.classList.remove('animate-header-tb-login-close');
      loginRef.current.classList.add('animate-header-tb-login-move');

      setIsOpenListHeader(false);
      setIsOpenLogin(false);
      setNameNavbar('');
    }, TIMEOUT);
  };

  //Handle Open Content menu
  const handleOpenContentMenu = () => {
    setIsOpenListHeader(true);
    setIsOpenLogin(false);
  };

  //Handle Back Navbar
  const handleBackNavbar = () => {
    setNameNavbar('');
  };

  //Handle change name nitendo store
  const handleChangeNameNavbar = (name) => {
    setNameNavbar(name);
  };

  //Handle Open Login
  const handleOpenLogin = () => {
    setIsOpenLogin(true);

    setIsOpenListHeader(false);
    setNameNavbar('');
  };

  //Resize cleanup timeout
  useEffect(() => {
    const handleResize = (e) => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 1024) {
        setIsOpenListHeader(false);
        setIsOpenLogin(false);
        setNameNavbar('');
      }
    };
    window.addEventListener('resize', handleResize);

    //clean up
    return () => {
      clearTimeout(timeOutContentHeader.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Bg black behind content */}
      <div
        onClick={() => handleCloseContenntMenu()}
        className={`${
          isOpenListHeader || isOpenLogin ? 'fixed' : 'hidden'
        } top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-[9998] lg:hidden`}
      ></div>
      {/* Content */}
      <div className="lg:hidden fixed left-1/2 -translate-x-1/2 bottom-6 z-[9999] bg-white rounded-full">
        <div className="">
          {/* List Icon */}
          <div className="bg-white z-[101] relative shadow-inner shadow-gray-200 border border-[#eeeeee] rounded-full pl-6 pr-6 md:pl-10 md:pr-10 flex items-center justify-between gap-4 sm:gap-10">
            {/* Icon */}
            <div
              onClick={() =>
                isOpenListHeader
                  ? handleCloseContenntMenu()
                  : handleOpenContentMenu()
              }
              className="flex items-center justify-center h-[58px] hover:text-secondary cursor-pointer duration-300"
            >
              {isOpenListHeader
                ? imgs.headerCloseIcon
                : imgs.headerTabletListIcon}
            </div>
            {/* Icon */}
            <div className="flex items-center justify-center h-[58px] hover:text-secondary cursor-pointer duration-300">
              {imgs.headerTabletHeartIcon}
            </div>
            {/* Icon */}
            <div className="-mt-4 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary text-white cursor-pointer duration-300">
              {imgs.headerTabletSearchIcon}
            </div>
            {/* Icon */}
            <div className="flex items-center justify-center h-[58px] hover:text-secondary cursor-pointer duration-300">
              {imgs.headerTabletCartIcon}
            </div>
            {/* Icon */}
            <div
              onClick={() =>
                isOpenLogin ? handleCloseContenntMenu() : handleOpenLogin()
              }
              className="flex items-center justify-center h-[58px] hover:text-secondary cursor-pointer duration-300"
            >
              {isOpenLogin ? imgs.headerCloseIcon : imgs.headerTabletUserIcon}
            </div>
          </div>
          {/* Content Header Tablet*/}
          <div className={`${isOpenListHeader ? 'block' : 'hidden'}`}>
            <div
              ref={contentListMenuRef}
              className="animate-header-tb-move h-[calc(60vh)] overflow-hidden z-[100] absolute left-0 bottom-[29px] w-full border-t border-l border-r border-[rgb(239,239,239)]  rounded-tl-2xl rounded-tr-2xl "
            >
              {/* All content in row */}
              <div className="flex items-center">
                {/* Navbar tablet */}
                <TabletContentNavbar
                  nameNavbar={nameNavbar}
                  onCloseContenntMenu={handleCloseContenntMenu}
                  onChangeNameNavbar={handleChangeNameNavbar}
                />
                {/* End navbar tablet */}
                <TabletMyNitendoStore
                  nameNavbar={nameNavbar}
                  onCloseContenntMenu={handleCloseContenntMenu}
                  onBackNavbar={handleBackNavbar}
                />
                <TabletNavbarGames
                  nameNavbar={nameNavbar}
                  onCloseContenntMenu={handleCloseContenntMenu}
                  onBackNavbar={handleBackNavbar}
                />
                <TabletNavbarNitendoSwitch
                  nameNavbar={nameNavbar}
                  onCloseContenntMenu={handleCloseContenntMenu}
                  onBackNavbar={handleBackNavbar}
                />
                <TabletNavbarPlayNitendo
                  nameNavbar={nameNavbar}
                  onCloseContenntMenu={handleCloseContenntMenu}
                  onBackNavbar={handleBackNavbar}
                />
              </div>
            </div>
          </div>
          {/* Content Login */}
          <div
            ref={loginRef}
            className={`${
              isOpenLogin ? 'block ' : 'hidden'
            } animate-header-tb-login-move h-[calc(80vh)] overflow-hidden z-[100] absolute left-0 bottom-[29px] w-full border-t border-l border-r border-[rgb(239,239,239)]  rounded-tl-2xl rounded-tr-2xl`}
          >
            <TabletLogin onCloseContenntMenu={handleCloseContenntMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTablet;
