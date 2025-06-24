import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage'; 
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
