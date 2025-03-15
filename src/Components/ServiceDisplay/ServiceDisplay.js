import React from 'react';
import './ServiceDisplay.css';
import International from '../../Assets/International.png'
import Local from '../../Assets/Local.png'
import Bank from '../../Assets/Bank.png'
import Trading from '../../Assets/Trading.png'

function ServiceDisplay() {
  return (
    <div className='services-display-continer'>
        <div className='services-display-partition'>
            <div className='left-partition'>
                <div className='service-display'>
                <img src={International} alt="gca" className='service-image-size-1'/> 
                <span className='service-display-title'>Bank Transfers & Integration Built for Businesses</span>
                <p className='service-display-paragraphy'>Link your bank and unlock frictionless transactions send, receive, and manage payments effortlessly. 
                                    Our secure integration allows you to connect your 
                                    banking operations with GCA Pay, making finance 
                                    management smoother than ever. </p>
                </div>
                <div className='service-display'>
                <img src={Local} alt="gca" className='service-image-size-3'/> 
                <span className='service-display-title'>OTC Desk – High-Value Trading, Simplified</span>
                <p className='service-display-paragraphy'>Got a large transaction? No problem. Our Over-the-
                                    Counter (OTC) Desk is designed for businesses and 
                                    high-volume traders who need fast settlements, 
                                    personalized support, and the best rates—without
                                    the hassle of traditional banks. </p>
                </div>        
            </div>
            <div className='right-partition'>
                <div className='service-display'>
                <span className='service-display-title'>International Payments Go Global, Instantly</span>
                <p className='service-display-paragraphy'>No delays. No hidden fees. No stress.With GCA Pay, sending money across borders is 
                                    as easy as a local transfer. Whether you’re paying 
                                    suppliers, sending remittances, or settling invoices, 
                                    we ensure your funds arrive safely and quickly</p>
                <img src={Bank} alt="gca" className='service-image-size-2'/> 
                </div>
                <div className='service-display'>
                <span className='service-display-title'>Local Transfers with MNOs Money Where You Need It</span>
                <p className='service-display-paragraphy'>Pay bills, send money, or top up mobile wallets 
                                    with a few taps. We’ve partnered with top mobile 
                                    network operators (MNOs) to make sure your 
                                    payments reach their destination instantly.</p>
                <img src={Trading} alt="gca" className='service-image-size'/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDisplay