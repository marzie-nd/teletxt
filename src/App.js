import React from "react";
import { Link } from "react-router-dom";
import Img from "./img/logo.png";
import Container from "./components/Container";

import "./styles.scss";
import Button from "./components/Button";

const App = () => {
  return (
    <Container title={'TeleTxt'} subtitle={''}>
      <img src={Img} width="200px" alt="logo" />
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
  );
};

export default App;
