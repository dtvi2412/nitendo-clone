import React from 'react';
import Slider from 'react-slick';
import { GrFormNext } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { dataDigitalNewReleases } from '../data';
import CardDigital from './CardDigital';

//Custom Arrow in Slick
const Arrow = ({ isRightSide, className, style, onClick }) => {
  return (
    <div
      className={`${className}  ${
        isRightSide ? 'arrowRight' : 'arrowLeft'
      } z-[1000] opacity-0  group-hover:opacity-50 duration-500 `}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    >
      <GrFormNext
        className={`${isRightSide ? 'rotate-0' : 'rotate-180'} text-white`}
      />
    </div>
  );
};
const DigitalNewReleases = () => {
  // Setting Slick
  let settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    initialSlide: 3,
    nextArrow: <Arrow isRightSide={true} />,
    prevArrow: <Arrow isRightSide={false} />,
    responsive: [
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col gap-16">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h1 className="text-[1.75rem] font-bold ">Digital new releases</h1>
      </div>
      {/* Lists Card Best sellers */}
      <div className="">
        {/* React Slick */}
        <Slider className="relative group" {...settings}>
          {dataDigitalNewReleases.map((item) => (
            <CardDigital key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DigitalNewReleases;
