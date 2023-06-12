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
            <form className="Register" onSubmit={handleSubmit}>
                <label>First and Last Name</label>
                <input value={fullName} onChange={(event) => setName(event.target.value)} name="fullName" id="fullName" placeholder="Full Name"/>

                <label htmlfor="email">Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter your email " id="email" name="email" />

                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />

                <button type="submit">Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('Login')}>Already have an account? Sign in here!</button>
        </div>
    )
}