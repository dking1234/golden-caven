import React from 'react';
import './Footer.css';
import QRcode from '../../Assets/QR.png';
import AppStore from '../../Assets/Appstore.png';
import GooglePlay from '../../Assets/Googleplay.png';
import FooterImg from '../../Assets/FooterImage.png';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-partition'>
            <div className='footer-left-partition'>
                {/* <Logo className='footer-logo'/> */}
                <span className='footer-about-text'>Seamless transactions for businesses and individuals. One platform, endless possibilities</span>
                <h1 className='footer-title'>Get the GCA Pay App</h1>
                <div className='footer-download-icons'>
                <img src={QRcode} alt='gca' className='footer-icon'/>  
                <img src={AppStore} alt='gca' className='footer-icon'/>  
                <img src={GooglePlay} alt='gca' className='footer-icon'/>  
                </div>
            </div>
            <div className='footer-right-partition'>
                <img src={FooterImg} alt='gca' className='footer-img'/>
            </div>
        </div>
        <div className='footer-low-partition'>
            <div className='footer-low-columns'>
                <span className='footer-low-title'>Explore</span>
                <span className='footer-low-text'>Home</span>
                <span className='footer-low-text'>About</span>
                <span className='footer-low-text'>Services</span>
                <span className='footer-low-text'>Company</span>
                <span className='footer-low-text'>Rate & Currencies</span>
            </div>
            <div className='footer-low-columns'>
                <span className='footer-low-title'>Products</span>
                <span className='footer-low-text'>International Payment</span>
                <span className='footer-low-text'>Bank Transfer</span>
                <span className='footer-low-text'>Local Transfer</span>
                <span className='footer-low-text'>OTC Desk</span>
            </div>
            <div className='footer-low-columns'>
                <span className='footer-low-title'>Useful Links</span>
                <span className='footer-low-text'>Help</span>
                <span className='footer-low-text'>FAQ</span>
                <span className='footer-low-text'>GCA Pay App</span>
                <span className='footer-low-text'>Facebook</span>
                <span className='footer-low-text'>Instagram</span>
            </div>
            <div className='footer-low-columns'>
                <span className='footer-low-title'>Contact</span>
                <span className='footer-low-text'>Dar es salaam</span>
                <span className='footer-low-text'>Kinondoni street</span>
                <span className='footer-low-text'>info@gca.com</span>
                <span className='footer-low-text'>+255 673 920 232</span>
            </div>
        </div>
        <div className='footer-copy-right'>
            <span className='footer-copy-right-text'>© 2025 GCA Pay (Golden Caven Associates). All rights reserved.</span>
            <span className='footer-copy-right-text-down'>This website and its content, including but not limited to text, graphics, logos, images, software, and all other materials, are the intellectual property of GCA Pay (Golden Caven Associates) unless otherwise stated.</span>
        </div>
    </div>
  )
}

export default Footer