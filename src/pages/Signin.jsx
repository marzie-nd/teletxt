import { Link } from "react-router-dom";
import '../styles.scss';

const Signin = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="logo">TeLeTxt</div>
        <div className="title">Sign In</div>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/home">
          <button>Sign in</button>
        </Link>
        <Link to="/frgpass" underline="hover" className="lnk">
          {"Forgot password?"}
        </Link>

        <Link to="/signup" underline="hover" className="lnk">
          {"Don't have an account? Sign up"}
        </Link>
      </div>
    </div>
  );
};

export default Signin;
