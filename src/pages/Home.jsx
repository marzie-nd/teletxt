import "../styles.scss";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <Sidebar />
        <Chat username={"Ahmad"}/>
      </div>
    </div>
  );
};

export default Home;