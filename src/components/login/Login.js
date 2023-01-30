import { useState } from 'react';

import React, { Component } from 'react';
import auth from '../../firebase';
import firebase from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';


import  './styles.css';
import GoogleButton from 'react-google-button'



class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
        loading: false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Inicio de sesión
    handleLogin = (e) => {
        e.preventDefault();
        //Comprueba si el usuario existe, si no existe, muestra un error
        this.setState({loading: true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
           
            .then(user => {
                this.props.onLogin();
                this.setState({ error: null });
                this.setState({loading: false});
            })
            .catch(error => {
                    this.setState({ error: error.message });

            });
        
        
    }



    //Registro
    handleSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    //Comprueba si el usuario está logueado
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.onLogin();
                

                


            }
        });
    }

    //Inicio de sesión con Google
    handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }


    render() {
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
                        {this.state.error && <p>{this.state.error}</p>}
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                        <GoogleButton className="LoginGoogle"onClick={this.handleGoogleLogin}/>
                        <button onClick={this.handleLogin} className="LoginBtt"  >Iniciar sesión</button>
                        <button onClick={this.handleSignUp} className="RegisterBtt">Registrarse</button>
                    </form>
                </div>
            </div>
        );
        
    }

}






export default Login;
