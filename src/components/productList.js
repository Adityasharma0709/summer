import { Link } from 'react-router-dom';
import React from 'react';
import {data} from '../assests/itemData'; // Adjust the path accordingly
import '../css/productList.css'; // Add your styling
const ProductList = () => {
  return (
    <div className="product-list">
      {data.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} className="product-item" >
          <img src={require(`../assests/${item.image}`)} alt={item.name}/>
          <p >{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
