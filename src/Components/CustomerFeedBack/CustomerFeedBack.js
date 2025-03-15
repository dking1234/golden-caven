import React, { useState } from 'react';
import './CustomerFeedBack.css';
import MovableButtons from '../MovableButtons/MovableButtons';
import CustomerTestimonial from '../CustomerTestimonial/CustomerTestimonial';

function CustomerFeedBack() {
  // Dummy data for testimonials
  const customerTestimonials = [
    { id: 1, name: 'John Doe', feedback: 'Great service! Highly recommended.' },
    { id: 2, name: 'Jane Smith', feedback: 'Amazing experience with the team.' },
    { id: 3, name: 'Alice Johnson', feedback: 'Very professional and friendly.' },
    { id: 4, name: 'Bob Brown', feedback: 'The best service I have ever had.' },
    { id: 5, name: 'Charlie Davis', feedback: 'Exceeded my expectations!' },
    { id: 6, name: 'Eva Green', feedback: 'Absolutely wonderful experience.' },
  ];

  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of testimonials to show at a time
  const testimonialsPerPage = 3; // Adjust this to control how many testimonials are visible at once

  // Function to handle moving left
  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : customerTestimonials.length - testimonialsPerPage
    );
  };

  // Function to handle moving right
  const handleMoveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < customerTestimonials.length - testimonialsPerPage ? prevIndex + 1 : 0
    );
  };

//   // Get the testimonials to display based on the current index
//   const visibleTestimonials = customerTestimonials.slice(
//     currentIndex,
//     currentIndex + testimonialsPerPage
//   );

  return (
    <div className='customer-feedback-container'>
      <div className='customer-feedback-upper'>
        <span className='customer-feedback-title'>Customer Experience Feedback</span>
        <MovableButtons
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
          isLeftActive={currentIndex > 0}
          isRightActive={currentIndex < customerTestimonials.length - testimonialsPerPage}
        />
      </div>
      <div className='customer-feedback-testimonials'>
        {customerTestimonials.map((testimonial) => (
          <CustomerTestimonial
            key={testimonial.id}
            name={testimonial.name}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerFeedBack;