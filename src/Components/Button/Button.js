import React from 'react';
import './Button.css'

function Button({title, onClick}) {
  return (
    <div className='button-container' onClick={onClick}>{title}</div>
  )
}

export default Button