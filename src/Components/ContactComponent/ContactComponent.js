import React from "react";
import './ContactComponent.css'

const ContactComponent = () => {
  return (
    <div className="contact-wrapper">
      {/* Left Section - Contact Form */}
      <div className="contact-form-section">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Enter your phone number"
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
          <button type="submit" className="contact-submit-btn">
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