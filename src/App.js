import Nav from "./components/header/Nav";
import Login from "./components/login/Login";
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Background from "./components/background/Background";


import styles from './styles.css';
import { getSuggestedQuery } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner'

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        
        //Si es true, se guarda el usuario en el estado
        setUser(user.email);
        //Cuando se inicia sesión, se redirige a la página principal
        //navigate('/', { replace: true });
        setLoading(false);
        


      }
      else {
        setIsLoggedIn(false);
        setUser(null);
        //navigate('/login', { replace: true });
        setLoading(false);
      }
    }

    
    
    );
  }, []);

//Si es true, se muestra el componente Nav y el componente Background y cambia la url a la página principal


  


  /*return (
    <div className="App">
      
        {isLoggedIn ? (
        <>
        <Nav user={user} />
        <Background />
        
        </>
        
         ) :( <Login onLogin={() => {setIsLoggedIn(true);  
          setUser(firebase.auth().currentUser);
            
        }} />

        )
        
        }

    </div>

  );*/
  return (
    <div className="App">
      {loading ? (
        <div className="GetLoading">

        <ThreeCircles className="Loading"
        height="100"
        width="100"
        color="#cf649a"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#333"
        innerCircleColor="#e993ff"
        middleCircleColor="#333"
        />
        </div>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              <Nav user={user} />
              <Background />
            </>
          ) : (
            <Login onLogin={() => {
              setIsLoggedIn(true);
              setUser(firebase.auth().currentUser);
            }} />
          )}
        </>
      )}
    </div>
  );
}
export default App;

    

