// Popup.js
import React, { useState, useEffect } from 'react';
import './Popup.css'; 

const Popup = ({ onSubmit, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('');

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorChange = (e) => {
    setGroupColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(groupName, groupColor);
    setGroupName('');
    setGroupColor('');
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.popup-content')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="groupName">Group Name</label>
            <input
              id="groupName"
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="groupColor">Choose Color</label>
            <div className="color-buttons">
          <span className="color-button" style={{ backgroundColor: '#B38BFA' }} onClick={() => setGroupColor('#B38BFA')}></span>
          <span className="color-button" style={{ backgroundColor: '#FF79F2' }} onClick={() => setGroupColor('#FF79F2')}></span>
          <span className="color-button" style={{ backgroundColor: '#43E6FC' }} onClick={() => setGroupColor('#43E6FC')}></span>
          <span className="color-button" style={{ backgroundColor: '#F19576' }} onClick={() => setGroupColor('#F19576')}></span>
          <span className="color-button" style={{ backgroundColor: '#0047FF' }} onClick={() => setGroupColor('#0047FF')}></span>
          <span className="color-button" style={{ backgroundColor: '#6691FF' }} onClick={() => setGroupColor('#6691FF')}></span>
        </div>
          </div>
          <button type="submit">Create</button>
        </form>
       
      </div>
    </div>
  );
};

export default Popup;
