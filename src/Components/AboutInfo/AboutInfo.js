import React from 'react';
import ManPays from '../../Assets/ManPays.png';
import './AboutInfo.css'

function AboutInfo() {
  return (
    <div className='about-info'>
        <div className='about-info-partition'>
            <div className='about-info-text'>
            <span className='about-info-title'>The Story Behind Our Secure Payment Platform
            </span>
            <p className='about-info-paragraphy'>Over 10 million people around the world trust us to protect and transfer their money, relying on our secure and efficient services for their financial needs. Whether it's for personal savings, business transactions, or cross-border payments, our cutting-edge technology ensures that each transfer is swift, safe, and reliable. With a focus on customer satisfaction, we offer peace of mind by safeguarding sensitive financial data and providing transparent, user-friendly tools. The trust we've earned from millions is a testament to our commitment to delivering excellence in financial protection and seamless money transfer solutions.</p>
            </div>
            <img src={ManPays} alt="gca" className='about-info-img'/> 
        </div>
    </div>
  )
}

export default AboutInfo