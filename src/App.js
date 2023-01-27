import Header from "./components/header/Header";

import SignUp from "./components/login/SignUp";
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';


function App() {
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

}

export default App;

    

