import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyADxG0KsfObDcl3Fzhqc_-RmH3uEKGWGaY",
    authDomain: "evo-watch-auth.firebaseapp.com",
    projectId: "evo-watch-auth",
    storageBucket: "evo-watch-auth.appspot.com",
    messagingSenderId: "769978283114",
    appId: "1:769978283114:web:33654d94b4c1e46f8a0613",
    measurementId: "G-13YR76XKGG"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { auth, google, facebook };