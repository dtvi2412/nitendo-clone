import imgs from '../images/svg.js';
import gold from '../images/background/my-nintendo-gold-coin.png';
import rule from '../images/background/rule.png';
import Button from './Button';
import HeartIcon from './HeartIcon';

import useProduct from '../Hooks/useProduct.jsx';

const DetailProduct = () => {
  const { product } = useProduct();

  return (
    <div className="mt-4 flex flex-col md:flex-row gap-12">
      {/* Left */}
      <div className="flex-[1] flex flex-col gap-3">
        <div className="w-full md:max-w-[650px]">
          <img
            className="w-full h-full object-cover"
            src={product?.linkImg}
            alt={product?.title}
          />
        </div>
        <div className="hidden md:flex  items-center gap-3">
          <img
            className="h-[60px] w-[40px] object-cover"
            src={rule}
            alt="rule"
          />
          <span className=" text-[0.8rem] font-light">{product?.title}</span>
        </div>
      </div>
      {/* Right */}
      <div className="flex-[1] flex flex-col gap-3 pt-0 px-4 pb-4 md:p-0">
        <div className="flex items-center gap-3">
          <span className="bg-[#3946A0] text-white rounded-[0.25rem] py-[0.125rem] px-4 text-center font-bold text-[0.9rem]">
            DLC
          </span>
          <div>
            <span className="border-b-2 border-secondary font-light pb-[0.125rem]">
              Nitendo Switch
            </span>
          </div>
        </div>
        <h1 className="mt-4 mb-8 text-[1.75rem] font-bold leading-[1.35]">
          {product?.title}
        </h1>
        <div className="flex items-center justify-between">
          <span className="text-[1.75rem] font-bold">${product?.price}</span>
          <HeartIcon />
        </div>
        <div className="flex items-center gap-3 my-4">
          <img
            className="w-[24px] h-[24px] object-cover rounded-full"
            src={gold}
            alt={gold}
          />
          <p className="text-[0.75rem]">
            Eligible for up to <b> 100 </b> Gold Points
          </p>
        </div>
        <Button
          text="Direct download"
          lgMaxWidth="w-full py-8"
          icon={imgs.downloadIcon}
        />
        <p className="text-[0.75rem] mt-3">
          This item will be sent to your system automatically after purchase.
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;
