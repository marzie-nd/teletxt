import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
