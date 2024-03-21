// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDDiiTkD1dGREfoxkc3gMaILc_TtQsRn0M",
  authDomain: "wedebate-5a4f4.firebaseapp.com",
  projectId: "wedebate-5a4f4",
  storageBucket: "wedebate-5a4f4.appspot.com",
  messagingSenderId: "463944534218",
  appId: "1:463944534218:web:b0aaa2cb9f77f188f14c33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
