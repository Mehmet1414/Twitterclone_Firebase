import React from "react";

const Button_post = ({
  buttonClick,
  i_class,
  text,
  b_class,
  s_class,
  count,
  c_class,
}) => {
  return (
    <>
      <button
        onClick={buttonClick}
        className={` group relative flex justify-center items-center hover:bg-sky-100 h-8 w-8  text-base text-gray-500 hover:text-sky-400 rounded-full text-center transition relative ${b_class}`}
      >
        <i className={` ${i_class}`}></i>
        <span
          className={`group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1 z-10 ${s_class}`}
        >
          {text}
        </span>
        <span
          className={`absolute text-xs group-hover:text-sky-400 text-gray-500 transition left-full ${c_class}`}
        >
          {count}
        </span>
      </button>
    </>
  );
};

export default Button_post;
