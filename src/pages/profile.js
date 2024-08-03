// src/MyForm.js
import "../css/ProfilePage.css"
import React, { useState } from 'react';
import Heading from '../components/heading';
import Contact from "../components/contact"
const MyForm = () => {
  // Initial data that could be fetched from a local system
  const initialData = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '123-456-7890',
    address: '123 Main St',
    state: 'CA',
    zipcode: '90210',
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Handle form submission logic here
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
    <div className="top1">
      <div className="topP"><Heading/></div>
      <div className="topP"><Contact/></div>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <div className="form">
      <button onClick={handleEditToggle} style={{ float: 'right', marginBottom: '10px' }}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={isEditing ? handleChange : null}
            readOnly={!isEditing}
            required
          />
        </div>
        {isEditing && <button type="submit">Submit</button>}
      </form>
    </div>
    </div>
    </>
  );
};

export default MyForm;
