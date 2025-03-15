import React from 'react';
import './TestmonialsSection.css';

function TestimonialsSection() {
  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"This platform has made managing my international finances so much easier!"</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial-card">
          <p>"The multi-currency accounts are a game-changer for my business."</p>
          <span>- Jane Smith</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;