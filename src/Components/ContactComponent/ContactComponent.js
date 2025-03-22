import React, { useState } from "react";
import './ContactComponent.css'

const ContactComponent = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your sign-up logic here (e.g., API call)
      };
  return (
    <div className="contact-wrapper">
      {/* Left Section - Contact Form */}
      <div className="contact-form-section">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
            <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input form-textarea"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
           Send Message
          </button>
        </form>
      </div>

      {/* Right Section - Contact Information */}
      <div className="contact-info-section">
        <h2 className="contact-info-title">Contact Information</h2>
        <div className="contact-info-content">
          <p>Email: info@example.com</p>
          <p>Phone: +255 673 920 232</p>
          <p>Address: Dar es Salaam, Kinondoni Street</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;