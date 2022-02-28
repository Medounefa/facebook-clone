
import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: "AIzaSyCwCGdwNgzvAU7fgG4DTXlSBu9tAeXX5gY",
  authDomain: "signfacebook-aa479.firebaseapp.com",
  projectId: "signfacebook-aa479",
  storageBucket: "signfacebook-aa479.appspot.com",
  messagingSenderId: "1050352896539",
  appId: "1:1050352896539:web:c5066732ff71918fc9c6be"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;