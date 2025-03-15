import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './MovableButtons.css';

function MovableButtons({ onMoveLeft, onMoveRight, isLeftActive, isRightActive }) {
  return (
    <div className='move-button'>
      <div
        className={`move-left ${isLeftActive ? 'active' : ''}`}
        onClick={onMoveLeft}
      >
        <LeftOutlined />
      </div>
      <div
        className={`move-right ${isRightActive ? 'active' : ''}`}
        onClick={onMoveRight}
      >
        <RightOutlined />
      </div>
    </div>
  );
}

export default MovableButtons;