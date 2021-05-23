import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGyrGkTeQPw8VJq5R4H1_5LkWKtBOQCWU",
  authDomain: "clone-53cbc.firebaseapp.com",
  projectId: "clone-53cbc",
  storageBucket: "clone-53cbc.appspot.com",
  messagingSenderId: "95496726622",
  appId: "1:95496726622:web:8e1e03ab9f93e3b7cfaccf",
  measurementId: "G-G1DTX8H66X",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
