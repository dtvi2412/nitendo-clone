import React, { useEffect, useState } from 'react';
import Button from './Button';
import imgs from '../images/svg.js';
import HeartIcon from './HeartIcon';
import { dataNewsCard, dataStoreGames } from '../data.js';
import { useParams } from 'react-router-dom';

const NewsHero = () => {
  const [news, setNews] = useState([]);
  const [singleNew, setSingleNew] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    const getProductIsNew = dataStoreGames.filter(
      (item) => item.category === 'news'
    );
    setNews([...dataNewsCard, ...getProductIsNew]);
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const cloneNews = [...news];
      const singleNew = cloneNews.filter((prev) => prev.title === title);
      setSingleNew(...singleNew);
    }
  }, [title, news]);

  return (
    <div>
      {/* Background */}
      <div className="bg-[#EAE2C4]">
        {/* Image */}
        <div className="max-w-[75ch] mx-auto">
          <div className="translate-y-0 lg:translate-y-[2em]">
            <img
              className="w-full h-full object-contain"
              src={singleNew?.linkImg}
              alt={singleNew?.title}
            />
          </div>
        </div>
        {/* End Image */}
      </div>
      {/* Content */}
      <div className="px-4 md:px-0 max-w-[75ch] mx-auto mt-10 md:mt-16">
        {/* Title */}
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            <p>{singleNew?.date}</p>
            <p className="border-l-2 border-secondary pl-2">Nitendo Switch</p>
            <p>{imgs.switchIcon}</p>
          </div>

          <Button text="Learn more" />
        </div>
        {/* End title */}
        <div className="flex flex-col gap-4 my-12">
          <h1 className="font-bold text-[1.75rem]">{singleNew?.title}</h1>
          <p className="font-light text-[1rem]">
            {singleNew?.desc}
            <br />
            Knockout players will gain a new Attack mechanic that can be used to
            send opponents flying! But Attack isn’t your only option, as crafty
            players can use the new Block to reflect Attacks back at their foe.
            Tired of chasing your opponents around? The new Grab mechanic allows
            players to pick up other cars, carry them around, and even throw
            them across the Arena. Players will also get new moves like Triple
            Jump and Multi Dodge—essential for recovering after being thrown
            from the Arena.
            <br />
            Speaking of Arenas, Knockout has 3 brand new ones: Calavera, Carbon,
            and Quadron. Each Arena has no walls, and in their place appears the
            Safezone, a translucent dome surrounding each Arena. While its name
            might sound comforting, you’ll be in real trouble if you ever leave.
            Cars that are thrown out of the safe zone must return within 10
            seconds or face elimination!
          </p>
          <h3 className="font-bold text-[1.175rem]">
            To the victor go the spoils
          </h3>
          <p className="font-light text-[1rem]">
            Knockout Bash will include spring-themed rewards like the
            Florescence Wheels, Monarch Boost, or the animated Flutterby Decal.
            <br />
            Throughout Knockout Bash, players can also unlock Golden Gift
            Baskets containing a mix of Items from the Victory, Accelerator, and
            Turbo Item Series. Complete the Challenge up to five times to earn
            Golden Gift Baskets, then open them in your Inventory to unlock
            items!
          </p>
        </div>
      </div>
      {/* End content */}

      {/* Card */}
      <div className="max-w-[71.5rem] mx-4 lg:mx-auto my-12">
        <div className="border border-gray-300 rounded-sm">
          <div className="m-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-[1]">
                <img
                  className="w-full h-full object-cover"
                  src={singleNew?.linkImg}
                  alt="game news"
                />
              </div>
              <div className="flex-[1] md:flex-[3] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-3">
                <div className="flex-[1] gap-3 flex justify-start md:justify-between items-start flex-col">
                  <h1 className="font-bold text-[1.125rem]">Rocket League®</h1>
                  <p className="font-bold">$0</p>
                  <div className="flex flex-row md:flex-col gap-2">
                    <span className="border-l-[3px] border-secondary pl-2">
                      Nitendo Switch
                    </span>
                    <HeartIcon />
                  </div>
                </div>
                <Button className="flex-[1]" text="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
