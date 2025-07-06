import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from '../axios';
import UserForm from '../components/UserForm';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const formRef = useRef(null);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchUsers();
    }
  }, [user, navigate]);

  const fetchUsers = () => {
    axios
      .get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => {
        console.error('Fetch Error:', err);
        if (err.response?.status === 401) logout();
      });
  };

  const handleCreate = (userData) => {
    axios
      .post('/api/users', userData)
      .then(() => {
        fetchUsers();
        setEditingUser(null);
      })
      .catch(err => console.error('Create Error:', err));
  };

  const handleUpdate = (id, userData) => {
    if (user?.role !== 'admin') return;
    axios
      .put(`/api/users/${id}`, userData)
      .then(() => {
        fetchUsers();
        setEditingUser(null);
      })
      .catch(err => console.error('Update Error:', err));
  };

  const handleDelete = (id) => {
    if (user?.role !== 'admin') return;
    axios
      .delete(`/api/users/${id}`)
      .then(fetchUsers)
      .catch(err => console.error('Delete Error:', err));
  };

  const handleEditClick = (selectedUser) => {
    if (user?.role === 'admin') {
      setEditingUser(selectedUser);
    }
  };

  return (
    <div className="new-dashboard-container">
      <div className="dashboard-header fade-in">
        <h2>User Manager (React + Node + MySQL)</h2>
        <div className="user-info">
          <b>{user?.name}</b> ({user?.role}) &nbsp;
          <button className="new-logout-button" onClick={logout}>Logout</button>
        </div>
      </div>

      {/* ✅ Form visible for all roles */}
      {(user?.role === 'admin' || user?.role === 'viewer') && (
        <div ref={formRef}>
          <UserForm
            onSubmit={
              editingUser && user?.role === 'admin'
                ? (data) => handleUpdate(editingUser.id, data)
                : handleCreate
            }
            user={editingUser && user?.role === 'admin' ? editingUser : null}
            onCancel={() => setEditingUser(null)}
          />
        </div>
      )}

      <div className="new-table-container">
        <table className="new-table">
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {users.map(userData => (
              <tr key={userData.id}>
                <td data-label="ID">{userData.id}</td>
                <td data-label="Name">{userData.name}</td>
                <td data-label="Email">{userData.email}</td>
                <td data-label="Actions">
                  {user?.role === 'admin' ? (
                    <div className="new-action-buttons">
                      <button className="new-edit-button" onClick={() => handleEditClick(userData)}>Edit</button>
                      <button className="new-delete-button" onClick={() => handleDelete(userData.id)}>Delete</button>
                    </div>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="new-fab"
        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        +
      </button>
    </div>
  );
}

export default UserDashboard;





























