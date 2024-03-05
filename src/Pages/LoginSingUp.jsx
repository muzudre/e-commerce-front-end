import React from "react";
import "./CSS/LoginSignUp.css";

const LoginSingUp = () => {
  return (
    <div className="login-sign-up">
      <div className="login-sign-up-container">
        <h1>Sign up</h1>
        <div className="login-sign-up-fields">
          <input type="text" placeholder="Your Name" />
          <input type="emil" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-sign-up-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="login-sign-up-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingUp;
