import React from 'react';
import BreadCrumbsProduct from './BreadCrumbsProduct';
import DetailProduct from './DetailProduct';
import ProductCopyRight from './ProductCopyRight';
import ProductDescription from './ProductDescription';
import ProductStory from './ProductStory';
import ProductSupport from './ProductSupport';

const HeroProduct = () => {
  return (
    <div>
      {/* Background */}
      <div className="bg-[rgb(16,18,23)]">
        {/* Content */}
        <div className="shadow-custom py-1 md:py-8 px-1 md:px-12 bg-white rounded-[0] border-b border-[#dedede] lg:border-b-transparent lg:rounded-[0.25rem] max-w-[1240px] mx-auto my-0 shadow-primary  lg:translate-y-[2em]">
          <BreadCrumbsProduct />
          <DetailProduct />
        </div>
      </div>
      {/* Description */}
      <ProductDescription />
      <ProductStory />
      <ProductSupport />
      <ProductCopyRight />
    </div>
  );
};

export default HeroProduct;
