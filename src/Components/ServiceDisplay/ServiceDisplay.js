import React, { useEffect, useRef } from 'react';
import './ServiceDisplay.css';
import International from '../../Assets/International.png';
import Local from '../../Assets/Local.png';
import Bank from '../../Assets/Bank.png';
import Trading from '../../Assets/Trading.png';

function ServiceDisplay() {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When container comes into view, animate all service items
            serviceRefs.current.forEach((ref, index) => {
              if (ref) {
                // Stagger the animations with different delays
                ref.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Function to add refs to our array
  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  return (
    <div className='services-display-continer' ref={containerRef}>
      <div className='services-display-partition'>
        <div className='service-display' ref={addToRefs}>
          <span className='service-display-title'>Bank Transfers & Built for Businesses</span>
          <p className='service-display-paragraphy'>
            Link your bank and unlock frictionless transactions send, receive, and manage payments effortlessly. 
            Our secure integration allows you to connect your 
            banking operations with GCA Pay, making finance 
            management smoother than ever.
          </p>
          <img src={International} alt="gca" className='service-image-size-1'/> 
        </div>
        <div className='service-display1' ref={addToRefs}>
          <span className='service-display-title'>International Payments Go Global, Instantly</span>
          <p className='service-display-paragraphy'>
            No delays. No hidden fees. No stress.With GCA Pay, sending money across borders is 
            as easy as a local transfer. Whether you're paying 
            suppliers, sending remittances, or settling invoices, 
            we ensure your funds arrive safely and quickly
          </p>
          <img src={Bank} alt="gca" className='service-image-size-2'/> 
        </div>
      </div>

      <div className='services-display-partition'>
        <div className='service-display' ref={addToRefs}>
          <span className='service-display-title'>OTC Desk – High-Value Trading, Simplified</span>
          <p className='service-display-paragraphy'>
            Got a large transaction? No problem. Our Over-the-
            Counter (OTC) Desk is designed for businesses and 
            high-volume traders who need fast settlements, 
            personalized support, and the best rates—without
            the hassle of traditional banks.
          </p>
          <img src={Local} alt="gca" className='service-image-size-3'/> 
        </div> 
        <div className='service-display1' ref={addToRefs}>
          <span className='service-display-title'>Local Transfers Mobile Network Operators</span>
          <p className='service-display-paragraphy'>
            Pay bills, send money, or top up mobile wallets 
            with a few taps. We've partnered with top mobile 
            network operators (MNOs) to make sure your 
            payments reach their destination instantly.
          </p>
          <img src={Trading} alt="gca" className='service-image-size'/> 
        </div>  
      </div>
    </div>
  );
}

export default ServiceDisplay;