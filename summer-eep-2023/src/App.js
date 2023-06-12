import React, { useState } from 'react';
import './styles.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  // set default page to login page, not register page
  const [currentForm, setCurrentForm] = useState('Login');

  const changeForm = (form) => {
    setCurrentForm(form);
  }

  return (
    <div className="app">
     {
       currentForm === "Login" ? <Login onFormSwitch={changeForm} /> : <Register onFormSwitch={changeForm} />
     }
    </div>
  );
}

export default App;
