import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HeaderTablet from '../Components/HeaderTablet';
import StoreGamesBackground from '../Components/StoreGamesBackground';
import StoreGamesBottom from '../Components/StoreGamesBottom';
import StoreGamesButtons from '../Components/StoreGamesButtons';
import StoreGamesMid from '../Components/StoreGamesMid';
import StoreGamesTop from '../Components/StoreGamesTop';
import StoreNofication from '../Components/StoreNofication';

const StoreGames = () => {
  return (
    <div>
      <Header />
      <HeaderTablet />
      <div className="mt-[46px] lg:mt-24">
        <StoreNofication />
        <StoreGamesBackground />
        <StoreGamesButtons />
        <StoreGamesTop />
        <StoreGamesMid />
        <StoreGamesBottom />
      </div>
      <Footer />
    </div>
  );
};

export default StoreGames;
