import Nav from "./components/header/Nav";
import Login from "./components/login/Login";
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';


import Background from "./components/background/Background";


import styles from './styles.css';
import { getSuggestedQuery } from "@testing-library/react";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        
        //Si es true, se guarda el usuario en el estado
        setUser(user.email);

         



      }
      else {
        setIsLoggedIn(false);
        setUser(null);
      }
    }

    
    
    );
  }, []);

  //Pasar user por props a Nav

  


  return (
    <div className="App">
    

    {
    isLoggedIn ? 
    <>

    

    <Nav user={user} />
    <Background />
    </>
    
    : <Login onLogin={() => {setIsLoggedIn(true); setUser(firebase.auth().currentUser);}} />
    
    }

    </div>

  );
}
export default App;

    

