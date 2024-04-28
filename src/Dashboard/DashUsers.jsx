import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from "../firebase";
import NavDash from "./NavDash";

const DashUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        const userData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  

  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <NavDash />
      <div className="container mt-5">
        <h2 className="mb-4">All Users</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Profile</th>
                  <th>Username</th>
                  <th>Roles</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={user.avatar || 'default-avatar.jpg'} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                      </div>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default DashUsers;
