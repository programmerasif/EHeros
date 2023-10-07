import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD5lnmHXcMzkxIoIGJKLFAtRpew9xIptIE",
    authDomain: "e-heros.firebaseapp.com",
    projectId: "e-heros",
    storageBucket: "e-heros.appspot.com",
    messagingSenderId: "605560616700",
    appId: "1:605560616700:web:a343aafc1f9285b2a80979",
    measurementId: "G-3FJS60FZRL"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app