import React from 'react'

export const Employees = ({ employees, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees === "Results not found" ? 
                        <tr><td>Results not found</td></tr> :
                        employees.map((employee, i) => (
                            <tr key={i}>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.location.country}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    )
}
