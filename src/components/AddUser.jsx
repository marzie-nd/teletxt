import { useState } from "react";
import Img from "../img/add.png";
import "./AddUser.scss";

const AddUser = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddingUser(true);
  };

  const handleInputChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.trim() !== "") {
      onAddUser(newUser);
      setNewUser("");
      setIsAddingUser(false);
    }
  };

  const handleBlur = () => {
    setIsAddingUser(false);
  };

  return (
    <div className="covering">
      <div className="addUser">
        {isAddingUser ? (
          <form onSubmit={handleSubmit} style={{}}>
            <input
              type="text"
              placeholder="Enter new username"
              value={newUser}
              onChange={handleInputChange}
              onBlur={handleBlur}
              autoFocus
            />
            <button
              type="submit"
              style={{
                backgroundColor: "transparent",
                padding: "0",
                margin: "0",
              }}
            >
              <img src={Img} alt="add new user" style={{ width: "60px" }} />
            </button>
          </form>
        ) : (
          <button
            onClick={handleAddButtonClick}
            style={{
              backgroundColor: "transparent",
              padding: "0",
              margin: "0",
            }}
          >
            <img src={Img} alt="add new user" style={{ width: "60px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddUser;
