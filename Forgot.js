import React from "react";
import "./Forgot.css"; // Ensure the CSS file is in the same directory or adjust the path accordingly.

const Forgot = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Enter change Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder=" Enter Confirm Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
         
        </div>

        <button type="submit" className="btn">
          Submit
        </button>

       
      </form>
    </div>
  );
};

export default Forgot;
