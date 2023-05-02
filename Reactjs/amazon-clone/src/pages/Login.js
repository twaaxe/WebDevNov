import React, { useState } from "react";
import "../style/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import "firebase/auth"


export default function Login() {


    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();     //stop the refresh
         auth.signInWithEmailAndPassword(email, password);
         /*   .then(((auth)) =>{
                //log in, register to homepage
                history.push('/');
            })
            .catch( (e) =>{alerte.message}})
        */
    }

    const register = (e) => {
        e.preventDefault();     //stop the refresh
        /* 
        auth.createUserWithEmailAndPassword(email,password
            .then(auth)=>{
                //create user and logged in
            })
            .catch((e)=>{alerte.message})
        
        */
    }



    return (

        <>

            <div className="login">
                <Link to="/" >
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="loginLogo" />
                </Link>


                <div className="login__container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>e-mail</h5>
                        <input type="email" onChange={e => setEmail(e.target.value)} />
                        <h5>password</h5>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                        <button type="submit" onClick={login} className="login__singInButton">Sign in</button>
                    </form>
                    <p>
                        By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <button className="login__registerButton" onClick={register}>Create your amazon account</button>
                </div>
            </div>
        </>

    )
}