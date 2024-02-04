import React from "react";

const Button_nav = ({ text, i_class, b_class, handleButtonClick }) => {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`group h-12 w-12 hover:bg-gray-200 max-lg:justify-center items-center
        rounded-full max-lg:px-2 py-1 text-center text-2xl transition max-lg:relative ${b_class} lg:flex lg:w-full lg:gap-2 lg:pl-4`}
      >
        <i className={i_class}></i>
        <span
          className={`max-lg:group-hover:block text-xs max-lg:hidden max-lg:absolute max-lg:top-full max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 transition-all duration-1000  max-lg:bg-gray-600  max-lg:text-slate-50 p-1 max-lg:rounded mt-1 z-10 lg:text-xl `}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default Button_nav;
