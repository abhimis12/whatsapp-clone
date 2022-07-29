
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAvpJvERBPmpnxDp7Z9WmQaJu37GOTJDB4",
    authDomain: "whatsapp-clone-yt-47e20.firebaseapp.com",
    projectId: "whatsapp-clone-yt-47e20",
    storageBucket: "whatsapp-clone-yt-47e20.appspot.com",
    messagingSenderId: "638176711559",
    appId: "1:638176711559:web:aee55678a5f568b723b922"
  };
  

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, provider };
export default db;