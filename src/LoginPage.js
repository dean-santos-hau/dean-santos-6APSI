import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div className='login-page-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
        
        /><br />
        <input
          type="password"
          placeholder="Password"
      
        /><br />
        <button >Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
