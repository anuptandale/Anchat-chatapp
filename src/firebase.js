import { getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBxfskbqGDihFnVu-eBcxrOCYxNl1-5V8",
  authDomain: "anchat-e82c3.firebaseapp.com",
  projectId: "anchat-e82c3",
  storageBucket: "anchat-e82c3.appspot.com",
  messagingSenderId: "1033259615087",
  appId: "1:1033259615087:web:adb922a9f29b5dad389e9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
