import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMWmFrRcEnSZVrHZQ5DBWTVHDAqCnUW5w",
  authDomain: "the-scentist-store.firebaseapp.com",
  projectId: "the-scentist-store",
  storageBucket: "the-scentist-store.appspot.com",
  messagingSenderId: "229311932983",
  appId: "1:229311932983:web:f8e001f008374b5a366db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//     addDoc(collection(db, "productos"), prod)
//         .then((elem) => console.log(`Se agregó el producto id ${elem.id}`))
//         .catch((error) => console.log(error))
// })


