import React from 'react';
import useProduct from '../Hooks/useProduct.jsx';
import imgs from '../images/svg.js';
const BreadCrumbsProduct = () => {
  const { product } = useProduct();

  return (
    <div className="pt-4 pl-4 md:pt-0 md:pl-0">
      <ol className="flex items-center text-[rgb(150,150,150)] font-semibold text-[0.775rem] gap-2">
        <li>
          <a href="#store" className="flex items-center">
            Store
            <span className="ml-2">{imgs.arrowNextBreadCrums}</span>
          </a>
        </li>
        <li>
          <a href="#store" className="flex items-center">
            Games <span className="ml-2">{imgs.arrowNextBreadCrums}</span>
          </a>
        </li>
        <li className="text-black ">
          <a href="#store" className="flex items-center">
            {product?.title}
          </a>
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumbsProduct;
