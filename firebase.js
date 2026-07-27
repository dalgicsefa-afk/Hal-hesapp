import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJxYtgMfPRiaDxabLRSnmvNJL5JjdzwD0",
  authDomain: "komisyoncep.firebaseapp.com",
  projectId: "komisyoncep",
  storageBucket: "komisyoncep.firebasestorage.app",
  messagingSenderId: "789546692165",
  appId: "1:789546692165:web:57acba9cafb4418f6bfd2c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
