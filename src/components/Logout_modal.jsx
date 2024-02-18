import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const LogoutModal = ({ isModalOpen, closeModal }) => {
  const navigate = useNavigate();
  const logoutUser = () => {
    signOut(auth);
    navigate("/");
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-slate-50/5 opacity-50 z-50"
          onClick={handleOverlayClick}
        ></div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-50/5">
          <div className=" absolute flex flex-col justify-center items-end gap-2 bottom-20 left-12 bg-white z-50 w-80 h-40 rounded-xl shadow-2xl">
            <button className="absolute px-4 top-0 left-0" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="w-full font-semibold py-2 hover:bg-slate-100 transition">
              Add an existing account
            </button>
            <button
              className="w-full font-semibold py-2 hover:bg-slate-100 transition"
              onClick={logoutUser}
            >
              Logout ({auth.currentUser.email})
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
