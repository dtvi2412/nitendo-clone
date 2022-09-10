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
          <Link to="/store/games" className="hover:text-secondary">
            Nitendo Switch Game
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            New Releases
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Sales & deals
          </Link>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.handle}</span>
          <h3>Hardware</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <Link to="/store/games" className="hover:text-secondary">
            Nitendo Switch systems
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Joy-Con & controllers
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Cases & more
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Replacement parts
          </Link>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.tshirt}</span>
          <h3>Merchanedise</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <Link to="/store/games" className="hover:text-secondary">
            Apparel & accessories
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Home & office
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Plush
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Toys
          </Link>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.star2}</span>
          <h3>Store Exclusives</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <Link to="/store/games" className="hover:text-secondary">
            Exclusive products
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            My nitendo rewards
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Nitendo Switch Online offers
          </Link>
        </div>
      </div>
      {/* Item */}
      <div>
        <div className="flex items-center font-semibold hover:text-secondary cursor-pointer">
          <span className="mr-[0.375rem] text-secondary">{imgs.charactor}</span>
          <h3>Charactor</h3>
        </div>
        <div className="flex flex-col items-start text-[0.875rem] duration-300 ">
          <Link to="/store/games" className="hover:text-secondary">
            Animal Crossing
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Kirby
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            Mario
          </Link>
          <Link to="/store/games" className="hover:text-secondary">
            The Legend of Zelda
          </Link>
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
