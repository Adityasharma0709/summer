
import "../css/ProfilePage.css"
import React, { useState } from 'react';
import Heading from '../components/heading';
import Contact from "../components/contact";
import Logo from "../assests/1722788385688(100).jpg"
import { useEffect } from "react";
const MyForm = () => {
  // Initial data that could be fetched from a local system
  const initialData = {
    name: 'Aditya Sharma',
    email: 'john@example.com',
    password: 'password123',
    phone: '123-456-7890',
    address: '123 Main St',
    state: '23BCSG66',
    zipcode: '90210',
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
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
    < div style={{display:"flex", justifyContent:"center", width:"100%"}}>
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"37%",border:"solid rgb(217, 195, 191)",padding:"40px"}}>
    <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
        <img src={Logo} style={{height:"100px",width:"100px",border:"solid black 1px",borderRadius:"50px"}} alt="pics"></img>
      </div>
    <div className="form">
      <button onClick={handleEditToggle} style={{ float: 'right', marginBottom: '10px',border:"none",backgroundColor:"transparent" }}>
        {isEditing ? <i class="fa-regular fa-floppy-disk" style={{fontSize:"20px"}}></i> : <> <i class="fa-solid fa-pencil" style={{fontSize:"20px"}}></i></>}
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
        {/* {isEditing && <button type="submit">Submit</button>} */}
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default MyForm;
// import "../css/ProfilePage.css";
// import React, { useState, useEffect } from 'react';
// import Heading from '../components/heading';
// import Contact from "../components/contact";
// import Logo from "../assests/1722788385688(100).jpg";

// const MyForm = () => {
//   const initialData = {
//     name: 'Aditya Sharma',
//     email: 'john@example.com',
//     password: 'password123',
//     phone: '123-456-7890',
//     address: '123 Main St',
//     state: '23BCSG66',
//     zipcode: '90210',
//   };

//   const [formData, setFormData] = useState(initialData);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedData = {
//       ...formData,
//       [name]: value
//     };
//     setFormData(updatedData);
//     localStorage.setItem('formData', JSON.stringify(updatedData));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // Handle form submission logic here
//   };

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <>
//       <div className="top-container">
//         <div className="top-section"><Heading /></div>
//         <div className="top-section"><Contact /></div>
//       </div>
//       <div className="form-container">
//         <div className="profile-container">
//           <div className="profile-image-container">
//             <img src={Logo} className="profile-image" alt="Profile" />
//           </div>
//           <div className="form">
//             <button onClick={handleEditToggle} className="edit-toggle-button">
//               {isEditing ? <i class="fa-regular fa-floppy-disk" style={{fontSize:"20px"}}></i> : <> <i class="fa-solid fa-pencil" style={{fontSize:"20px"}}></i></>}
//             </button>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="address">Address:</label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="state">State:</label>
//                 <input
//                   type="text"
//                   id="state"
//                   name="state"
//                   value={formData.state}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="zipcode">Zipcode:</label>
//                 <input
//                   type="text"
//                   id="zipcode"
//                   name="zipcode"
//                   value={formData.zipcode}
//                   onChange={isEditing ? handleChange : null}
//                   readOnly={!isEditing}
//                   required
//                 />
//               </div>
//               {isEditing && <button type="submit" className="submit-button">Submit</button>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyForm;
