import React, { useState, useEffect } from 'react';

function UserForm({ user, onSubmit, onCancel }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    if (user) {
      setForm({ name: user.name, email: user.email, password: '' });
    } else {
      setForm({ name: '', email: '', password: '' });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
    };
    if (!user) {
      payload.password = form.password;
    }
    onSubmit(payload);
    if (!user) {
      setForm({ name: '', email: '', password: '' });
    }
  };

  return (
    <form className="new-user-form" onSubmit={handleSubmit}>
      <div className="new-input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="new-form-field"
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="new-input-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="new-form-field"
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      {!user && (
        <div className="new-input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="new-form-field"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <div className="new-button-group">
        <button type="submit" className="new-form-button">{user ? 'Update' : 'Add Viewer User'}</button>
        {user && <button type="button" className="new-cancel-button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

export default UserForm;




