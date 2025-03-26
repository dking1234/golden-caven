import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import the CSS file

function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleContactClick = () => {
    navigate('/contact'); // Programmatic navigation
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Your Account</h2>
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
          <button type="submit" className="signup-button">
            Sign In
          </button>
        </form>
        <p className="login-link">
          Do not have an account?{' '}
          <span 
            onClick={handleContactClick} 
            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}
          >
            Contact desk
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;