import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullName, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="auth-container">
            <label className="site-title">Internet Social</label>
            <label className="auth-title">register</label>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>full name</label>
                <input value={fullName} onChange={(event) => setName(event.target.value)} name="fullName" id="fullName" placeholder="enter your full name"/>

                <label htmlfor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="enter your email " id="email" name="email" />

                <label htmlfor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="enter your password" id="password" name="password" />

                <button className="auth-button" type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('Login')}>Already have an account? Sign in here!</button>
        </div>
    )
}