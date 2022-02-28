import {signInWithPopup, FacebookAuthProvider, getAuth} from 'firebase/auth';
import app from './firebase'

import './App.css';

function App() {

  const signInWithFacebook = () =>{
    
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup( auth, provider)
    .then((res) =>{
      console.log(res);
    })
    .catch((err) =>{
      console.log(err.message);
    })
  }
  return (
    <button onClick={signInWithFacebook}>sign in with fb</button>
  );
}

export default App;
