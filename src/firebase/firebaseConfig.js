import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9HumUimCi6LCb4g3y1lsmdJVNyER5vzM",
  authDomain: "uzum-216b0.firebaseapp.com",
  projectId: "uzum-216b0",
  storageBucket: "uzum-216b0.firebasestorage.app",
  messagingSenderId: "57263069850",
  appId: "1:57263069850:web:b404deed2b067e893f9d23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
