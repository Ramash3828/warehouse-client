// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcxkVsyHfbx3_u32HS0BEdWVLy79FsGz8",
    authDomain: "bicycle-store-4982a.firebaseapp.com",
    projectId: "bicycle-store-4982a",
    storageBucket: "bicycle-store-4982a.appspot.com",
    messagingSenderId: "492943271344",
    appId: "1:492943271344:web:10ee4f96db33508bdae275",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
