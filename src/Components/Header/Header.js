import React, { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import HeaderMenus from '../HeaderMenus/HeaderMenus';
import Button from '../Button/Button';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'; // Import Ant Design icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-container'>
      <div className='header-sections'>
          <Logo />
        <div className={`header-menus ${isMenuOpen ? 'active' : ''}`}>
          <HeaderMenus />
          <div className='header-buttons'>
            <Button title="Sign In" />
            <Button title="Contact Desk" />
          </div>
        </div>
        <div className='burger-menu' onClick={toggleMenu}>
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />} {/* Use Ant Design icons */}
        </div>
      </div>
    </div>
  );
}

export default Header;