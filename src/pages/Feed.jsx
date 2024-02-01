import Button from "../components/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const logoutUser = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <>
      <div className="flex h-screen">
        <section className="border flex flex-col items-center gap-2 bg-slate-100 px-5 pt-8">
          <button className="group hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition relative">
            <i class="fa-solid fa-house"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Home
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Explore
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-regular fa-bell"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Notifications
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-regular fa-envelope"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Messages
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-regular fa-clipboard"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Lists
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-regular fa-bookmark"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Bookmarks
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-solid fa-users"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Communities
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-brands fa-twitter"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Premium
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-regular fa-user"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Profile
            </span>
          </button>
          <button className=" group relative hover:bg-gray-200 rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition">
            <i class="fa-solid fa-ellipsis"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1 z-10">
              More
            </span>
          </button>
          <button className=" group relative hover:bg-sky-600 bg-sky-500 rounded-full px-2 py-1 text-center h-14 w-14 text-2xl transition">
            <i class="fa-solid fa-feather-pointed text-slate-50"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Post
            </span>
          </button>
          <button className="bg-gray-200 group relative rounded-full px-2 py-1 text-center h-12 w-12 text-2xl transition mt-20">
            <i class="fa-regular fa-user"></i>
            <span className="group-hover:block text-xs hidden absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1">
              Profile
            </span>
          </button>
        </section>
        <main className="border bg-slate-50 flex-1">
          <nav className="flex border-b text-gray-500 font-semibold">
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
          </nav>
        </main>
        <section className="border bg-slate-100 max-sm:hidden md:min-w-max lg:flex-auto">
          right sidebar
        </section>
      </div>
      <Button
        buttonClick={logoutUser}
        text={"Logout"}
        buttonStyle={{ backgroundColor: "black", color: "white" }}
      />
    </>
  );
};

export default Feed;
