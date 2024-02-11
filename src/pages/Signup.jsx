import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
    conFirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    let inputError = {
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.username && !formInput.password) {
      setFormError({
        ...inputError,
        username: "Username required",
        password: "Password required",
      });
      return;
    }
    if (!formInput.username) {
      setFormError({
        ...inputError,  
        username: "Username required",
      });
      return;
    }
    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password required",
      });
      return;
    }
    if (formInput.password !== formInput.confirmPassword) {
      setFormError({
        ...inputError,
        conFirmPassword: "Password and Confirm password should be the same",
      });
      return;
    }

    navigate(`/chats`);
  };

  return (
    <div className="signup">
      <Container title="TeleTxt" subtitle="Sign Up">
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={formInput.username}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            name="username"
          />
          <p className="errorMessage">{formError.username}</p>
          {/* /////////////////// */}
          <input
            type="text"
            placeholder="Password"
            value={formInput.password}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            name="password"
          />
          <p className="errorMessage">{formError.password}</p>
          {/* /////////////////// */}
          <input
            type="confirmPassword"
            placeholder="Confirm password"
            value={formInput.confirmPassword}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            name="confirmPassword"
          />
          <p className="errorMessage">{formError.conFirmPassword}</p>

          <div className="separator">
            <Button type="submit">Sign Up</Button>
            <Link to="/signin" className="link">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
