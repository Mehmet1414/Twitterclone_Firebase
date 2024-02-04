import React from "react";

const Button_nav = ({
  text,
  i_class,
  b_class,
  handleButtonClick,
  imgUrl,
  img_class,
}) => {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`group h-12 w-12 hover:bg-gray-200 max-xl:justify-center items-center
        rounded-full max-xl:px-2 py-1 text-center text-xl transition max-xl:relative ${b_class} xl:flex xl:items-center xl:w-full xl:gap-2 xl:pl-4`}
      >
        <img className={img_class} src={imgUrl} />
        <i className={i_class}></i>
        <span
          className={`max-xl:group-hover:block text-xs max-xl:hidden max-xl:absolute max-xl:top-full max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 transition-all duration-1000  max-xl:bg-gray-600  max-xl:text-slate-50 p-1 max-xl:rounded max-xl:mt-1 z-10 xl:text-xl xl `}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default Button_nav;
