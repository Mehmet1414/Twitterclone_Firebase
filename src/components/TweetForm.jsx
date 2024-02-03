import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import Button_nav from "./Buttons/Button_nav";
import Profile_Png from "../assets/user.png";
const TweetForm = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <section className="w-full border-b flex mt-3">
        <div className="pl-3 ">
          <img
            className="w-12 rounded-full"
            src={
              auth.currentUser.photoURL
                ? auth.currentUser.photoURL
                : Profile_Png
            }
          />
        </div>
        <div className="flex-1 px-4 ">
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
            <div className="flex text-sm ">
              <Button_nav
                text={"Media"}
                i_class={"fa-regular fa-image text-base"}
                b_class={"hover:bg-sky-100"}
              />
              <Button_nav
                text={"GIF"}
                i_class={"fa-solid fa-clapperboard text-base"}
                b_class={"hover:bg-sky-100"}
              />

              <Button_nav
                text={"Poll"}
                i_class={"fa-solid fa-list-check text-base"}
                b_class={"hover:bg-sky-100"}
              />
              <Button_nav
                text={"Emoji"}
                i_class={"fa-regular fa-face-smile text-base"}
                b_class={"hover:bg-sky-100"}
              />
              <Button_nav
                text={"Schedule"}
                i_class={"fa-regular fa-calendar-days text-base"}
                b_class={"hover:bg-sky-100"}
              />
            </div>
            <div>
              <button
                className="flex items-center px-2 rounded-full text-slate-50 gap-2 bg-sky-500 font-semibold py-2 hover:bg-sky-600 transition"
                disabled={inputValue.length === 0}
              >
                <i class="fa-regular fa-paper-plane"></i>
                Send
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default TweetForm;
