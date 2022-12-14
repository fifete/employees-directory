import React, { useEffect } from 'react'

export const Search = ({ employeesData, setFilteredData, query, setQuery }) => {
    const keys = ["first", "last"];

    useEffect(() => {
        function filterData(employeesData) {
            return employeesData.filter((employee) => {
                return keys.some((key) => {
                    if (key === 'country') {
                        return employee['location'][key].toLowerCase().includes(query);
                    }
                    return employee['name'][key].toLowerCase().includes(query);
                });
            });
        }
        if (employeesData !== undefined && query.length > 0) {
            console.log('filteredData')
            setFilteredData(filterData(employeesData));
        }
    }, [query]);

    return (
        <input
            className="search"
            placeholder="Search..."
            onKeyDown={(e) => setQuery(e.target.value.toLowerCase())}
        />
    )
}
