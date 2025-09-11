// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAQmRX9NK4zelk3dFxQy__rJ2j8ffx4FI",
  authDomain: "daily-needs-d10fa.firebaseapp.com",
  projectId: "daily-needs-d10fa",
  storageBucket: "daily-needs-d10fa.firebasestorage.app",
  messagingSenderId: "667611682329",
  appId: "1:667611682329:web:ef8ef41cc7e590b33b3c88",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // named export
export const googleProvider = new GoogleAuthProvider();
