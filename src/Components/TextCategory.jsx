import React from 'react';

const TextCategory = ({ text, width }) => {
  return (
    <span
      className={`border-b-[2px] justify-self-end mt-auto ${width} border-[#e60012] pb-[0.125rem]`}
    >
      {text}
    </span>
  );
};

export default TextCategory;
