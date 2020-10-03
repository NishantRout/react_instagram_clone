import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSVJj5rNhXuxuxn6Cxjz9N42P6xKsJOUQ",
  authDomain: "react-instagram-clone-c548b.firebaseapp.com",
  databaseURL: "https://react-instagram-clone-c548b.firebaseio.com",
  projectId: "react-instagram-clone-c548b",
  storageBucket: "react-instagram-clone-c548b.appspot.com",
  messagingSenderId: "173550690781",
  appId: "1:173550690781:web:d15916266dd4f6686fd634",
  measurementId: "G-ZLSW4CGQFM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
