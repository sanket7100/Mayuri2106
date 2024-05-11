import React, { useState, useEffect } from 'react';
import './NoteInput.css';
import img from './img/img.png';
import imgColored from './img/img_colored.png';

const NoteInput = ({ groupName }) => {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [sendButtonImg, setSendButtonImg] = useState(img);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        //localStorage.clear()
        const storedNotes = localStorage.getItem(`notesList_${groupName}`);
        if (storedNotes) {
          setNotesList(JSON.parse(storedNotes));
        } else {
          setNotesList([]);
        }
      } catch (error) {
        console.error('Error retrieving notes from localStorage:', error);
      }
    };

    fetchNotes();
  }, [groupName]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    if (event.target.value.trim() === '') {
      setSendButtonImg(img);
    } else {
      setSendButtonImg(imgColored);
    }
  };

  const handleSendNote = () => {
    if (note.trim() !== '') {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const monthIndex = currentDate.getMonth();
      const year = currentDate.getFullYear();
  
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const monthName = months[monthIndex];
  
      const formattedDate = `${day} ${monthName} ${year}`;
  
      const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      
      const newNote = { text: note, date: `${formattedDate}` , time: `${formattedTime}` };
      setNotesList(prevNotes => [...prevNotes, newNote]);
      localStorage.setItem(`notesList_${groupName}`, JSON.stringify([...notesList, newNote]));
      setNote('');
      setSendButtonImg(img);
    }
  };
  
  

  

  return (
    <>
    <div className="container">
      <div className="notes-box">
        <textarea
          placeholder="Enter your text here..."
          value={note}
          onChange={handleNoteChange}
        ></textarea>
        <button
          className="send-button"
          onClick={handleSendNote}
          disabled={note.trim() === ''}
        >
          <img className="Send-img" src={sendButtonImg} alt="send" />
        </button>
      </div>
      <div className="bottom-box">
       
      </div>
      
    </div>
    <div className="Notes-container">
    {notesList.map((noteItem, index) => (
        <div key={index} className="note-item" style={{ top: `${110 + index * 150}px` }}>
          <p>{noteItem.text}</p>
          <span>{noteItem.date} <span className="dot">&#8226;</span>{noteItem.time}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default NoteInput;
