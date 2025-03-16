import React from 'react';
import ManPays from '../../Assets/ManPays.png';
import './AboutTeam.css'

function AboutTeam() {
  return (
    <div className='about-team'>
        <div className='about-team-partition'>
           
            <div className='about-team-text'>
            <span className='about-team-title'>Our Expertise (Skills & Strengths)
            </span>
            <span className='about-team-sub-title'>Innovative, Secure, and User-Friendly Payment Solutions</span>
            <p className='about-team-paragraphy'>At the core of our services lies a commitment to excellence, security, and innovation. Our expertise is built on a foundation of advanced technology, industry best practices, and a deep understanding of financial systems. Here’s what sets us apart:</p>
            <span className='about-team-sub-title'>Expertise in Secure Money Transfers</span>
            <p className='about-team-paragraphy'>We prioritize the security of every transaction, implementing end-to-end encryption, multi-layer authentication, and fraud detection mechanisms to ensure your money is safe at all times. Our team continuously monitors for any threats, guaranteeing peace of mind for our users.</p>
            <span className='about-team-sub-title'>Cutting-Edge Technology for Fast Transactions</span>
            <p className='about-team-paragraphy'>Time is money, and we ensure that every transaction is processed instantly and efficiently. By leveraging AI-driven risk assessment, blockchain technology, and high-speed payment gateways, we minimize delays and maximize reliability.</p>
            </div>
            <img src={ManPays} alt="gca" className='about-info-img'/> 
        </div>
    </div>
  )
}

export default AboutTeam