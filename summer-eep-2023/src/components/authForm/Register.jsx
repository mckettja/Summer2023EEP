import React, { useState } from 'react';
import './authForm.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullName, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="authContainer">
            <div className="authBorder">
                <label className="siteTitle">Image Social</label>
                <label className="authTitle">register</label>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>full name</label>
                    <input 
                        value={fullName} 
                        onChange={(event) => setName(event.target.value)} 
                        name="fullName" 
                        id="fullName" 
                        placeholder="enter your full name"
                        />

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

                    <button className="authButton" type="submit">Register</button>
                </form>
                <button className="linkButton" onClick={() => props.onFormSwitch('Login')}>Already have an account? Sign in here!</button>
            </div>
        </div>
    )
}