import { useState } from 'react';
import React from 'react';
import auth from '../../firebase';
import firebase from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';


import  './styles.css';
import GoogleButton from 'react-google-button';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    

    //Función para cambiar el estado de los inputs
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          setEmail(e.target.value);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
        }
      };

    //Inicio de sesión
    const handleLogin = (e) => {
        e.preventDefault();
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            setError(null);
          })
          .catch((error) => {
            //Si los campos están vacíos
            if (error.code === 'auth/invalid-email') {
                setError('Por favor rellene los campos de abajo correctamente');
            //Si el email no está registrado
            } else if (error.code === 'auth/user-not-found' || error.code === 'auth/user-disabled' || error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
              
                setError('Usuario o contraseña incorrectos');

            }
            //Si ha habido algún otro error
            else {
                setError('Error al iniciar sesión');
            }

          });
      };


    //Registro
    const handleSignUp = (e) => {
        e.preventDefault();
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch((error) => {
            //Si los campos están vacíos
            if (error.code === 'auth/invalid-email') { 
            setError('Por favor rellene los campos de abajo correctamente');
            //Si el email ya está registrado
            } else if (error.code === 'auth/email-already-in-use') {
                setError('El email introducido ya está registrado');
            }
            else if (error.code === 'auth/weak-password') {
                setError('La contraseña debe tener al menos 6 caracteres');
            }
            //Si ha habido algún otro error
            else {
                setError('Error al registrar el usuario');
            }

          });
      };

      

    
   

    //Inicio de sesión con Google
   const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }    
    
    return (
            
            <div className="container">
                <div className='col-izq shadow-pop-bl'>
                    <div className="piza1 shadow-pop-bl">
                        <div className="piza2 shadow-pop-bl">
                            <div className="piza3 shadow-pop-bl">
                                <div className="piza4 shadow-pop-bl">
                                    <div className="piza5 shadow-pop-bl">
                                    <div className="piza6 shadow-pop-bl">
                                        <div className="piza7 shadow-pop-bl">
                                            <div className="piza8 shadow-pop-bl">
                                                <div className="piza9 shadow-pop-bl">
                                                    <div className="piza10 shadow-pop-bl"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-der'>
                <Typography className='GlowingText' >
                    <b>
                    P<span>
                    ro</span>
                    yec<span>to</span>3</b>
                </Typography>
                    <form className="login">
                        {error && <p className='Error'>{error}</p>}
                        <input type="email" name="email" placeholder="Email" onChange={handleChange}  />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}  />
                        <GoogleButton className="LoginGoogle"onClick={handleGoogleLogin}/>
                        <button onClick={handleLogin} className="LoginBtt"  >Iniciar sesión</button>
                        <button onClick={handleSignUp} className="RegisterBtt">Registrarse</button>
                    </form>

                </div>    
            </div>
        );
        
    }










export default Login;
