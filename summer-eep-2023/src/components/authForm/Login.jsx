import React, { useState } from 'react';
import './authForm.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginEmail = 'devuser@gmail.com';
        const password = 'dev';

        if (loginEmail === email && password === pass) {
            props.onLogin('Home');

        }
    }

    return (
        <div className="authContainer">
            <div className="authBorder">
                <label className="siteTitle">Image Social</label>
                <label className="authTitle">log in</label>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label htmlfor="email">email</label>
                    <input 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        type="email" 
                        placeholder="enter your email " 
                        id="email" 
                        name="email" 
                    />

                    <label htmlfor="password">password</label>
                    <input 
                        value={pass} 
                        onChange={(event) => setPass(event.target.value)} 
                        type="password" 
                        placeholder="enter your password" 
                        id="password" 
                        name="password" 
                    />

                    <button className="authButton" onClick={handleSubmit} type="submit">Log in</button>
                </form>
                <button className="linkButton" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register now!</button>
            </div>
        </div>
    )
}