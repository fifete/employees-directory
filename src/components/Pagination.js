import React from 'react'

export const Pagination = ({ employeesPerPage, totalEmployees, paginate }) => {
    // generate page numbers
    const start = 1
    const end = Math.ceil(totalEmployees / employeesPerPage)
    const pageNumbers = [...Array(end).keys()].map((el) => el + start)

    return (
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    )
}
