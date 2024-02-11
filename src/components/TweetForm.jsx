import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import Button_post from "./Buttons/Button_post";
import Profile_Png from "../assets/user.png";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const TweetForm = () => {
  //*firebase veritabanindan referans al
  const tweetCollection = collection(db, "tweets");

  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  //* input focus kontrol
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //* Mesaji Formdan al
    const buttonId = e.nativeEvent.submitter.id;
    let content;
    {
      (buttonId === "sendButton") & (content = e.target[0].value);
    }
    //* tweet'i collection'a ekle
    await addDoc(tweetCollection, {
      content,
      imgContent: null,
      createDate: serverTimestamp(),
      user: {
        name: auth?.currentUser?.displayName,
        profilePic: auth?.currentUser?.photoURL
          ? auth?.currentUser?.photoURL
          : Profile_Png,
      },
      likes: [],
    });
    e.target[0].value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full border-b flex mt-3">
        <div className="pl-3 ">
          <img
            className="w-12 rounded-full"
            src={
              auth?.currentUser?.photoURL
                ? auth.currentUser.photoURL
                : Profile_Png
            }
          />
        </div>
        <div className="flex-1 px-4 ">
          <input
            className="w-full px-2 py-2 bg-transparent text-lg outline-none"
            type="text"
            placeholder="What is happening?"
            ref={inputRef}
            onChange={handleInputChange}
          />
          <div className=" text-sky-500 border-b pb-2">
            <button className="flex items-center px-2 rounded-full hover:bg-sky-100 gap-2 text-sky-500 font-semibold text-sm transition">
              <i className="fa-solid fa-earth-americas"></i>
              Everyone can reply
            </button>
          </div>
          <nav className="flex justify-between px-2 py-3 text-sky-500">
            <div className="flex text-sm ">
              <Button_post
                text={"Media"}
                i_class={"fa-regular fa-image text-base"}
                b_class={"text-sky-400"}
              />
              <Button_post
                text={"GIF"}
                i_class={"fa-solid fa-clapperboard text-base"}
                b_class={"text-sky-400"}
              />

              <Button_post
                text={"Poll"}
                i_class={"fa-solid fa-list-check text-base"}
                b_class={"text-sky-400"}
              />
              <Button_post
                text={"Emoji"}
                i_class={"fa-regular fa-face-smile text-base"}
                b_class={"text-sky-400"}
              />
              <Button_post
                text={"Schedule"}
                i_class={"fa-regular fa-calendar-days text-base"}
                b_class={"text-sky-400"}
              />
            </div>
            <div>
              <button
                className="flex items-center px-2 rounded-full text-slate-50 gap-2 bg-sky-500 font-semibold py-2 hover:bg-sky-600 transition disabled:cursor-default disabled:bg-sky-500"
                disabled={!inputValue.trim()}
                id="sendButton"
              >
                <i className="fa-regular fa-paper-plane"></i>
                Send
              </button>
            </div>
          </nav>
        </div>
      </form>
    </>
  );
};

export default TweetForm;
