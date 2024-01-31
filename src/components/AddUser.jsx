import { useState } from 'react';

const AddUser = ({ onAddUser }) => {

const [newUser, setNewUser] = useState('');

const handleInputChange = (e) => {
    setNewUser(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.trim() !== '') {
        onAddUser(newUser);
        setNewUser('');
    }
}

  return (
    <div className='addUser'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newUser} onChange={handleInputChange} placeholder='Add new user' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddUser
