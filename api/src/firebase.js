// firebase.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-news-blog.firebaseapp.com",
  projectId: "mern-news-blog",
  storageBucket: "mern-news-blog.appspot.com",
  messagingSenderId: "389196889765",
  appId: "1:389196889765:web:e7648bc3294c8588be974c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
