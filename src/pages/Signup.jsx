import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import ShowPass from "../images/show.png";
import HidePass from "../images/hide.png";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

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

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const passwordLength = new RegExp("(?=.{12,})");
    const usernameLength = new RegExp("(?=.{7,})");

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
          <div className="wrapper">
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
            />
            <div onClick={() => setVisible(!visible)}>
              {visible ? <img src={ShowPass} /> : <img src={HidePass} />}
            </div>
          </div>

          <p className="errorMessage">{formError.password}</p>
          {/* /////////////////// */}
          <div className="wrapper">
            <input
              type={visible ? "text" : "password"}
              placeholder="Confirm password"
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
            />
            <div onClick={() => setVisible(!visible)}>
              {visible ? <img src={ShowPass} /> : <img src={HidePass} />}
            </div>
          </div>
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
