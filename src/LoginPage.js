import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div className='login-page-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <form>
          <input
          type="text"
          placeholder="Username"
        
          />
          <input
            type="password"
            placeholder="Password"
        
          />
          <button >Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
