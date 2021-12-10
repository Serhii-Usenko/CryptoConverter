import React, { useState } from 'react';
import './Pagination.css';

export default function Pagination({ newsPerPage, totalNews, paginate,active, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <span>
                {pageNumbers.map((number, index) => (
                    <a
                        href="!#"
                        key={index}
                        className="number-pgn"
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </a>
                ))}
            </span>
        </div>
    )
}
