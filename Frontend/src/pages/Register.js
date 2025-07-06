
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../logo.svg';

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="new-register-page">
      <div className="new-register-container">
        <div className="register-image-section">
          <img src={logo} alt="logo" className="new-logo slide-in-left" />
          <h1 className="welcome-text">Join DevOps Shack!</h1>
          <p className="welcome-subtext">Create an account to get started</p>
        </div>
        <div className="register-form-section">
          <div className="register-form-wrapper">
            <h2 className="register-title fade-in">Register</h2>
            {error && <p className="new-error fade-in">{error}</p>}
            <form onSubmit={handleSubmit} className="register-form">
              <div className="new-input-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                  className="new-form-field"
                />
              </div>
              <div className="new-input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                  className="new-form-field"
                />
              </div>
              <div className="new-input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                  className="new-form-field"
                />
              </div>
              <button type="submit" className="new-register-button">Sign Up</button>
            </form>
            <div className="register-footer">
              <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <div className="new-register-tip">
                Tip: Use a strong password and never share your credentials. For support,
                contact <a href="mailto:support@dxxx.com">support</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bubble-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default Register;




