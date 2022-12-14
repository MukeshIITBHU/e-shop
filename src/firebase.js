import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDJqNQsBabNZW0mFtgM9lRNW-D0A3AIwgw",
  authDomain: "e-shop-d3466.firebaseapp.com",
  databaseURL: "https://e-shop-d3466.firebaseio.com",
  projectId: "e-shop-d3466",
  storageBucket: "e-shop-d3466.appspot.com",
  messagingSenderId: "418972718519",
  appId: "1:418972718519:web:c9e7f58a5ce338d642c432"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };