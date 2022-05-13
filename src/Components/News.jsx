import React from 'react';
import Button from './Button';

import imgs from '../images/svg.js';
import CardNew from './CardNew';
import { dataNewsCard } from '../data.js';

const News = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <h1 className="text-[1.725rem] font-bold">News</h1>
      {/* List News */}
      <div className=" grid grid-cols-4 gap-8">
        {dataNewsCard.map((item, index) => {
          if (index <= 1) {
            return (
              <CardNew
                colSpan="col-span-4 md:col-span-2"
                fs="text-[1.125rem]"
                item={item}
                key={item.id}
              />
            );
          } else {
            return (
              <CardNew
                colSpan="col-span-2 md:col-span-1"
                fs="text-[0.8725rem] md:text-[1rem]"
                item={item}
                key={item.id}
              />
            );
          }
        })}
      </div>
      {/* Button */}
      <Button
        icon={imgs.feedback}
        lgMaxWidth="lg:max-w-[250px]"
        text="See all news articles"
      />
    </div>
  );
};

export default News;
