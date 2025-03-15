import React from 'react';
import './Button.css'

function Button({title}) {
  return (
    <div className='button-container'>{title}</div>
  )
}

export default Button