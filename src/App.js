import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

import { PURPLE2 } from "./helpers/colors";

import "./App.css";

const App = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "larger",
        paddingLeft: '10vw',
        paddingRight: '10vw'
      }}
      className="App"
    >
      <h1>TeLeTxt</h1>
      <img
        src="https://via.placeholder.com/200"
        width={"200px"}
        alt=""
        style={{ borderRadius: "50%" }}
      />

      <p style={{ textAlign: "center" }}>
        Exercitation qui in nisi ullamco ullamco ad esse fugiat pariatur ex ex
        ex. Laboris aliquip est reprehenderit reprehenderit quis aliquip id enim
        labore.
      </p>
      <Link to="/signup">
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: PURPLE2, height: "3rem" }}
        >
          Start Messaging
        </Button>
      </Link>
    </Container>
  );
};

export default App;
