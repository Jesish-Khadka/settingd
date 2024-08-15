import React, { useState } from 'react';
import '../styles/ProfileSection.css';
import { FaChevronUp } from 'react-icons/fa';

function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    role: 'Developer',
    username: 'John doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '+977-9123456780',
    profilePicture: 'path_to_profile_image.jpg'  // Add initial profile picture path

  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For demo purposes, we'll use a URL.createObjectURL to display the image locally
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, profilePicture: imageUrl });
    }
  };

  const handleSave = () => {
    // Implement save functionality here (e.g., send updated profile to server)
    alert('Profile saved!');
    setIsEditing(false);  // Exit edit mode after saving
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  
  return (
    <div className="profile-section">
      <div className="profile-header">
        <h2>Profile</h2>
        <button 
          className={`edit-button ${isEditing ? 'edit-button-hidden' : ''}`} 
          onClick={handleEdit}
        >
          {isEditing ? <FaChevronUp className="edit-icon rotate" /> : 'Edit'}
        </button>
      </div>
      {isEditing && (
       <div className="profile-edit">
       <div className="profile-image-container">
         <input
           type="file"
           accept="image/*"
           id="profilePictureUpload"
           style={{ display: 'none' }}
           onChange={handleFileChange}
         />
         <label htmlFor="profilePictureUpload">
           <img
             src={profile.profilePicture}
             alt="Profile"
             className="profile-image"
           />
         </label>
           
           
           
            <div className="profile-name-role">


              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
            </div>
          </div>
          <div className="profile-fields">
            <label>Username</label>
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
              <span className="edit-icon">✎</span>
            </div>
            <label>Email</label>
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              <span className="edit-icon">✎</span>
            </div>
            <label>Phone Number</label>
            <div className="input-container">
              <input
                type="tel"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
              <span className="edit-icon">✎</span>
            </div>
          </div>
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ProfileSection;
