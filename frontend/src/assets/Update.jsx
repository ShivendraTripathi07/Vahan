import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function Update() {
  const { ID } = useParams();
  const [value, setValues] = useState({
    NAME: "",
    Email: "",
    DOB: "",
    Mob: "", // Consistent key for mobile number
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${ID}`)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.length > 0) {
          const data = res.data[0];
          setValues({
            NAME: data.NAME,
            Email: data.Email,
            DOB: data.DOB,
            Mob: data.Mob,
          });
        } else {
          console.error("No data found for the given ID");
        }
      })
      .catch((err) => console.error(err));
  }, [ID]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/update/${ID}`, value)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-control"
              value={value.NAME}
              onChange={(e) => setValues({ ...value, NAME: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email address"
              className="form-control"
              value={value.Email}
              onChange={(e) => setValues({ ...value, Email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              placeholder="Enter your date of birth"
              className="form-control"
              value={value.DOB}
              onChange={(e) => setValues({ ...value, DOB: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              id="mobile"
              placeholder="Enter your Mobile Number"
              className="form-control"
              value={value.Mob} // Consistent key for mobile number
              onChange={(e) => setValues({ ...value, Mob: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
