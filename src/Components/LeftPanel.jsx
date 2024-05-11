import React, { useState, useEffect } from 'react';
import './LeftPanel.css';
import Popup from './Popup';
import GroupListItem from './GroupListItem';
import { useNavigate } from 'react-router-dom';

const LeftPanel = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroups = async () => {
     // localStorage.clear()
      try {
        const storedGroups = localStorage.getItem('groups');
        if (storedGroups) {
          setGroups(JSON.parse(storedGroups));
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  const handleAddGroup = () => {
    setShowPopup(true);
  };

  const handleAddGroupSubmit = (groupName, groupColor) => {
    if (!groupName.trim()) return;

    const newGroup = { name: groupName, color: groupColor };
    setGroups(prevGroups => [...prevGroups, newGroup]);

    // Save updated groups to local storage
    localStorage.setItem('groups', JSON.stringify([...groups, newGroup]));

    setShowPopup(false);
  };

  const handleGroupClick = (groupName, groupColor) => {
    navigate(`/rightpanelmodified/${encodeURIComponent(groupName)}/${encodeURIComponent(groupColor)}`);
  };

  return (
    <div className='left-panel'>
      <h1 className="heading2">Pocket Notes</h1>
      <button className="add-button" onClick={handleAddGroup}>
        +
      </button>
      {showPopup && <Popup onSubmit={handleAddGroupSubmit} onClose={() => setShowPopup(false)} />}
      {/* Render GroupListItems */}
      {groups.map((group, index) => (
        <GroupListItem
          key={index}
          groupName={group.name}
          groupColor={group.color}
          onClick={() => handleGroupClick(group.name, group.color)}
        />
        
      ))}
    </div>
  );
};

export default LeftPanel;
