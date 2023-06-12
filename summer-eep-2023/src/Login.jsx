import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="auth-container">
            <form className="Login" onSubmit={handleSubmit}>
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter your email " id="email" name="email" />

                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />

                <button type="submit">Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register now!</button>
        </div>
    )
}