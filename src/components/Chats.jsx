import { Route, Routes } from "react-router-dom";
import Users from "./Users";


const Chats = () => {
  return (
    <div className="chats">
      <Routes>
        <Route index element={<Users />} />
      </Routes>
    </div>
  );
};

export default Chats;
