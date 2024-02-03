import React, { useState } from "react";
import Button_nav from "./Buttons/Button_nav";
import LogoutModal from "./Logout_modal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="border relative flex flex-col items-center gap-2 bg-slate-100 px-5 pt-8">
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Home"}
          i_class={"fa-solid fa-house"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Home"}
          i_class={"fa-solid fa-magnifying-glass"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Notifications"}
          i_class={"fa-regular fa-bell"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Messages"}
          i_class={"fa-regular fa-envelope"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Lists"}
          i_class={"fa-regular fa-clipboard"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Bookmarks"}
          i_class={"fa-regular fa-bookmark"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Communities"}
          i_class={"fa-solid fa-users"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Premium"}
          i_class={"fa-brands fa-twitter"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"Profile"}
          i_class={"fa-regular fa-user"}
        />
        <Button_nav
          b_class={"h-12 w-12"}
          text={"More"}
          i_class={"fa-solid fa-ellipsis"}
        />
        <Button_nav
          text={"Post"}
          i_class={"fa-solid fa-feather-pointed text-slate-50"}
          b_class={"bg-sky-500 hover:bg-sky-600 h-14 w-14"}
        />
        <Button_nav
          text={"Accounts"}
          i_class={"fa-regular fa-user"}
          s_class={
            "top-[-50%]  transform -translate-y-1/2 transition-all duration-1000 bg-gray-500 text-slate-50 p-1 rounded mt-1"
          }
          b_class={"mt-20 h-12 w-12"}
          handleButtonClick={openModal}
        />
      </section>
      <LogoutModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default NavBar;