import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDORezSr49C6B7QOcII6f4_27buMMh87NI",
  authDomain: "disneyplus-b09c3.firebaseapp.com",
  projectId: "disneyplus-b09c3",
  storageBucket: "disneyplus-b09c3.appspot.com",
  messagingSenderId: "67908908456",
  appId: "1:67908908456:web:7ca20e95a8e82bda8c199d",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
