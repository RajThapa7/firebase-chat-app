import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAuth, onAuthStateChanged  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt7MW16JQ4v_mMP16nML8Fxps_8L-V15I",
  authDomain: "chat-app-eb934.firebaseapp.com",
  projectId: "chat-app-eb934",
  storageBucket: "chat-app-eb934.appspot.com",
  messagingSenderId: "656706711015",
  appId: "1:656706711015:web:2c0b93674d25396be4e142",
  measurementId: "G-6T07JNH0Z2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default getFirestore();
