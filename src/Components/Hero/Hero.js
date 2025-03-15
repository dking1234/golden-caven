import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-text-container'>
            <div className='hero-golden-caven-text'>
                <span className='golden-caven-text'>Gold Caven Associates</span>
                <span className='golden-caven-text-online'>Online Payment Platform</span>
            </div>
            <span className='hero-title'>Fast Secure & Borderless</span>
            <span className='hero-sub-title'>Send, receive & manage money effortlessly anytime, anywhere</span>
        </div> 
    </div>
  )
}

export default Hero