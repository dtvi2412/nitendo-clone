import React from 'react';
import bgStoreGame from '../images/background/bg-store-games.avif';
import imgs from '../images/svg.js';
const StoreGamesBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgStoreGame})`,
        width: '100%',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
      className="flex items-center justify-between"
    >
      {/* Content */}
      <div className="w-[96%] mx-auto my-8 flex flex-col lg:flex-row  gap-4 items-center justify-between">
        {/* Left */}
        <div className="bg-[rgba(0,0,0,0.6)] rounded text-white p-8">
          <div className="flex items-center gap-3">
            <span>{imgs.switchIconLarge}</span>
            <h1 className="text-[2.375rem] font-bold">Games</h1>
          </div>
          <p>
            Buy digital games here and download them directly to your Nintendo
            Switch™ system (no code required)! Plus, shop physical games, sales,
            new releases, and more.{' '}
          </p>
          <div></div>
        </div>
        {/* Right */}
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_1000/v1/ncom/en_US/merchandising/curated%20list/games%20-%20main%20page/2400x1200_Games_KirbyandtheForgottenLand_v01"
            alt="bg-store-games"
          />
        </div>
      </div>
      {/* End content */}
    </div>
  );
};

export default StoreGamesBackground;
