import React, { useEffect } from 'react';
import CardSearch from './CardSearch';

const SuggestSearch = ({
  isOpenSearch,
  handleCloseSearch,
  setMoveSuggest,
  moveSuggest,
}) => {
  useEffect(() => {
    if (isOpenSearch) setMoveSuggest(false);
  }, [isOpenSearch, setMoveSuggest]);

  return (
    <div
      onClick={handleCloseSearch}
      className={`${
        isOpenSearch ? 'visible opacity-100' : 'invisible opacity-0'
      }
      fixed top-[52px] bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-[1000]`}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute ${
          isOpenSearch
            ? 'top-0 opacity-100 visible'
            : '-top-full opacity-0 invisible'
        } 
        ${moveSuggest && '-top-full'}
        duration-500 left-0 w-full bg-white min-h-[17.5rem] pl-[7.5625rem] pr-[3.3625rem] pt-[0.75rem] pb-[2.5rem] z-[1000] `}
      >
        <div className="flex items-start flex-col gt-1440:flex-row gt-1440:items-center ">
          {/* Trending */}
          <div className="mr-auto">
            <p className="text-thirdColor font-bold mb-3">Trending topics</p>
            <div className="flex flex-col text-secondary font-semibold">
              <a className=" mb-2 hover:text-[#ac000d]" href="#animal">
                Animal Crossing
              </a>
              <a className=" mb-2 hover:text-[#ac000d]" href="#Nintendo">
                Nintendo Switch
              </a>
              <a className=" mb-2 hover:text-[#ac000d]" href="#games">
                Nintendo Switch Games
              </a>
              <a className=" mb-2 hover:text-[#ac000d]" href="#zelda">
                Zelda games
              </a>
              <a className=" mb-2 hover:text-[#ac000d]" href="#pokemon">
                Pokémon games
              </a>
            </div>
          </div>
          {/* Store Product */}
          <div>
            <p className="text-thirdColor font-bold mb-[0.75rem]">
              Top store products
            </p>
            <div className="grid grid-cols-2 gap-4">
              <CardSearch
                image={
                  'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_700/b_rgb:ffffff/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero'
                }
                title="Kirby™ and the Forgotten Land"
                category="Nintendo Switch"
              />
              <CardSearch
                image={
                  'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_auto,f_auto,q_auto,w_auto:100/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero'
                }
                title="Pokémon™ Legends: Arceus"
                category="Nintendo Switch"
              />{' '}
              <CardSearch
                image={
                  'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_2.0,f_auto,q_auto,w_700/b_rgb:ffffff/v1/ncom/en_US/games/switch/m/metroid-dread-switch/hero'
                }
                title="Metroid™ Dread"
                category="Nintendo Switch"
              />
              <CardSearch
                image={
                  'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_2.0,f_auto,q_auto,w_700/b_rgb:ffffff/v1/ncom/en_US/games/switch/b/big-brain-academy-brain-vs-brain-switch/hero'
                }
                title="Big Brain Academy™: Brain vs. Brain"
                category="Nintendo Switch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestSearch;
