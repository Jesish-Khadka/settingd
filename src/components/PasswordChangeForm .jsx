import React, { useState } from 'react';
import '../styles/passwordChange.css';

function PasswordChange() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password change submitted:', passwords);
    // Reset form and collapse
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    });
    setIsExpanded(false);
  };

  return (
    <div className={`password-change-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="password-header">
        <h2>Password</h2>
        <button className="toggle-button" onClick={handleToggle}>
          <span className={`arrow ${isExpanded ? 'up' : 'down'}`}></span>
          {isExpanded ? 'Cancel' : 'Change'}
        </button>
      </div>
      {isExpanded && (
        <form onSubmit={handleSubmit} className="password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Current password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={passwords.confirmNewPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="save-button">Save Password</button>
        </form>
      )}
    </div>
  );
}

export default PasswordChange;