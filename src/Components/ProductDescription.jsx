import React from 'react';
import useProduct from '../Hooks/useProduct.jsx';
import imgs from '../images/svg.js';
const ProductDescription = () => {
  const { product } = useProduct();
  return (
    <div className="mt-16 mb-12">
      <div className="w-[96%] md:w-[78%] mx-auto flex flex-col items-start md:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-[1]">
          <p className="text-[1em]">
            Play as an Octoling in this DLC*/game add-on content that features a
            full-on single-player adventure spanning 80 missions starring Agent
            8, a character who awakens on a dark subway platform. Navigate this
            mysterious underground test facility in a desperate battle to reach
            the surface of Inkopolis. Escape from these twisted depths, and
            you’ll be able to join multiplayer** matches as an Octoling!
          </p>
          <p className="text-[1em]">
            With the <em>Splatoon™ 3</em> game on the horizon, this DLC is the
            perfect way to get in some practice before you take on the
            Splatlands!
          </p>
          <p className="text-[1em]">
            Players can access the Splatoon 2: Octo Expansion DLC at no
            additional cost with a paid Nintendo Switch Online + Expansion Pack
            membership*** or choose to purchase the DLC separately. You must own
            the full version of the Splatoon 2 game to play the DLC (sold
            separately). Players will also get special octo-themed in-game gear.
          </p>
          <div className="flex items-center text-secondary gap-2">
            <span>{imgs.plusIcon}</span>
            <span className="font-bold text-[0.9rem]">Read more</span>
          </div>
        </div>
        <div className="flex-[1]">
          <img
            className="w-full h-full object-contain max-h-[24em]"
            src={product?.linkImg2}
            alt={product?.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
