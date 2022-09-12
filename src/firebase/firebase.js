// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOVfhrbgVNELMxeGkXHb-TyESnYZ-PDtg",
    authDomain: "poribar-test.firebaseapp.com",
    projectId: "poribar-test",
    storageBucket: "poribar-test.appspot.com",
    messagingSenderId: "861254244909",
    appId: "1:861254244909:web:4fdef87ff7449561f9b6a4"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export default firebase