import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const TweetForm = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  return (
    <>
      <section className="w-full border-b flex mt-3">
        <img className="w-12 h-8" src="..//src/assets/user.png" />
        <div className="flex-1 px-6">
          <input
            className="px-2 py-2 bg-transparent text-lg outline-none"
            type="text"
            placeholder="What is happening?"
            ref={inputRef}
            onChange={handleInputChange}
          />
          <div className=" text-sky-500 border-b pb-2">
            <button className="flex items-center px-2 rounded-full hover:bg-sky-100 gap-2 text-sky-500 font-semibold text-sm transition">
              <i class="fa-solid fa-earth-americas"></i>
              Everyone can reply
            </button>
          </div>
          <nav className="flex justify-between px-2 py-3 text-sky-500">
            <div className="flex gap-5 ">
              <button>
                <i class="fa-regular fa-image"></i>
              </button>
              <button>
                <i class="fa-solid fa-clapperboard"></i>
              </button>
              <button>
                <i class="fa-solid fa-list-check"></i>
              </button>
              <button>
                <i class="fa-regular fa-face-smile"></i>
              </button>
              <button>
                <i class="fa-regular fa-calendar-days"></i>
              </button>
            </div>
            <div>
              <button
                className="flex items-center px-2 rounded-full text-slate-50 gap-2 bg-sky-500 font-semibold py-2 hover:bg-sky-600 transition"
                disabled={inputValue.length === 0}
              >
                <i class="fa-regular fa-paper-plane"></i>
                Post
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default TweetForm;
