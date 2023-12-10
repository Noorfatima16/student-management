// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAM8cgbAITF27hn7u-A3CzkZ70kVXE48c",
  authDomain: "pre-test-425d2.firebaseapp.com",
  projectId: "pre-test-425d2",
  storageBucket: "pre-test-425d2.appspot.com",
  messagingSenderId: "84613429819",
  appId: "1:84613429819:web:e71d245a75185f401eba1e",
  measurementId: "G-PZPNKCY2GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export const database= getFirestore(app)