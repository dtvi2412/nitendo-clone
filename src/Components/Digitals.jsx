import React from 'react';
import DigitalBestSellers from './DigitalBestSellers';
import DigitalNewReleases from './DigitalNewReleases';

const Digitals = () => {
  return (
    <div className="flex flex-col gap-20">
      <DigitalBestSellers />
      <DigitalNewReleases />
    </div>
  );
};

export default Digitals;
