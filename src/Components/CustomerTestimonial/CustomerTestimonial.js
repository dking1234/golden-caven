import React from 'react';
import './CustomerTestimonial.css';
import { StarFilled } from '@ant-design/icons';

function CustomerTestimonial({ name, feedback }) {
  return (
    <div className='customer-testmonial-container'>
      <span className='customer-testmonial-title'>“GCA Is A Truly Great Payment Platform”</span>
      <p className='customer-testmonial-info'>{feedback}</p>
      {/* Star ratings */}
      <div className='customer-testimonial-rating'>
        {[...Array(5)].map((_, index) => (
          <StarFilled key={index} className='star-icon' />
        ))}
      </div>
      <span className='customer-testmonial-name'>{name}</span>
      <span className='customer-testmonial-occupation'>Head Of Sales at Pepsi</span>
    </div>
  );
}

export default CustomerTestimonial;