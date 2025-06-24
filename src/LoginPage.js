import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div className='login-page-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <form>
          <label>Username</label>
          <input
          type="text"
          placeholder="Username"
        
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
        
          />

          <a href="" className='forgot-password'>Forgot password</a>
          
          <button >Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
