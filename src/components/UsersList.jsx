import React from "react";

const UsersList = ({ users, selectedUser, onUserChange }) => {
  return (
    <div className="userList">
      {users.map((user) => (
        <div
          key={user}
          className={`user-item ${user === selectedUser ? "selected" : ""}`}
          onClick={onUserChange(user)}
        >
          {user}
        </div>
      ))}
    </div>
  );
};

export default UsersList;
