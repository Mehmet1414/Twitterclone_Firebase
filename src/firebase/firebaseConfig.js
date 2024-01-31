// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//* import edilmesi gerekenler
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoXPDEvZDl0IOt6XT6HsDcXgwxg5BsQpw",
  authDomain: "twitter-clone-51896.firebaseapp.com",
  projectId: "twitter-clone-51896",
  storageBucket: "twitter-clone-51896.appspot.com",
  messagingSenderId: "683119498364",
  appId: "1:683119498364:web:b1d89d3caa6ceabce125f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//* Yetkilendirme kurulumu
export const auth = getAuth(app);

//*google giris kurulumu
export const googleProvider = new GoogleAuthProvider();
