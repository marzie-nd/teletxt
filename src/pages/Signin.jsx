import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import "./Signin.scss";

const Signin = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });


  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const passwordLength = new RegExp("(?=.{12,})");
    const usernameLength = new RegExp("(?=.{7,})");

    let inputError = {
      username: "",
      password: "",
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
    if (!lower.test(formInput.password)) {
      setFormError({
        ...inputError,
        password: "Your password must contain at least one lowercase letter",
      });
      return;
    }
    if (!upper.test(formInput.password)) {
      setFormError({
        ...inputError,
        password: "Your password must contain at least one uppercase letter",
      });
      return;
    }
    if (!number.test(formInput.password)) {
      setFormError({
        ...inputError,
        password: "Your password must contain at least one number",
      });
      return;
    }
    if (!special.test(formInput.password)) {
      setFormError({
        ...inputError,
        password: "Your password must contain at least one special character",
      });
      return;
    }
    if (!passwordLength.test(formInput.password)) {
      setFormError({
        ...inputError,
        password: "Your password must contain at least 12 character",
      });
      return;
    }
    if (!lower.test(formInput.username)) {
      setFormError({
        ...inputError,
        username: "Your username must contain at least one lowercase letter",
      });
      return;
    }
    if (!upper.test(formInput.username)) {
      setFormError({
        ...inputError,
        username: "Your username must contain at least on uppercase letter",
      });
      return;
    }
    if (!usernameLength.test(formInput.username)) {
      setFormError({
        ...inputError,
        username: "Your username must contain at least 7 character",
      });
      return;
    }

    navigate(`/chats`);
  };

  return (
    <div className="signin">
      <Container title="TeleTxt" subtitle="Sign In">
        <form onSubmit={handleSignIn}>
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
          
          <Button type="submit">Sign In</Button>
          <Link to="/forgotpassword" className="link">
            Forgot password?
          </Link>
          <Link to="/signup" className="link">
            Don't have an account? Sign up
          </Link>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
