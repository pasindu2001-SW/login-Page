import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_FzZm5filVDGJKkQjIV24MZfAAXjNrjA",
  authDomain: "login-page-dc817.firebaseapp.com",
  projectId: "login-page-dc817",
  storageBucket: "login-page-dc817.firebasestorage.app",
  messagingSenderId: "922870265253",
  appId: "1:922870265253:web:0bf61c4375cb7358ff244c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();