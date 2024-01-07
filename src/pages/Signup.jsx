import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="logo">TeLeTxt</div>
        <div className="title">Sign Up</div>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="tepasswordxt" placeholder="Confirm Password" />
        <input type="number" placeholder="Mobile Number" />
        <input type="number" placeholder="Verification code" />
        <Link to="/home">
          <button>SIGN UP</button>
        </Link>
        <Link to="/signin" underline="hover">
          {"Already have an account? Sign in"}
        </Link>
      </div>
    </div>
  );
};

export default Signup;
