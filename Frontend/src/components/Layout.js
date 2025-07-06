


import React, { useState } from 'react';
import logo from '../logo.svg';
import InfoPopup from './InfoPopup';
import AnimatedBanner from './AnimatedBanner';

function Layout({ children }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="new-app-layout">
      <header className="new-app-header slide-down">
        <div className="new-brand">
          <img src={logo} alt="DevOps Shack logo" className="new-logo" />
          <div>
            <h1 className="new-brand-title">TekSupport</h1>
            <p className="new-nav-subtitle">User Management</p>
          </div>
        </div>
      </header>
      <AnimatedBanner message="Welcome to DevOps Shack 🚀" />
      <div className="new-app-body">
        <aside className="new-sidebar slide-in-left">
          <h3 className="sidebar-title">Connect</h3>
          <ul className="new-social-links">
            <li><a className="new-sidebar-btn" href="https://www.linkedin.com/in/xxx/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="new-sidebar-btn" href="https://www.youtube.com/@xxx" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a className="new-sidebar-btn" href="https://www.instagram.com/xxx" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </aside>
        <main className="new-main-content fade-in">
          {children}
        </main>
      </div>
      <footer className="new-app-footer">
        <p>© {new Date().getFullYear()} xxx. All rights reserved.</p>
      </footer>

      <button className="new-help-btn" onClick={() => setShowInfo(true)}>?</button>
      {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}

      <div className="bubble-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="star-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
    </div>
  );
}

export default Layout;
















