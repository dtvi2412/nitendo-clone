import React, { useEffect, useState } from 'react';
import Button from './Button';
import bgPC from '../images/background/bg-pc.png';
import bgTablet from '../images/background/bg-tablet.png';
import rule from '../images/background/rule.png';

const Background = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const changeWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', changeWindowHeight);
    return () => window.removeEventListener('resize', changeWindowHeight);
  }, []);
  return (
    <div className="relative -z-[1] ">
      {/* Fade Background */}
      <div className="hidden md:block  absolute top-0 left-0 w-full h-[calc(11.4rem)] bg-gradient-to-b from-[#ffd5eb] to-[#fff] "></div>
      {/* End Fake Background */}
      {/* Fake Height  */}
      <div
        className={`${
          windowHeight < 800
            ? 'h-[650px] lg:h-[570px]'
            : windowHeight < 914
            ? 'h-[850px] lg:h-[650px]'
            : windowHeight < 1000
            ? 'h-[850px] md:h-[680px] lg:h-[850px]'
            : 'h-[850px] md:h-[690px] lg:h-[690px]'
        }  md:h-[380px] `}
      ></div>
      <div>
        {/* Image Background */}
        <div className="w-full md:w-[96%] h-[86vh] md:h-[48vh] lg:h-[72vh] mx-auto md:pt-8 absolute top-0 left-0 right-0">
          {/* Pc Image */}
          <img
            className="hidden md:block w-full h-full object-cover md:object-fill "
            src={bgPC}
            alt="background nitendo"
          />
          {/* Tablet Image */}
          <img
            className="md:hidden w-full h-full object-fill"
            src={bgTablet}
            alt="background nitendo tablet"
          />
        </div>
        {/* Title */}
        <div className="border-b border-[#dcdcdc] pb-12 bottom-0  w-[96%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <h1 className="text-[#484848] text-[1.75rem] font-[700] hover:cursor-text text-center">
            Float off on an all-new adventure with Kirby
          </h1>
          <Button text="Avaiable now" />
          {/* Everyone 18+ */}
          <div className="flex items-center">
            <div className="w-10 h-[60px]">
              <img className="w-full h-full" src={rule} alt="every one 18+" />
            </div>
            <p className="text-[#6b6b6b] ml-2 text-[0.8rem]">
              Cartoon Violence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
