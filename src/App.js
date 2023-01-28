import Nav from "./components/header/Nav";
import Login from "./components/login/Login";
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';


import Background from "./components/background/Background";


import styles from './styles.css';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      
  
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="App">
    

    {
    isLoggedIn ? 
    <>
    <Nav /> 
    <Background />
    </>
    : <Login onLogin={() => setIsLoggedIn(true)} />}

    </div>

  );
}
  


/*function App(){


  return (
    <div className="App">
     
      <Nav/>
      <Background />


    </div>
  );
}*/

export default App;

    

