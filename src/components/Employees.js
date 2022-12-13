import React from 'react'

export const Employees = ({ employees, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    console.log(employees)
    return (
        <ul>
            {employees.map((employee, i) => (
                <li key={i}>
                    {employee.name.first} {employee.name.last}
                </li>
            ))}
        </ul>
    )
}
