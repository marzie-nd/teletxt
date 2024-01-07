import React from "react";
import { Link } from "react-router-dom";
import Img from './img/logo.png';

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <div className="logo">TeLeTxt</div>
      <img src={Img} width="200px" alt="logo" />

      <p>
        Exercitation qui in nisi ullamco ullamco ad esse fugiat pariatur ex ex
        ex. Laboris aliquip est reprehenderit reprehenderit quis aliquip id enim
        labore.
        Laboris aliquip est reprehenderit reprehenderit quis aliquip id enim
        labore.
      </p>
      <Link to="/signup">
        <button>Start Messaging</button>
      </Link>
    </div>
  );
};

export default App;
