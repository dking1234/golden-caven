import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <div className="features-section">
      <h2>Key Services</h2>
      <div className="features-grid">
        <div className='features-row'>
        <div className="feature-card">
          <h3>Global Currencies</h3>
          <p>Hold and manage funds in multiple currencies.</p>
        </div>
        <div className="feature-card">
          <h3>Instant Transfers</h3>
          <p>Send and receive money across borders instantly.</p>
        </div>
        <div className="feature-card">
          <h3>Bank Transfer</h3>
          <p>Enjoy competitive exchange rates and low transaction fees.</p>
        </div>
        </div>
        <div className='features-row'>
        <div className="feature-card">
          <h3>Mobile Money Transfer</h3>
          <p>Hold and manage funds in multiple currencies.</p>
        </div>
        <div className="feature-card">
          <h3>High Value Trading</h3>
          <p>Send and receive money across borders instantly.</p>
        </div>
        <div className="feature-card">
          <h3>Merchants Collection Account</h3>
          <p>Enjoy competitive exchange rates and low transaction fees.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;