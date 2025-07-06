import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../logo.svg';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="new-login-page">
      <div className="new-login-container">
        <div className="login-image-section">
          <img src={logo} alt="logo" className="new-logo slide-in-left" />
          <h1 className="welcome-text">Welcome Back!</h1>
          <p className="welcome-subtext">Sign in to access your dashboard</p>
        </div>
        <div className="login-form-section">
          <div className="login-form-wrapper">
            <h2 className="login-title fade-in">Login</h2>
            {error && <p className="new-error fade-in">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
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
              <div className="input-group">
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
              <button type="submit" className="new-login-button">Sign In</button>
            </form>
            <div className="login-footer">
              <p className="register-link">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
              <div className="new-login-tip">
                Tip: Use a strong password and never share your credentials. For access
                requests, contact <a href="mailto:support@devopsshack.com">support</a>.
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

export default Login;






