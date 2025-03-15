import React from 'react';
import Header from '../../Components/Header/Header';
import './About.css'
import AboutInfo from '../../Components/AboutInfo/AboutInfo';
import WhatWeOffer from '../../Components/WhatWeOffer/WhatWeOffer';
import Footer from '../../Components/Footer/Footer';
import AboutTeam from '../../Components/AboutTeam/AboutTeam';

function About() {
  return (
    <div className='about-container'>
        <Header />
        <div className='about-banner'>
            <span className='about-title'>Connecting People Through Fast & Secure Payments</span>
        </div>
        <AboutInfo />
        <AboutTeam />
        <WhatWeOffer />
        <Footer />
    </div>
  )
}

export default About