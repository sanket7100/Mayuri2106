// Navbar.js
import React from 'react';
import './Navbar.css';
import { useParams, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { groupColor, groupName } = useParams();
  const initials = groupName ? groupName.split(' ').map(word => word[0]).join('').toUpperCase() : '';

  const handleBackButtonClick = () => {
    navigate('/'); // Assuming '/' is the route for the default left panel
  };

  return (
    <div className="navbar">
      <div className="navbar-back-button" onClick={handleBackButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      <span className="navbar-initials" style={{ backgroundColor: groupColor }}>{initials}</span>
      <span className="navbar-group-name">{groupName}</span>
    </div>
  );
};

export default Navbar;
