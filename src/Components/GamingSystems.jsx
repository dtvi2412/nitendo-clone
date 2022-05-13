import React from 'react';
import Button from './Button';
import bgSwitch from '../images/background/bg-switch.png';
import { Link } from 'react-router-dom';

const GamingSystems = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-[1.75rem] font-bold">Gaming systems</h1>
      <div className="cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={bgSwitch}
          alt="gaming systems"
        />
      </div>
      <Link to="/store/games">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <h3 className="text-[1.3125rem] font-bold">
            Find the perfect Nintendo Switch system for you.
          </h3>

          <Button text="Explore now" />
        </div>
      </Link>
    </div>
  );
};

export default GamingSystems;
