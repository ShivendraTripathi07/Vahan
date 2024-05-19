import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
function Home() {
  // const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-80 bg-white rounded p-3">
        <h2>Student's List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            create
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>

              <th>Mob.no</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.ID}</td>
                  <td>{student.NAME}</td>
                  <td>{student.Email}</td>

                  <td>{student.Mob}</td>
                  <td>{student.DOB}</td>

                  <td>
                    <Link
                      to={`/read/${student.ID}`}
                      className="btn btn-sm btn-info"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/edit/${student.ID}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(student.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
