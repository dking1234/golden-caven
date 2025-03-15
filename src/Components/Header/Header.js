import React from 'react';
import './Header.css'
import Logo from '../Logo/Logo';
import HeaderMenus from '../HeaderMenus/HeaderMenus';
import Button from '../Button/Button';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-sections'>
        <Logo />
        <HeaderMenus />
        <div className='header-buttons'>
        <Button title= "Sign In" />
        <Button title= "Contact Desk" />
        </div>
      </div> 
    </div>
  )
}

export default Header