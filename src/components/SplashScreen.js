import React from 'react';
import './SplashScreen.css';
import logo from '../assests/images/logo.jpg'; // Adjust path

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
      <h1>Welcome to Swaraj's Portfolio</h1>
    </div>
  );
};

export default SplashScreen;
