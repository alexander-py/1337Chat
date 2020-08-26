import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApYrlUCUlfNvJtaSDmy4OgPgeMRXnCNAA",
    authDomain: "chat-c0c76.firebaseapp.com",
    databaseURL: "https://chat-c0c76.firebaseio.com",
    projectId: "chat-c0c76",
    storageBucket: "chat-c0c76.appspot.com",
    messagingSenderId: "586743781598",
    appId: "1:586743781598:web:a371a85dd8cade7b514a4f",
    measurementId: "G-1L2NC77ZNR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;