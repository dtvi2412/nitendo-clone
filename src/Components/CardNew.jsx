import React from 'react';
import { Link } from 'react-router-dom';
import TextBorder from './TextBorder';

const CardNew = ({ colSpan, fs, item }) => {
  return (
    <div
      className={`${
        colSpan ? colSpan : 'col-span-1'
      } flex flex-col justify-start gap-2 md:gap-4 cursor-pointer group `}
    >
      {' '}
      <Link to={`/news/${item.title}`}>
        {/* Image */}
        <div className="rounded-md overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={item.linkImg}
            alt={item.title}
          />
          {/* Fake bg image */}
          <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 w-full h-full bg-[rgba(0,0,0,0.5)] absolute inset-0" />
        </div>
        <span className="text-[1rem] font-light">{item.date}</span>
        <h1
          className={`${fs} font-bold group-hover:text-secondary duration-500`}
        >
          {item.title && item.title.length > 100
            ? `${item.title.slice(0, 72)}...`
            : item.title}
        </h1>
        <p className="text-[1rem] font-light">
          {item.desc && item.desc.length > 120
            ? `${item.desc.slice(0, 120)}...`
            : item.desc}
        </p>
        <TextBorder text="Read more" width="w-[86px]" />{' '}
      </Link>
    </div>
  );
};

export default CardNew;
