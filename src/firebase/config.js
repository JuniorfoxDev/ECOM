import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyA0OxEsCo4EEMswPDalhakRe5U7S53j_Yc",
  authDomain: "eshop-b714c.firebaseapp.com",
  projectId: "eshop-b714c",
  storageBucket: "eshop-b714c.appspot.com",
  messagingSenderId: "243971497573",
  appId: "1:243971497573:web:67851b8e92f2e6ad4af08c",
  measurementId: "G-5HTY7DBCLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db  = getFirestore(app);
export const storage  = getStorage(app);
export default app;