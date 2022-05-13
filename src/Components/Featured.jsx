import React from 'react';
import ListsCardFutured from './ListsCardFutured';

const Featured = () => {
  return (
    <div className="my-8 pb-4">
      <div>
        <h1 className="mx-4 text-[1.725rem] font-semibold md:mx-0">Featured</h1>
      </div>
      <ListsCardFutured />
    </div>
  );
};

export default Featured;
