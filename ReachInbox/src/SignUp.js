import React from 'react';
import './SignUp.css'; // Create a CSS file for styling

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>ReachInbox</h1>
        <div className="signup-form">
          <button className="google-button">Sign Up with Google</button>
          <div className="separator">or</div>
          <button className="create-account-button">Create an Account</button>
          <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;