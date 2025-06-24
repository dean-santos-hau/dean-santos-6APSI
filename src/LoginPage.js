import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
  navigate("/");
  }
  return (
    <div className='login-page-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <form>
          <label>Username</label>
          <input
          type="text"
          placeholder="Username"
          required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
          />

          <a href="" className='forgot-password'>Forgot password</a>

          <button 
            type='submit' 
            id="login-button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <p>
          Dont have an account? <a href=''>Sign up</a>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
