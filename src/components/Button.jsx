import React from "react";

const Button = ({ text, imgUrl, buttonStyle, buttonType, buttonClick }) => {
  return (
    <>
      <button
        className=" w-full flex justify-center items-center gap-3 rounded-full border py-2 font-semibold hover:bg-zinc-200 hover:opacity-80 transition-all"
        style={buttonStyle}
        type={buttonType}
        onClick={buttonClick}
      >
        <img className="w-6" src={imgUrl} />
        {text}
      </button>
    </>
  );
};

export default Button;
