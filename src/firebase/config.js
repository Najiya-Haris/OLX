import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkd9CENL-R3NmNSZmeH29U6HUczUnyL4M",
  authDomain: "fir-9a99e.firebaseapp.com",
  projectId: "fir-9a99e",
  storageBucket: "fir-9a99e.appspot.com",
  messagingSenderId: "833607771221",
  appId: "1:833607771221:web:a50ee5a551d194768da0dc",
  measurementId: "G-2RFWBWRCJP"
};

const firebase = Firebase.initializeApp(firebaseConfig);
export default firebase;