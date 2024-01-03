import { Link } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

import "../styles/Signup.css";
import { PURPLE2 } from "../helpers/colors";

const Signup = () => {
  return (
    <Container
      className="Signup"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "larger"
      }}
    >
      <h2>Sign Up</h2>
      <TextField
        id="standard-text-input"
        label="Phone number"
        type="text"
        variant="standard"
        sx={{
          margin: "0.5vh 0 0.5vh 0"
        }}
      />
      <br />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        sx={{
          margin: "0.5vh 0 0.5vh 0"
        }}
      />
      <br />
      <TextField
        id="standard-password-input"
        label="Confirm password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        sx={{
          margin: "0.5vh 0 0.5vh 0"
        }}
      />
      <br />
      <TextField
        id="standard-code-input"
        label="Verification code"
        type="text"
        variant="standard"
        sx={{
          margin: "0.5vh 0 0.5vh 0"
        }}
      />
      <br />
      <Link to="/chats">
        <Button
          variant="contained"
          sx={{ backgroundColor: PURPLE2, marginTop: "2vh" }}
        >
          Sign up
        </Button>
      </Link>
      <Link to="/signin" underline="hover" className="lnk">
        {"Already have an account?"}
      </Link>
    </Container>
  );
};

export default Signup;
