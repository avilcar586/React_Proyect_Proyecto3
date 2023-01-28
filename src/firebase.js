import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyATQD8l1SX_PI_qms3BfoCGMDeWMKQu4UQ",
  authDomain: "react-2f3b5.firebaseapp.com",
  databaseURL: "https://react-2f3b5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-2f3b5",
  storageBucket: "react-2f3b5.appspot.com",
  messagingSenderId: "99539249135",
  appId: "1:99539249135:web:e4c8c207a5a99a7c5f381a",
  measurementId: "G-3FHP0QELY8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, firebaseConfig };

export default firebase;









