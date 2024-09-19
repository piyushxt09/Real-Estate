import React, { useState } from 'react';
import './Notification.css';

const NotificationPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <>
      {/* Background overlay */}
      <div style={overlayStyles}></div>

      {/* Popup content */}
      <div style={popupStyles} className='Notification'>
        {/* Ignore button (top-right corner) */}
        <button className="ignore-button" onClick={onClose}>
          &times;
        </button>

        <h2>Inquiry Now!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

// Styles for the background overlay
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
  zIndex: 999, // Behind the popup
};

// Styles for the popup box
const popupStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '50px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1000, // In front of the overlay
  borderRadius: '10px',
  width: '400px',
  textAlign: 'center',
};

export default NotificationPopup;
