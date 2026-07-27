const firebaseConfig = {
  apiKey: "AIzaSyDJxYtgMfPRiaDxabLRSnmvNJL5JjdzwD0",
  authDomain: "komisyoncep.firebaseapp.com",
  projectId: "komisyoncep",
  storageBucket: "komisyoncep.firebasestorage.app",
  messagingSenderId: "789546692165",
  appId: "1:789546692165:web:57acba9cafb4418f6bfd2c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
