import React from 'react';
import { TABLET_NAVBAR_NITENDO_SWITCH } from '../Constants/index.js';
import imgs from '../images/svg.js';
const TabletNavbarNitendoSwitch = ({
  nameNavbar,
  onCloseContenntMenu,
  onBackNavbar,
}) => {
  const handlePrevNavbar = () => {
    onBackNavbar();
  };

  const handleCloseContentNavbar = () => {
    onCloseContenntMenu();
  };

  return (
    <div
      className={`${
        nameNavbar === TABLET_NAVBAR_NITENDO_SWITCH
          ? 'translate-x-0'
          : 'translate-x-full'
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
        <h1 className="headerTabletTop--title">Nintendo Switch</h1>
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
              <span className="font-bold">Nintendo Switch lineup</span>
            </div>
          </div>

          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <span className="font-bold">Compare systems</span>
            </div>
          </div>
          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <span className="font-bold">Online service</span>
            </div>
          </div>
          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <span className="font-bold">Accessories</span>
            </div>
          </div>
          {/* Item */}
          <div className="headerTabletNavlistTopItemHoverNoColor">
            <div className="flex items-center">
              <span className="font-bold">Shop systems</span>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default TabletNavbarNitendoSwitch;
