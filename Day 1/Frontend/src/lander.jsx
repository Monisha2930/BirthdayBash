import React, { useState } from 'react';
import './lander.css'; // Import CSS file

function UserProfile() {
  const [viewMode, setViewMode] = useState(true);
  const [userData, setUserData] = useState({
    name: 'Adam Luxor',
    title: 'VP of User Experience',
    department: 'Date',
    location: 'Atlanta',
    company: 'BetterCloud',
    manager: 'Emily Morgan',
    workPhone: '404-555-1212',
    mobilePhone: '404-555-6789',
    alias: 'adam.luxor@companyname.com',
    otherEmail: 'adaml@someothercompany.com'
  });

  
  const switchMode = () => {
    setViewMode(!viewMode);
  };

  const saveChanges = () => {

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };
  return (
    <div className="user-profile">
      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdQltLvxSyI7gXAsQq0QoTaLZcpqaQEAuZw&usqp=CAU" alt="user avatar" className="user-avatar" />
      </div>
      <div className="details">
        <div className="user-details">
          <div className="user-input-container">
            <label>Name</label>
            <textarea name="name" className="user-name" value={userData.name} disabled={viewMode} onChange={handleInputChange} />
          </div>
          <div className="user-input-container">
            <label>Theme</label>
            <input name="title" className="user-title" value={userData.title} disabled={viewMode} onChange={handleInputChange} />
          </div>
          <div className="user-input-container">
            <label>Date of celebration</label>
            <input name="department" value={userData.department} disabled={viewMode} onChange={handleInputChange} />
          </div>
          <div className="user-input-container">
            <label>Location</label>
            <textarea name="location" value={userData.location} disabled={viewMode} onChange={handleInputChange} />
          </div>
        </div>
        <div className="user-details">
          <div className="user-input-container">
            <label>Alter location</label>
            <input name="company" value={userData.company} disabled={viewMode} onChange={handleInputChange} />
          </div>
          <div className="user-input-container">
            <label>Work Phone</label>
            <input type="tel" name="workPhone" value={userData.workPhone} disabled={viewMode} onChange={handleInputChange} />
          </div>
          
          <div className="user-input-container">
            <label>Mobile Phone</label>
            <input type="tel" name="mobilePhone" value={userData.mobilePhone} disabled={viewMode} onChange={handleInputChange} />
          </div>
         
          <div className="user-input-container">
            <label>Alias</label>
            <input type="email" name="alias" value={userData.alias} disabled={viewMode} onChange={handleInputChange} />
          </div>
         
          <div className="user-input-container">
            <label>Other Email</label>
            <input type="email" name="otherEmail" value={userData.otherEmail} disabled={viewMode} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="edit-button" onClick={switchMode}>{viewMode ? 'Edit' : 'Save Changes'}</button>
        {!viewMode && <button className="change-password-button">Change Password</button>}
      </div>
    </div>
  );
}

export default UserProfile;
