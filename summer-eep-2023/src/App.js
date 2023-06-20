import React, { useState } from 'react';
import { Login } from './components/authForm/Login';
import { Register } from './components/authForm/Register';
import { Home } from './components/homePage/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState('Login');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleFormSwitch = (form) => {
    setCurrentForm(form);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <>
          {currentForm === 'Login' ? (
            <Login onLogin={handleLogin} onFormSwitch={handleFormSwitch} />
          ) : (
            <Register onFormSwitch={handleFormSwitch} />
          )}
        </>
      )}
    </div>
  );
}

export default App;