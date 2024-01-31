import Img from '../img/delete.png'

const DeleteUser = ({ user, onDeleteUser }) => {

  const handleDeleteUser = () => {
    onDeleteUser(user);
  };

  return (
    <div className="deleteUser">
      <button onClick={handleDeleteUser} style={{backgroundColor: "transparent", display: "flex"}}>
        <img src={Img} alt='delete user' style={{width: "20px"}} />
      </button>
    </div>
  );
};
export default DeleteUser;
