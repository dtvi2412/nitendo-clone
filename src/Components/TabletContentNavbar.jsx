import React from 'react';
import {
  MY_NITENDO_STORE,
  TABLET_NAVBAR_GAME,
  TABLET_NAVBAR_NITENDO_SWITCH,
  TABLET_NAVBAR_PLAY_NITENDO,
} from '../Constants/index.js';
import imgs from '../images/svg.js';

const TabletContentNavbar = ({
  nameNavbar,
  onCloseContenntMenu,
  onChangeNameNavbar,
}) => {
  return (
    <div
      className={`${
        nameNavbar ? '-translate-x-full' : 'translate-x-0'
      } duration-300 w-full absolute top-0 bottom-0`}
    >
      {/* title and close icon */}
      <div className="headerTabletTop">
        <h1 className="headerTabletTop--title">Menu</h1>
        <div
          onClick={() => onCloseContenntMenu()}
          className="headerTabletTop--closeIcon"
        >
          {imgs.headerCloseIcon}
        </div>
      </div>
      {/* Navlist  */}
      <div className="headerTabletNavlist">
        {/* Navlist top */}
        <div className="headerTabletNavlist__top">
          {/* Item */}
          <div
            onClick={() => onChangeNameNavbar(MY_NITENDO_STORE)}
            className="headerTabletNavlistTopItem"
          >
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.store}</span>
              <span className="font-bold">My Nitendo Store</span>
            </div>
            <div>{imgs.headerArrowNextIcon}</div>
          </div>
          {/* Item */}
          <div
            onClick={() => onChangeNameNavbar(TABLET_NAVBAR_GAME)}
            className="headerTabletNavlistTopItem"
          >
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.game}</span>
              <span className="font-bold">Games</span>
            </div>
            <div>{imgs.headerArrowNextIcon}</div>
          </div>
          {/* Item */}
          <div
            onClick={() => onChangeNameNavbar(TABLET_NAVBAR_NITENDO_SWITCH)}
            className="headerTabletNavlistTopItem"
          >
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.switchIcon}</span>
              <span className="font-bold">Nitendo Switch</span>
            </div>
            <div>{imgs.headerArrowNextIcon}</div>
          </div>{' '}
          {/* Item */}
          <div className="headerTabletNavlistTopItem">
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.feedback}</span>
              <span className="font-bold">News & Events</span>
            </div>
          </div>
          {/* Item */}
          <div
            onClick={() => onChangeNameNavbar(TABLET_NAVBAR_PLAY_NITENDO)}
            className="headerTabletNavlistTopItem"
          >
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.star}</span>
              <span className="font-bold">Play Nitendo</span>
            </div>
            <div>{imgs.headerArrowNextIcon}</div>
          </div>
        </div>
        {/* End Navlist top */}

        {/* Navlist bottom */}
        <div className="mt-4 bg-white">
          {/* Item */}
          <div className="headerTabletNavlistTopItem">
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.support}</span>
              <span className="font-bold">Support</span>
            </div>
          </div>
          {/* Item */}
          <div className="headerTabletNavlistTopItem">
            <div className="flex items-center">
              <span className="mr-2 text-secondary">{imgs.region}</span>
              <span className="font-bold">Change Region</span>
            </div>
          </div>
        </div>
        {/* End Navlist bottom */}
      </div>
    </div>
  );
};

export default TabletContentNavbar;
