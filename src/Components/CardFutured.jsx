import React from 'react';
import { Link } from 'react-router-dom';
import TextCategory from './TextCategory';

const CardFutured = ({ item }) => {
  const { linkImg, title, categoryName } = item;

  return (
    <Link to={`/products/${item.title}`}>
      <div className="cardFutured">
        {/* Image */}
        <div className="cardFutured__wrapper--img">
          <img className="w-full" src={linkImg} alt={title} />
        </div>
        <h3 className="cardFutured__title">{title}</h3>
        <div className="px-4 pt-0 pb-4 flex flex-col justify-between text-left text-[0.87rem] mt-auto">
          {categoryName && (
            <TextCategory text={categoryName} width="w-[107px]" />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardFutured;
