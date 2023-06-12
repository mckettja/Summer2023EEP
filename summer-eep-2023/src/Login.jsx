import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="auth-container">
            <label className="site-title">Internet Social</label>
            <label className="auth-title">log in</label>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="enter your email " id="email" name="email" />

                <label htmlfor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="enter your password" id="password" name="password" />

                <button className="auth-button" type="submit">Log in</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register now!</button>
        </div>
    )
}