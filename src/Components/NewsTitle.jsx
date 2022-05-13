import React from 'react';
import imgs from '../images/svg.js';

const NewsTitle = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2 w-[96%] mx-auto">
      <div className="flex items-center font-bold text-[1.375rem] md:text-[2.375rem]">
        <span className="w-8">{imgs.feedbackLarge}</span>
        <h1>News</h1>
      </div>
      <a
        href="#seeall"
        className="text-secondary border-b-2 border-secondary pb-[2px] font-bold text-[0.775rem] md:text-[1rem]"
      >
        See all news articles
      </a>
    </div>
  );
};

export default NewsTitle;
