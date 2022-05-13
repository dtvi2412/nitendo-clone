import React from 'react';
import Background from '../Components/Background';
import Charactors from '../Components/Charactors';
import Digitals from '../Components/Digitals';
import Featured from '../Components/Featured';
import Footer from '../Components/Footer';
import GamingSystems from '../Components/GamingSystems';
import Header from '../Components/Header';
import HeaderTablet from '../Components/HeaderTablet';
import News from '../Components/News';
import OnlineStore from '../Components/OnlineStore';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderTablet />

      {/* Main content */}
      <div className="mt-[46px] lg:mt-24">
        <Background />
        <div class="md:w-[96%] mx-auto">
          <Featured />
        </div>
        <hr className="border border-[e5e7eb] mb-[20px]" />
        {/* Online Store */}
        <div className="mx-4 md:w-[96%] lg:w-[80%] md:mx-auto my-12">
          <OnlineStore />
        </div>
        <hr className="border border-[e5e7eb] mb-[20px]" />
        {/* Gaming systems */}
        <div className="mx-4 md:w-[96%] lg:w-[80%] md:mx-auto my-12">
          <GamingSystems />
        </div>
        <hr className="border border-[e5e7eb] mb-[20px]" />
        {/* News*/}
        <div className="mx-4 md:w-[96%] lg:w-[80%] md:mx-auto my-12">
          <News />
        </div>
        <hr className="border border-[e5e7eb] mb-[20px]" />
        {/* Charactors*/}
        <div className="mx-4 md:w-[96%] lg:w-[80%] md:mx-auto my-12">
          <Charactors />
        </div>
        <hr className="border border-[e5e7eb] mb-[20px]" />
        {/* Digitals*/}
        <div className="mx-4 md:w-[96%] lg:w-[80%] md:mx-auto my-12">
          <Digitals />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
