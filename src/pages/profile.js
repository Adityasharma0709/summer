
// import "../css/ProfilePage.css"
// import React, { useState } from 'react';
// import Heading from '../components/heading';
// import Contact from "../components/contact";
// import Logo from "../assests/1722788385688(100).jpg"
// import { useEffect } from "react";
// const MyForm = () => {
//   // Initial data that could be fetched from a local system
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
//     <div className="top1">
//       <div className="topP"><Heading/></div>
//       <div className="topP"><Contact/></div>
//     </div>
//     < div style={{display:"flex", justifyContent:"center", width:"100%"}}>
//     <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"37%",border:"solid rgb(217, 195, 191)",padding:"40px"}}>
//     <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
//         <img src={Logo} style={{height:"100px",width:"100px",border:"solid black 1px",borderRadius:"50px"}} alt="pics"></img>
//       </div>
//     <div className="form">
//       <button onClick={handleEditToggle} style={{ float: 'right', marginBottom: '10px',border:"none",backgroundColor:"transparent" }}>
//         {isEditing ? <i class="fa-regular fa-floppy-disk" style={{fontSize:"20px"}}></i> : <> <i class="fa-solid fa-pencil" style={{fontSize:"20px"}}></i></>}
//       </button>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>State:</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         <div>
//           <label>Zipcode:</label>
//           <input
//             type="text"
//             name="zipcode"
//             value={formData.zipcode}
//             onChange={isEditing ? handleChange : null}
//             readOnly={!isEditing}
//             required
//           />
//         </div>
//         {/* {isEditing && <button type="submit">Submit</button>} */}
//       </form>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default MyForm;
import "../css/ProfilePage.css";
import React, { useState, useEffect } from 'react';
import Heading from '../components/heading';
import Contact from "../components/contact";
import Logo from "../assests/1722788385688(100).jpg";
import { useAuth } from '../components/Authcontext';

const Profile = () => {
  const { currentUser, updateUser } = useAuth();
  const [formData, setFormData] = useState(currentUser);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormData(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setIsEditing(false);
    alert('Profile updated successfully');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="top1">
        <div className="topP"><Heading /></div>
        <div className="topP"><Contact /></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "37%", border: "solid rgb(217, 195, 191)", padding: "40px" }}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <img src={Logo} style={{ height: "100px", width: "100px", border: "solid black 1px", borderRadius: "50px" }} alt="pics"></img>
          </div>
          <div className="form">
            <button onClick={handleEditToggle} style={{ float: 'right', marginBottom: '10px', border: "none", backgroundColor: "transparent" }}>
              {isEditing ?null : <i className="fa-solid fa-pencil" style={{ fontSize: "20px" }}></i>}
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
              <div style={{width:"100%",margin:"10px"}}>
              {isEditing && <button type="submit" style={{border:"none",backgroundColor:"transparent"}}> <i className="fa-regular fa-floppy-disk" style={{ fontSize: "20px" }}></i></button>}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

