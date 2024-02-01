import NavBar from "../components/NavBar";
import TweetForm from "../components/TweetForm";

const Feed = () => {
  return (
    <>
      <div className="flex h-screen">
        <NavBar />
        <main className="border bg-slate-50 flex-1">
          <head className="flex border-b text-gray-500 font-semibold">
            <span className="text-center flex-1 hover:bg-gray-300 transition">
              <button className="  focus:text-gray-800 focus:border-b-4 focus:border-b-blue-400 py-4">
                For you
              </button>
            </span>
            <span className="text-center flex-1 hover:bg-gray-300 transition focus:text-gray-800 focus:">
              <button className=" focus:text-gray-800 focus:border-b-4 focus:border-b-blue-400 py-4">
                Following
              </button>
            </span>
          </head>
          <TweetForm />
        </main>
        <section className="border bg-slate-100 max-sm:hidden md:min-w-max lg:flex-auto">
          right sidebar
        </section>
      </div>
    </>
  );
};

export default Feed;
