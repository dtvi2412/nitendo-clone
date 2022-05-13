import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HeaderTablet from '../Components/HeaderTablet';
import HeroProduct from '../Components/HeroProduct';
import StoreNofication from '../Components/StoreNofication';

const Product = () => {
  return (
    <div>
      <Header />
      <HeaderTablet />
      <div className="mt-[46px] lg:mt-24">
        <StoreNofication />
        <HeroProduct />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
