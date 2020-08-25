import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDmkQ-fx3eQHswmAdweGRIlVY1SNZSEv-s",
  authDomain: "adv-project-4b3cf.firebaseapp.com",
  databaseURL: "https://adv-project-4b3cf.firebaseio.com",
  projectId: "adv-project-4b3cf",
  storageBucket: "adv-project-4b3cf.appspot.com",
  messagingSenderId: "609075089255",
  appId: "1:609075089255:web:25e038144fb9b971f7e9c2",
  measurementId: "G-9QFZTMFSG0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

export default {
  firebase,
  db,
};
