import { useState } from 'react';

import React, { Component } from 'react';
import auth from '../../firebase';
import firebase from '../../firebase';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    handleSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.onLogin();
            }
        });
    }

    render() {
        return (
            <form>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                <button onClick={this.handleLogin}>Iniciar sesión</button>
                <button onClick={this.handleSignUp}>Registrarse</button>
            </form>
        );
    }
}

export default Login;
