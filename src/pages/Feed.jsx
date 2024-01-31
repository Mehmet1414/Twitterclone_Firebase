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
      <div>Feed</div>
      <Button
        buttonClick={logoutUser}
        text={"Logout"}
        buttonStyle={{ backgroundColor: "black", color: "white" }}
      />
    </>
  );
};

export default Feed;
