import React from 'react';
import './Dev.css';
import DevImg from '../../Assets/Dev.png'

function Dev() {
  return (
    <div className='dev-container'>
        <div className='dev-partition'>
            <div className='dev-info'>
                <span className='dev-title'>Operate and scale your 
                operations seamlessly with our API</span>
                <p className='dev-paragraphy'>We follow the best practices in payments to deliver semantic, easy-to-use SDKs. Focus on growing your business while we handle smart contract audits, cross-chain orchestration, and all the technical, operational, and compliance upkeep.</p>
            </div>
            <div className='dev-img-position'>
          <img src={DevImg} alt="gca" className='dev-img'/> 
        </div>
        </div>
    </div>
  )
}

export default Dev