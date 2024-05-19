import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export function Read() {
  const { ID } = useParams();
  const [student, setStudent] = useState(null); // Initialize as null

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + ID)
      .then((res) => {
        console.log(res);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, [ID]);

  if (!student || student.length === 0) {
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-70 bg-white rounded p-3">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-70 bg-white rounded p-3">
        <div className="p-2">
          <h2>Student Detail</h2>
          <h2>{student[0].ID}</h2>
          <h2>{student[0].NAME}</h2>
          <h2>{student[0].Email}</h2>
        </div>
        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${student.ID}`} className="btn btn-info">
          Edit
        </Link>
      </div>
    </div>
  );
}
