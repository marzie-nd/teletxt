import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import "./Signin.scss";

const Signin = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate(`/chats`);
  };

  return (
    <div className="signin">
      <Container title="TeleTxt" subtitle="Sign In">
        <form onSubmit={handleSignIn}>
          <input type="text" placeholder="Username" required/>
          <input type="password" placeholder="Password" required/>
          <Button type="submit">Sign In</Button>
          <Link to="/forgotpassword" className="link">Forgot password?</Link>
          <Link to="/signup" className="link">Don't have an account? Sign up</Link>
        </form>
      </Container>
    </div>
  );
};

export default Signin;