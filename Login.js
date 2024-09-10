import React from 'react';
import './Login.css'; // Ensure the CSS file is in the same directory or adjust the path accordingly.

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1 class="l-name">Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
         
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
