import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
  
} from "firebase/auth";

/// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//   };
  const firebaseConfig={
   apiKey: "AIzaSyCKBnNU_Y_pi3hl-hgdURKnoV90jHp3aaM",
   authDomain: "movie-app-b3ac4.firebaseapp.com",
   projectId: "movie-app-b3ac4",
   storageBucket: "movie-app-b3ac4.appspot.com",
   messagingSenderId: "230325040889",
   appId: "1:230325040889:web:20a90245b4f11fa8ec9428"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// * create user

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/")
    console.log(userCredential);
   
  } catch (err) {
    console.log(err.message);
  }
};


/* => Authentication => sign-in-method => enable Email/password
//* ====================== SİGN ======================*/
export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      
      console.log(userCredential);
    } catch (err) {
      console.log(err.message);
    }
  };



