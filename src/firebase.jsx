// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmYwdjtke7zuhhbgndF213v88zYP9liuc",
    authDomain: "authentication-demo-7b568.firebaseapp.com",
    projectId: "authentication-demo-7b568",
    storageBucket: "authentication-demo-7b568.appspot.com",
    messagingSenderId: "381468209731",
    appId: "1:381468209731:web:2e8e2f50c4e2044f3c9af6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth

}