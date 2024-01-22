import React from 'react'
import ChatBox from './ChatBox';

const UsersList = ({users, selectedUser, onUserChange}) => {

  return (
    <div className='userList'>
      {
        users.map((user) => (
          <div key={user} className='users' onClick={onUserChange(user)}>
            {user}
          </div>
        ))
      }
    </div>
  )
}

export default UsersList
