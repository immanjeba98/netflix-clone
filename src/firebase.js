// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGBgPliZKh9BtMTcgeK_xoFTbjTOsBvwY",
  authDomain: "netflix-clone-60986.firebaseapp.com",
  projectId: "netflix-clone-60986",
  storageBucket: "netflix-clone-60986.appspot.com",
  messagingSenderId: "438154081060",
  appId: "1:438154081060:web:0430d184d14d8601eeb9b1",
  measurementId: "G-F279ZWKYT4",
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
export {app,auth,db};
