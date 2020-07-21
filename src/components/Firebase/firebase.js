//import * as firebase from "firebase/app";
//import "firebse/auth";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeRvF_3di5hTyy_fR0mrhjo3ZjTg9Fk6Q",
    authDomain: "school-survey-204d8.firebaseapp.com",
    databaseURL: "https://school-survey-204d8.firebaseio.com",
    projectId: "school-survey-204d8",
    storageBucket: "school-survey-204d8.appspot.com",
    messagingSenderId: "101150610386",
    appId: "1:101150610386:web:3acad7ab66b2477088ae0b"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;