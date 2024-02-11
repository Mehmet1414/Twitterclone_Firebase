import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import TweetForm from "../components/TweetForm";
import { db } from "../firebase/firebaseConfig";

const Feed = () => {
  const [tweets, setTweets] = useState(null);
  //* kolleksiyon referans alir
  const tweetCol = collection(db, "tweets");

  //* EKrana ilk basildiginda veriyi cek
  useEffect(() => {
    // Veri her ddegistigindde state i günceller
    onSnapshot(tweetCol, (snapshot) => {
      const liveTweets = [];
      snapshot.forEach((doc) => {
        liveTweets.push({ ...doc.data(), id: doc.id });
      });

      // verileri state e aktar
      setTweets(liveTweets);
    });
  }, []);
  console.log(tweets);
  return (
    <>
      <div className="flex h-screen">
        <NavBar />
        <main className="border overflow-y-auto bg-slate-50 flex-1 h-screen">
          <div className="flex border-b text-gray-500 font-semibold">
            <span className="group text-center flex-1 hover:bg-gray-300 transition">
              <button className="  focus:text-gray-800 focus:border-b-4 focus:border-b-blue-400 py-4">
                For you
              </button>
            </span>
            <span className="text-center flex-1 hover:bg-gray-300 transition focus:text-gray-800 focus:">
              <button className=" focus:text-gray-800 focus:border-b-4 focus:border-b-blue-400 py-4">
                Following
              </button>
            </span>
          </div>
          <TweetForm />
          {tweets?.map((tweet) => (
            <Post tweet={tweet} />
          ))}
        </main>
        <section className="border h-screen bg-slate-100 max-md:hidden md:min-w-max">
          right sidebaright sidebarright
        </section>
      </div>
    </>
  );
};

export default Feed;
