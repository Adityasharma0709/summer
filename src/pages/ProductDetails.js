// // // ProductDetails.js
// import React from 'react';
// import { data } from '../assests/itemData'; // Adjust the path accordingly
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const productId =useParams(); // Convert to integer
//   const product = data.find(item => item.id === productId);

//   if (!product) {
//     // Handle case where product is not found
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//          <img src={require(`../assests/${product.image}`)} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Water: {product.water}</p>
//       <p>Light: {product.light}</p>
//       <p>Tips: {product.tips}</p>
//     </div>
//   );
// };

// export default ProductDetails;
// import React from 'react';
// import { data } from "../assests/itemData"; // Adjust the path accordingly
// import { useMatch } from 'react-router-dom'; // Import the useMatch hook

// const ProductDetails = () => {
//   const match = useMatch(); // Get the match object

//   if (!match) {
//     // Handle case where match is not found
//     return <div>Product not found.</div>;
//   }

//   const productId = parseInt(match.params.id, 10); // Convert to integer
//   const product = data.find(item => item.id === productId);

//   if (!product) {
//     // Handle case where product is not found
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <img src={require(`../assests/${product.image}`)} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Water: {product.water}</p>
//       <p>Light: {product.light}</p>
//       <p>Tips: {product.tips}</p>
//     </div>
//   );
// };

// export default ProductDetails;
import React from "react";
import { data } from "../assests/itemData";
import { useParams } from "react-router-dom";
import Heading from "../components/heading";
import Contact from "../components/contact";
import "../css/Descriptionpage.css";
const ProductDetails = () => {
  const { id } = useParams(); // Destructure the 'id' parameter
  const productId = parseInt(id, 10);
  const product = data.find((item) => item.id === productId);

  return (
    <>
      <div className="top1">
        <div className="topP">
          <Heading />
        </div>
        <div className="topP">
          <Contact />
        </div>
      </div>
      <div className="product-details">
        <div style={{display:"flex",flexDirection:'column', justifyContent:"flex-start",width:"50%"}}>
          <div style={{gap:"5px",margin:"5% 0"}}><h2 className="pname">{product.name}</h2>
          <p>{product.description}</p></div>
          <p style={{fontSize:"50px", margin:"5% 0"}}>Plant Care Guide</p>
          <hr/>
          <div className="wlt"><span>Water:</span><span>{product.water}</span></div><br/>
          <hr/>
          <div className="wlt"><span>Light:</span><span>{product.light}</span></div><br/>
          <hr/>
          <div className="wlt"><span>Tips:</span><span>{product.tips}</span></div><br/>
          <hr/>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end",alignItems:"center",width:"50%"}}>
          <img style={{width:"50%"}}
            src={require(`../assests/${product.image}`)}
            alt={product.name}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
