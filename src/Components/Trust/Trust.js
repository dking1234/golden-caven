import React from 'react';
import './Trust.css';
import ManPays from '../../Assets/ManPays.png';

function Trust() {
  return (
    <div className='trust-container'>
      <div className='trust-partition'>
        <div className='trust-info'>
          <span className='trust-title'>10 Million People Trust Us to Protect and Make Transfer</span>
          <p className='trust-paragraphy'>
            Over 10 million people around the world trust us to protect and transfer their money, relying on our secure and efficient services for their financial needs. Whether it's for personal savings, business transactions, or cross-border payments, our cutting-edge technology ensures that each transfer is swift, safe, and reliable. With a focus on customer satisfaction, we offer peace of mind by safeguarding sensitive financial data and providing transparent, user-friendly tools. The trust we've earned from millions is a testament to our commitment to delivering excellence in financial protection and seamless money transfer solutions.
          </p>
        </div>
        <img src={ManPays} alt="gca" className='trust-img' />
      </div>
    </div>
  );
}

export default Trust;