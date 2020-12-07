// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAjFZX31rNoqILvhUFmUu0_D3R7yyTwDa4",
    authDomain: "clone-f48db.firebaseapp.com",
    projectId: "clone-f48db",
    storageBucket: "clone-f48db.appspot.com",
    messagingSenderId: "4636025864",
    appId: "1:4636025864:web:a5c82898df72e480e45dbd",
    measurementId: "G-B5136B0YYG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }