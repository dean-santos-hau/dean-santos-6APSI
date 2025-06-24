import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage'; 
import LandingPage from './LandingPage';

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
