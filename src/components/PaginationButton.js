import React, { useState } from 'react';
import "../css/pagination.css"
const PaginationButtons1 = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination-buttons">
      <button className="butt" onClick={handlePrevPage} disabled={currentPage === 1}>
      <i class="fa-solid fa-less-than"></i> Previous
      </button>
      <span> {currentPage}</span>
      <button className="butt" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next <i class="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};

export default PaginationButtons1;
