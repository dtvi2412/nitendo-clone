import React from 'react';

const Button = ({
  text,
  lgMaxWidth,
  icon,
  className,
  colorText,
  bgColor,
  border,
}) => {
  return (
    <button
      className={`${
        className && className
      } group relative flex items-center justify-center ${
        bgColor ? bgColor : 'bg-secondary '
      } z-[1] ${
        colorText ? colorText : 'text-white'
      }  rounded-[0.25rem] text-lg font-bold w-full ${
        lgMaxWidth ? lgMaxWidth : 'lg:max-w-[168px]'
      }
      ${border}
      h-[46px]`}
    >
      {icon ? <div className="mr-3">{icon}</div> : null}
      {text}
      <div
        className={`${
          bgColor ? bgColor : 'bg-secondary'
        }  group-hover:bg-red-700 absolute inset-0 group-hover:-top-1 group-hover:-left-1 group-hover:-bottom-1 group-hover:-right-1 z-[-1] rounded-sm duration-300`}
      ></div>
    </button>
  );
};

export default Button;
