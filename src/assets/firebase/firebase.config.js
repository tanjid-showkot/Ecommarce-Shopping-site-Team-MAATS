// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.appId
    // apiKey: "AIzaSyDZTBD7KnUEF5bvRqUOBlzEUwBda0FSdT4",
    // authDomain: "maats-ecommarce-site.firebaseapp.com",
    // projectId: "maats-ecommarce-site",
    // storageBucket: "maats-ecommarce-site.appspot.com",
    // messagingSenderId: "579904611496",
    // appId: "1:579904611496:web:8c6756df378250a926ce9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;