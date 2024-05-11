// RightPanel.js
import React from 'react';
import img1 from './img/img1.png';
import './RightPanel.css';


const RightPanel = () => {
  return (
    <div className="right-panel">
      <img src={img1} alt="Image" />
      <div className='Para1'>
      <h1 className='heading1'>Pockets Notes</h1>
      <p>Send and receive messages without keeping your phone online.</p>
<p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
    </div>
  );
};

export default RightPanel;
