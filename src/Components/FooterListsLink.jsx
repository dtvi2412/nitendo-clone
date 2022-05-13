import React from 'react';

const FooterListsLink = ({ title, linksList }) => {
  return (
    <div className="border-l border-gray-300 pl-6 lg:border-l-0">
      <h1 className="text-[1.125rem] font-bold mb-4">{title}</h1>
      <div className="text-secondary text-[1rem] font-bold flex flex-col gap-2">
        {linksList.map((item) => (
          <a key={item.id} className="inline-block" href="#careers">
            <span className="group relative hover:text-[#ac000d]">
              {item.name}
              <div className="group-hover:opacity-100 opacity-0 duration-500 absolute top-[calc(100%+4px)] left-0 right-0 bg-[#ac000d] h-[1px]"></div>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterListsLink;
