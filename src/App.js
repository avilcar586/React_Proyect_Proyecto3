import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import SignUp from "./components/login/SignUp";
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

import Background from "./components/background/Background";


import styles from './styles.css';

/*function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    });
}, []);
  return user ? (
    <>
      <Header />

    </>

  ) : (
    <SignUp />
  );

}*/

function App(){


  return (
    <div className="App">
     
      <Nav/>
      <Background />


    </div>
  );
}

export default App;

    

