import React from "react";
import "./CustomerFeedBack.css";
import CustomerTestimonial from "../CustomerTestimonial/CustomerTestimonial";

function CustomerFeedBack() {
  // Dummy data for testimonials (duplicated for smooth looping)
  const customerTestimonials = [
    { id: 1, name: "John Doe", feedback: "Great service! Highly recommended." },
    { id: 2, name: "Jane Smith", feedback: "Amazing experience with the team." },
    { id: 3, name: "Alice Johnson", feedback: "Very professional and friendly." },
    { id: 4, name: "Bob Brown", feedback: "The best service I have ever had." },
    { id: 5, name: "Charlie Davis", feedback: "Exceeded my expectations!" },
    { id: 6, name: "Eva Green", feedback: "Absolutely wonderful experience." },
  ];

  // Duplicate testimonials for infinite scrolling effect
  const testimonialsLoop = [...customerTestimonials, ...customerTestimonials];

  return (
    <div className="customer-feedback-container">
            <div className='customer-feedback-upper'>
      <h2 className="customer-feedback-title">Customer Experience Feedback</h2>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonialsLoop.map((testimonial, index) => (
            <CustomerTestimonial
              key={index}
              name={testimonial.name}
              feedback={testimonial.feedback}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedBack;
