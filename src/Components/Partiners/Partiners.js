import React from 'react';
import './Partiners.css';
import channel from "../../Assets/channel.png";
import Rackspace from "../../Assets/Rackspace.png";
import Nike from "../../Assets/Nike.png";
import Pepsi from "../../Assets/Pepsi.png";
import western from "../../Assets/western.png";


function Partiners() {
  return (
    <div className='partiners-container'>
        <span className='partiner-title'>Businesses using GCA Pay to
        boost conversion & Transaction speed</span>
        <div className='partiners-logo'>
            <img src={channel} alt="gca" className='partner-img'/>
            <img src={Rackspace} alt="gca" className='partner-img'/>
            <img src={Nike} alt="gca" className='partner-img'/>
            <img src={Pepsi} alt="gca" className='partner-img'/>
            <img src={western} alt="gca" className='partner-img'/>
        </div>
    </div>
  )
}

export default Partiners