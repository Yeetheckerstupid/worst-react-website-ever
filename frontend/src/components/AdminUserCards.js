import axios from 'axios';
import { AdminContext } from '../context/AdminContext';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const AdminUserCards = () => {
  const { registeredUsers, fetchUsers } = useContext(AdminContext);
  const { token } = useContext(AuthContext);

  const deleteUser = (id) => {
    axios
      .delete(`/api/admin/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 'success') {
          fetchUsers(); // Fetch the updated data again
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!registeredUsers) {
    return (
      <div className='requests'>
        <div className='card'>
          <h1>Unable to load registered users.</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`requests ${registeredUsers.length > 6 ? 'scrollable' : ''}`}
    >
      {registeredUsers.map((user) => (
        <div className='card' key={user._id}>
          <div className='card-content'>
            <div className='card-header'>
              <span>Registered Users</span>
            </div>

            <div className='card-info'>
              <p>
                <strong>Full Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>ID:</strong> {user._id}
              </p>
              <p>
                <strong>Role: </strong> {user.role}
              </p>
            </div>

            <div className='card-footer'>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUserCards;
