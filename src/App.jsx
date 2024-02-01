import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
        console.log(user);
      } else {
        navigate("/");
        console.log("kullanici yok");
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
