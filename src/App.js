import React from "react";
import { Link } from "react-router-dom";
import ImageLogo from "./images/logo.png";
import Container from "./components/Container";

import "./App.scss";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="app">
      <Container title={'TeleTxt'} subtitle={''}>
        <img src={ImageLogo} alt="Logo" />
        <p>
          Exercitation qui in nisi ullamco ullamco ad esse fugiat pariatur ex ex
          ex. Laboris aliquip est reprehenderit reprehenderit quis aliquip id
          enim labore. Laboris aliquip est reprehenderit reprehenderit quis
          aliquip id enim labore.
        </p>
        <Link to="/signup">
          <Button>Start Messaging</Button>
        </Link>
      </Container>
    </div>
  );
};

export default App;
