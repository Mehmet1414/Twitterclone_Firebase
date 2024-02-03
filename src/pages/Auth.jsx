import { useFormik } from "formik";
import Button from "../components/Buttons/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  appleProvider,
} from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { data } from "autoprefixer";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  //* Form Gönder
  const onSubmit = (values) => {
    console.log(values);
    //* create Acount
    if (signUp) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((data) => {
          navigate("/home");
          console.log(data);
        })
        .catch((error) => toast.error(error.code));
    } else {
      //* login
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((data) => {
          navigate("/home");
          console.log(data);
        })
        .catch((error) => toast.error(error.code));
    }
  };
  //* Form Yönetimi
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  //* Google ile giris
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  //* Apple ile giris
  const appleLogin = () => {
    signInWithRedirect(auth, appleProvider)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <>
      <div className="bg-zinc-400 h-screen flex justify-center items-center">
        <form
          className="flex flex-col items-center justify-center  gap-6 bg-zinc-50 w-[580px] h-[640px] sm:rounded-xl max-sm:w-full max-sm:h-full"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <img
              className="h-14"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
            />
          </div>
          <h1 className="font-semibold text-3xl">Sign in to Twitter</h1>
          <div className="w-80 flex flex-col gap-4 border-b-2 border-zinc-400  pb-6 relative">
            <Button
              imgUrl={".//src/assets/google.png"}
              text={"Sign in with Google"}
              buttonClick={googleLogin}
              buttonType={"submit"}
            />
            <Button
              imgUrl={".//src/assets/apple.png"}
              text={"Sign in with Apple"}
              buttonClick={appleLogin}
              buttonType={"submit"}
            />
            <p className=" text-center absolute bottom-[-10%] right-2/4 bg-zinc-50 px-3">
              or
            </p>
          </div>
          <div className="w-80 flex flex-col gap-4">
            <input
              className=" py-2 rounded border px-2
               "
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={
                formik.values.email
                /* formik.values.username |
                formik.values.phone */
              }
            />
            <input
              className=" py-2 rounded border px-2
               "
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <div className="flex flex-col justify-center items-center gap-3">
              <Button
                buttonStyle={{
                  backgroundColor: "black",
                  color: "white",
                }}
                text={"Login"}
                buttonType={"submit"}
              />
              <p>Do you not already have an account?</p>
              <Button
                text={"Create new Acount"}
                buttonType={"submit"}
                buttonClick={() => setSignUp(true)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
