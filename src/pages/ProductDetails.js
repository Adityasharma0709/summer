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
import React from 'react';
import { data } from '../assests/itemData'; // Adjust the path accordingly
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Destructure the 'id' parameter
  const productId = parseInt(id, 10); // Convert to integer
  const product = data.find(item => item.id === productId);

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={require(`../assests/${product.image}`)} alt={product.name} />
      <p>{product.description}</p>
      <p>Water: {product.water}</p>
      <p>Light: {product.light}</p>
      <p>Tips: {product.tips}</p>
    </div>
  );
};

export default ProductDetails;
