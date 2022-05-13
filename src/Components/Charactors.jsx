import React from 'react';
import Charactor from './Charactor';
import { dataCharactors } from '../data.js';

const Charactors = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <h1 className="text-[1.75rem] font-bold">Charactors</h1>
      {/* List Charactor */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {dataCharactors.map((item) => (
          <Charactor key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Charactors;
