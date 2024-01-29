import { Link } from "react-router-dom";
import "../styles.scss";
import Container from "../components/Container";
import Button from "../components/Button";
const Signin = () => {
  return (
    <Container className="container" title={'TeleTxt'} subtitle={'Sign In'}>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/chats">
          <Button>Sign In</Button>
        </Link>
        <Link to="/forgetpasssword" underline="hover" className="lnk">
          {"Forgot password?"}
        </Link>
        <Link to="/signup" underline="hover" className="lnk">
          {"Don't have an account? Sign up"}
        </Link>
      </form>
    </Container>
  );
};

export default Signin;
