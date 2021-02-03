import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Employees() {
  console.log("render");
  const [error, setError] = useState();
  const [employees, setEmployees] = useState();

  useEffect(() => {
    const getApiData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await result.json();
        setEmployees(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    getApiData();
  }, []);

  if (error) {
    return <div>AUUUUUUU {error.message}</div>;
  }

  if (employees === undefined) {
    return (
      <div>
        <h1>Loading…</h1>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div>
        <h1>NOOOO DATA</h1>
      </div>
    );
  }

  return (
    <ul>
      {employees.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/employee/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
