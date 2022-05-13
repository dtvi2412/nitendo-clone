import React from 'react';
import { Link } from 'react-router-dom';
import imgs from '../images/svg';
import HeartIcon from './HeartIcon';
import TextCategory from './TextCategory';

const CardDigital = ({
  item: { title, linkImg, category, price, sale, status },
}) => {
  return (
    <Link to={`/products/${title}`}>
      <div className="cardDigital">
        {/* Top */}
        <div className="">
          {/* Image */}
          <div className="cardDigital__wrapperImg">
            <img
              className="w-full h-full object-cover"
              src={linkImg}
              alt={title}
            />
            {status && (
              <div
                className={`${
                  status === 'New!'
                    ? 'bg-secondary '
                    : status === 'Free demo'
                    ? 'bg-[#0061FB]'
                    : status === 'DLC bundle' && 'bg-[#6F00CB]'
                } text-white absolute top-0 left-0 right-0 z-1 text-center py-1 font-bold `}
              >
                {status}
              </div>
            )}
          </div>
          <h1 className="cardDigital__title">{title}</h1>{' '}
        </div>
        {/* Bottom */}
        <div className="relative mt-auto px-4 py-1 mb-4">
          {sale ? (
            <>
              <div className="relative ml-[9px]">
                <span className="bg-secondary text-white text-[0.875rem] px-[1px] py-[2px]  pr-1 text-bold">
                  {sale}%
                </span>
                <div className="absolute top-[1px] bottom-0 right-[calc(100%-1px)]  w-[8px]  text-secondary">
                  {imgs.clipSale}
                </div>
              </div>
              <div className="flex">
                <p className="text-base font-bold mr-2">
                  ${(price - (price * sale) / 100).toFixed(2)}
                </p>
                <p className="text-base font-light line-through">${price}</p>
              </div>
            </>
          ) : (
            <p className="text-base font-bold ">${price}</p>
          )}

          <div className="flex items-center justify-between">
            <TextCategory text={category} width="w-[120px]" />
            <HeartIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDigital;
