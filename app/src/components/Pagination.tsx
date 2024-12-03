import React, { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

  return (
    <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "8px" }}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          style={{
            fontWeight: currentPage === index + 1 ? "bold" : "normal",
          }}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
