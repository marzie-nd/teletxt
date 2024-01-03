import { Link } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

import "../styles/Signin.css";
import { PURPLE2 } from "../helpers/colors";

const Signin = () => {
  return (
    <Container
      className="Signin"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "larger"
      }}
    >
      <h2>Sign In</h2>
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
      <Link to="/chats">
        <Button
          variant="contained"
          sx={{ backgroundColor: PURPLE2, marginTop: "2vh" }}
        >
          Sign in
        </Button>
      </Link>
      <Link to="/frgpass" underline="hover" className="lnk">
        {"Forgot password?"}
      </Link>

      <Link to="/signup" underline="hover" className="lnk">
        {"Create an account"}
      </Link>
    </Container>
  );
};

export default Signin;
