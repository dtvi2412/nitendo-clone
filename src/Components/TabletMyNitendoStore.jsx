import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MY_NITENDO_STORE } from '../Constants/index.js';
import imgs from '../images/svg.js';
const TabletMyNitendoStore = ({
  nameNavbar,
  onCloseContenntMenu,
  onBackNavbar,
}) => {
  const [nameOpenListInItem, setNameOpenListInItem] = useState('');

  const handlePrevNavbar = () => {
    setNameOpenListInItem('');
    onBackNavbar();
  };

  const handleCloseContentNavbar = () => {
    setNameOpenListInItem('');
    onCloseContenntMenu();
  };

  //Resize
  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 1024) {
        setNameOpenListInItem('');
      }
    };
    window.addEventListener('resize', handleResize);

    //clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    !nameNavbar && setNameOpenListInItem('');
  }, [nameNavbar]);
  return (
    <div
      className={`${
        nameNavbar === MY_NITENDO_STORE ? 'translate-x-0' : 'translate-x-full'
      }  w-full absolute top-0 bottom-0 duration-300 `}
    >
      {/* Title and icon close */}
      <div className="headerTabletTop">
        <div
          onClick={() => handlePrevNavbar()}
          className="headerTabletTop--prevIcon"
        >
          {imgs.headerArrowPrevIcon}
        </div>
        <h1 className="headerTabletTop--title">My Nitendo Store</h1>
        <div
          onClick={() => handleCloseContentNavbar()}
          className="headerTabletTop--closeIcon"
        >
          {imgs.headerCloseIcon}
        </div>
      </div>
      {/* Content */}
      <div className="headerTabletNavlist">
        <div className="headerTabletNavlist__top">
          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <Link to="/store/games">
                <span className="font-bold">Shop all</span>
              </Link>
            </div>
          </div>
          {/* Item */}
          <div className="overflow-y-hidden">
            <div
              onClick={() =>
                nameOpenListInItem === 'Games'
                  ? setNameOpenListInItem('')
                  : setNameOpenListInItem('Games')
              }
              className="headerTabletNavlistTopItemHoverNoColor"
            >
              <div className="flex items-center">
                <span className="font-bold">Games</span>
              </div>

              <div
                className={`${
                  nameOpenListInItem === 'Games' && 'rotate-180'
                } duration-300`}
              >
                {imgs.headerArrowDownIcon}
              </div>
            </div>
            {/* Lists in item */}
            <div
              className={`${
                nameOpenListInItem === 'Games'
                  ? 'h-auto max-h-[185px] py-4'
                  : 'h-0 max-h-0'
              } bg-[#efefef] duration-300`}
            >
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#shopallgames"
              >
                Shop all games
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#shopallgames"
              >
                Nintendo Switch games
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#shopallgames"
              >
                New releases
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#shopallgames"
              >
                Sales & deals
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="overflow-y-hidden">
            <div
              onClick={() =>
                nameOpenListInItem === 'Hardware'
                  ? setNameOpenListInItem('')
                  : setNameOpenListInItem('Hardware')
              }
              className="headerTabletNavlistTopItemHoverNoColor"
            >
              <div className="flex items-center">
                <span className="font-bold">Hardware</span>
              </div>
              <div
                className={`${
                  nameOpenListInItem === 'Hardware' && 'rotate-180'
                } duration-300`}
              >
                {imgs.headerArrowDownIcon}
              </div>
            </div>
            {/* Lists in item */}
            <div
              className={`${
                nameOpenListInItem === 'Hardware'
                  ? 'h-auto max-h-auto py-4'
                  : 'h-0 max-h-0'
              } bg-[#efefef] duration-300`}
            >
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#hardware"
              >
                Shop all hardware
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#systems"
              >
                Nintendo Switch systems
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#controllers"
              >
                Joy-Con & controllers
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#Cases">
                Cases & more
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#Replacement"
              >
                Replacement parts
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="overflow-y-hidden">
            <div
              onClick={() =>
                nameOpenListInItem === 'Merchandise'
                  ? setNameOpenListInItem('')
                  : setNameOpenListInItem('Merchandise')
              }
              className="headerTabletNavlistTopItemHoverNoColor"
            >
              <div className="flex items-center">
                <span className="font-bold">Merchandise</span>
              </div>
              <div
                className={`${
                  nameOpenListInItem === 'Merchandise' && 'rotate-180'
                } duration-300`}
              >
                {imgs.headerArrowDownIcon}
              </div>
            </div>
            {/* Lists in item */}
            <div
              className={`${
                nameOpenListInItem === 'Merchandise'
                  ? 'h-auto max-h-auto py-4'
                  : 'h-0 max-h-0'
              } bg-[#efefef] duration-300`}
            >
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#merchandise"
              >
                Shop all merchandise
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#accessories"
              >
                Apparel & accessories
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#office">
                Home & office
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#Plush">
                Plush
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#Toys">
                Toys
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="overflow-y-hidden">
            <div
              onClick={() =>
                nameOpenListInItem === 'Store exclusives'
                  ? setNameOpenListInItem('')
                  : setNameOpenListInItem('Store exclusives')
              }
              className="headerTabletNavlistTopItemHoverNoColor"
            >
              <div className="flex items-center">
                <span className="font-bold">Store exclusives</span>
              </div>
              <div
                className={`${
                  nameOpenListInItem === 'Store exclusives' && 'rotate-180'
                } duration-300`}
              >
                {imgs.headerArrowDownIcon}
              </div>
            </div>
            {/* Lists in item */}
            <div
              className={`${
                nameOpenListInItem === 'Store exclusives'
                  ? 'h-auto max-h-auto py-4'
                  : 'h-0 max-h-0'
              } bg-[#efefef] duration-300`}
            >
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#exclusives"
              >
                Shop all store exclusives
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#products"
              >
                Exclusive products
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#rewards"
              >
                My Nintendo rewards
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#offers">
                Nintendo Switch Online offers
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="overflow-y-hidden">
            <div
              onClick={() =>
                nameOpenListInItem === 'Characters'
                  ? setNameOpenListInItem('')
                  : setNameOpenListInItem('Characters')
              }
              className="headerTabletNavlistTopItemHoverNoColor"
            >
              <div className="flex items-center">
                <span className="font-bold">Characters</span>
              </div>
              <div
                className={`${
                  nameOpenListInItem === 'Characters' && 'rotate-180'
                } duration-300`}
              >
                {imgs.headerArrowDownIcon}
              </div>
            </div>
            {/* Lists in item */}
            <div
              className={`${
                nameOpenListInItem === 'Characters'
                  ? 'h-auto max-h-auto py-4'
                  : 'h-0 max-h-0'
              } bg-[#efefef] duration-300`}
            >
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#characters"
              >
                Shop all characters
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#products"
              >
                Animal Crossing
              </a>
              <a
                className="block h-[38px] pl-8 pr-4 font-light"
                href="#rewards"
              >
                Kirby
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#Mario">
                Mario
              </a>
              <a className="block h-[38px] pl-8 pr-4 font-light" href="#Zelda">
                The Legend of Zelda
              </a>
            </div>
          </div>
          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <span className="font-bold">Sales & deals</span>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default TabletMyNitendoStore;
