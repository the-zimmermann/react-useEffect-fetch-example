import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Employee() {
  console.log("RENDER");

  const { id } = useParams();

  const [employee, setEmployee] = useState();
  const [error, setError] = useState();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const getApiData = async () => {
      try {
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const jsonData = await result.json();
        setEmployee(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    getApiData();
  }, [id]);

  useEffect(() => {
    const coolInterval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 100);

    return () => clearInterval(coolInterval);
  }, []);

  if (error) {
    return <div>AUUUUUUU {error.message}</div>;
  }

  if (employee === undefined) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <Link to="/">Zurück / es ist {clock}</Link>
      <h2>{employee.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: employee.body.replace(/\n/gim, "<br>"),
        }}
      ></p>
    </div>
  );
}
