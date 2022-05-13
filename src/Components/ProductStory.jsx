import React from 'react';
import useProduct from '../Hooks/useProduct';
import Button from './Button';

const ProductStory = () => {
  const { product } = useProduct();
  return (
    <div className="bg-[rgb(234,235,234)] py-20">
      <div className="max-w-[71.5rem] mx-4 lg:w-[96%] lg:mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-[1]">
          <img
            className="w-full h-full object-cover"
            src={product?.linkImg}
            alt={product?.title}
          />
        </div>
        <div className="flex-[1] bg-white p-8 rounded-[0.25rem] text-[0.875rem] sm:text-[1rem] font-light flex flex-col gap-4">
          <h1 className="text-[1rem] sm:text-[1.325rem] font-bold">
            Become a Nintendo Switch Online + Expansion Pack member
          </h1>
          <p>
            If you have an active Nintendo Switch Online + Expansion Pack
            membership, you have access to the
          </p>
          <p>
            If you do not have a Nintendo Switch Online + Expansion Pack
            membership, learn how to <a href="#signup">sign up</a>
          </p>
          <Button text="Download" />
        </div>
      </div>
    </div>
  );
};

export default ProductStory;
