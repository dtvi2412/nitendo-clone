import React from 'react';
import Slider from 'react-slick';

import { GrFormNext } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { dataFutured } from '../data';
import CardFutured from './CardFutured';

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

const ListsCardFutured = () => {
  let settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    // flex  justify-between
    <div className="w-[96%] mx-auto md:w-full">
      <Slider className="relative group" {...settings}>
        {dataFutured.map((item) => (
          <CardFutured key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default ListsCardFutured;
