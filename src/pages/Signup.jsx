import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate(`/chats`);
  };

  return (
    <div className="signup">
      <Container title="TeleTxt" subtitle="Sign Up">
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder="Username" required/>
          <input type="password" placeholder="Password" required/>
          <input type="password" placeholder="Confirm password" required/>
          <div className="separator">
            <Button type="submit">Sign Up</Button>
            <Link to="/signin" className="link">Already have an account? Sign in</Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;