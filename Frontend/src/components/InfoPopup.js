import React from 'react';

function InfoPopup({ onClose }) {
  return (
    <div className="new-info-overlay" onClick={onClose}>
      <div className="new-info-box" onClick={e => e.stopPropagation()}>
        <h3 className="info-title">About This App</h3>
        <p className="info-text">This project demonstrates a 3-tier stack with a React frontend and Node backend.</p>
        <button className="new-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InfoPopup;


