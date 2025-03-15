import React from 'react';
import './HeaderMenus.css';
import { useNavigate } from "react-router-dom";


function HeaderMenus() {
  const navigate = useNavigate();

  return (
    <div className='header-menu-container'>
        <div className='header-menu-list'>
            <span className='header-menu-text' onClick={() => navigate("/about")}>About</span>
            <span className='header-menu-text' onClick={() => navigate("/services")}>Services</span>
            <span className='header-menu-text' onClick={() => navigate("/rate-currencies")}>Rate & Currencies</span>
        </div>
    </div>
  )
}

export default HeaderMenus