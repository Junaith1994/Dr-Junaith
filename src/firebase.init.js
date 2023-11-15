// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyhmk1BnZxPFYAjCMXyY7wfncokUsYkc0",
    authDomain: "taimiyah-dental-care.firebaseapp.com",
    projectId: "taimiyah-dental-care",
    storageBucket: "taimiyah-dental-care.appspot.com",
    messagingSenderId: "318314710164",
    appId: "1:318314710164:web:7a7cef6a9f1db0adc36081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;