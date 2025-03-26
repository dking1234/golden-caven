import React, { useState } from 'react';
import './SignIn.css'; // Import the CSS file

function SignIn() {
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
          Do not have an account? <a href="/contact">Contact desk</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;