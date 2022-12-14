import React from 'react'
import { useEffect, useState } from "react";
import { Employees } from './Employees';
import { Pagination } from './Pagination';
import { Search } from './Search';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getEmployeesData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://randomuser.me/api/?results=100&inc=gender,name,phone,email,location,id`
      );
      const data = await res.json();
      setEmployeesData(data.results);
      setLoading(false);
    };

    getEmployeesData();
  }, []);
  // console filteredData on change
  useEffect(() => {
    console.log('filteredData', filteredData)
    console.log(currentEmployees, 'currentEmployees')
  }, [filteredData, currentEmployees])

  // Get current posts
  const indexOfLastPost = currentPage * employeesPerPage;
  const indexOfFirstPost = indexOfLastPost - employeesPerPage;
  if (filteredData.length > 0) {
    var currentEmployees = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  } else if (query.length !== 0) {
    var currentEmployees = "Results not found";
  } else {
    var currentEmployees = employeesData.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Directory</h1>
      <Search employeesData={employeesData} setFilteredData={setFilteredData} query={query} setQuery={setQuery} />
      <Employees employees={currentEmployees} loading={loading} />
      {
        currentEmployees === "Results not found" ?
        <h3>Results not found</h3> : 
        <Pagination
          employeesPerPage={employeesPerPage}
          totalEmployees={filteredData.length > 0 ? filteredData.length : employeesData.length}
          paginate={paginate}
        />
      }
    </div>
  )
}
