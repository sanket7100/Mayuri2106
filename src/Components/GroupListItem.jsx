// GroupListItem.js
import React from 'react';
import './GroupListItem.css';

const GroupListItem = ({ groupName, groupColor, onClick }) => {
  // Get initials from the group name
  const initials = groupName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <li className="group-list-item" onClick={onClick}>
      <div className="group-circle" style={{ backgroundColor: groupColor }}>
        <span className="initials">{initials}</span>
      </div>
      <span className="group-name">{groupName}</span>
    </li>
  );
};

export default GroupListItem;
