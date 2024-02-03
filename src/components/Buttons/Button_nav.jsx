import React from "react";

const Button_nav = ({ text, i_class, s_class, b_class, handleButtonClick }) => {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`group hover:bg-gray-200 rounded-full px-2 py-1 text-center text-2xl transition relative ${b_class}`}
      >
        <i className={i_class}></i>
        <span
          className={`group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-600 text-slate-50 p-1 rounded mt-1 z-10 ${s_class}`}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default Button_nav;
