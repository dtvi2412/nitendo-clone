import React from 'react';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HeaderTablet from '../Components/HeaderTablet';
import NewsHero from '../Components/NewsHero';
import NewsTitle from '../Components/NewsTitle';
import StoreNofication from '../Components/StoreNofication';

const News = () => {
  return (
    <div>
      <Header />
      <HeaderTablet />
      <div className="mt-[46px] lg:mt-24">
        <StoreNofication />
        <NewsTitle />
        <NewsHero />
      </div>
      <Footer />
    </div>
  );
};

export default News;
