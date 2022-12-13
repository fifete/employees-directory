import React from 'react'
import { useEffect, useState } from "react";
import { Employees } from './Employees';
import { Pagination } from './Pagination';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  useEffect(() => {
    const getEmployeesData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://randomuser.me/api/?results=100&inc=gender,name,phone,email,country,id`
      );
      const data = await res.json();
      setEmployeesData(data.results);
      setLoading(false);
    };

    getEmployeesData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * employeesPerPage;
  const indexOfFirstPost = indexOfLastPost - employeesPerPage;
  const currentEmployees = employeesData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Directory</h1>
      <Employees employees={currentEmployees} loading={loading} />
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employeesData.length}
        paginate={paginate}
      />
    </div>
  )
}
