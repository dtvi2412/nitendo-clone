import React from 'react';

const TextBorder = ({ text, width }) => {
  return (
    <a
      className={`${width} group-hover:text-[#ac000d] text-secondary font-bold border-b-2 border-secondary  mt-auto`}
      href="#readmore"
    >
      {text}
    </a>
  );
};

export default TextBorder;
