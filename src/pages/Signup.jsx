import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";
import Container from "../components/Container";
import Button from "../components/Button";
const Signup = () => {
  return (
    <Container title={'TeleTxt'} subtitle={'Sign Up'}>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="tepasswordxt" placeholder="Confirm password" />
        <input type="text" placeholder="Mobile number" />
        <input type="text" placeholder="Verification code" />
        <Link to="/chats">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/signin" underline="hover">
          {"Already have an account? Sign in"}
        </Link>
      </form>
    </Container>
  );
};

export default Signup;
