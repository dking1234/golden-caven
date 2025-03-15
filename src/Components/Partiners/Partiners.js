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
            <img src={channel} alt="gca"/>
            <img src={Rackspace} alt="gca"/>
            <img src={Nike} alt="gca"/>
            <img src={Pepsi} alt="gca"/>
            <img src={western} alt="gca"/>
        </div>
    </div>
  )
}

export default Partiners