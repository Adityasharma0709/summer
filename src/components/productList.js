// // // ProductList.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { data } from '../assests/itemData'; 
// import '../css/productList.css'; 
// import PaginationButtons1 from '../components/PaginationButton';

// const itemsPerPage = 20;

// const ProductList = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <>
//       <div className="product-list">
//         {visibleItems.map((item) => (
//           <Link to={`/product/${item.id}`} key={item.id} className="product-item">
//             <img src={require(`../assests/${item.image}`)} alt={item.name} />
//             <p>{item.name}</p>
//           </Link>
//         ))}
//       </div>
//       <PaginationButtons1
//         totalItems={data.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />
//     </>
//   );
// };

// export default ProductList;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { data } from '../assests/itemData';
import '../css/productList.css';
import PaginationButtons1 from '../components/PaginationButton';

const itemsPerPage = 20;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const currentPage = useSelector((state) => state.product.currentPage);

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: data });
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="product-list">
        {visibleItems.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-item">
            <img src={require(`../assests/${item.image}`)} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <PaginationButtons1
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
