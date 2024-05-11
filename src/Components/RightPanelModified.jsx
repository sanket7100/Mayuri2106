import React from 'react';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import './RightPanelModified.css';
import { useParams } from 'react-router-dom'; // Import useParams hook

const RightPanelModified = () => {
  // Use useParams hook to get route parameters
  const { groupName, groupColor } = useParams();
  console.log('groupColor:', groupColor);

  return (
    <div className="right-panel-modified">
      {/* Pass groupColor and groupName directly to Navbar */}
      <Navbar groupName={groupName} groupColor={groupColor} />
     
      <NoteInput groupName={groupName} />
    </div>
  );
};

export default RightPanelModified;
