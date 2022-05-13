import React from 'react';
import { Link } from 'react-router-dom';
import imgs from '../images/svg.js';

const ItemsNitendoStore = () => {
  return (
    <div className="flex items-start gap-7 justify-center">
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.game}</span>
          <h3>Games</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <Link
            to="/store/games"
            className="hover:text-secondary"
            href="#Nitendo"
          >
            Nitendo Switch Game
          </Link>
          <a className="hover:text-secondary" href="#Nitendo">
            New Releases
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Sales & deals
          </a>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.handle}</span>
          <h3>Hardware</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <a className="hover:text-secondary" href="#Nitendo">
            Nitendo Switch systems
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Joy-Con & controllers
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Cases & more
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Replacement parts
          </a>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.tshirt}</span>
          <h3>Merchanedise</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <a className="hover:text-secondary" href="#Nitendo">
            Apparel & accessories
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Home & office
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Plush
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Toys
          </a>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.star2}</span>
          <h3>Store Exclusives</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <a className="hover:text-secondary" href="#Nitendo">
            Exclusive products
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            My nitendo rewards
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Nitendo Switch Online offers
          </a>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.charactor}</span>
          <h3>Charactor</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <a className="hover:text-secondary" href="#Nitendo">
            Animal Crossing
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Kirby
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            Mario
          </a>
          <a className="hover:text-secondary" href="#Nitendo">
            The Legend of Zelda
          </a>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.charactor}</span>
          <h3>Sales & deals</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemsNitendoStore;
