import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function Create() {
  const [value, setValues] = useState({
    ID: "",
    NAME: "",
    Email: "",
    DOB: "",
    Mob: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = { ...value };
    axios
      .post("http://localhost:8081/students", newValue)
      .then((res) => {
        console.log(res);
        alert("Form submitted successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit form. Please try again.");
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>

          <div className="mb-2">
            <label htmlFor="name">ID</label>
            <input
              type="text"
              id="ID"
              placeholder="Enter your ID"
              className="form-control"
              value={value.ID}
              onChange={(e) => setValues({ ...value, ID: e.target.value })}
            />
          </div>
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
          {/* <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-control"
              value={value.Password}
              onChange={(e) =>
                setValues({ ...value, Password: e.target.value })
              }
            />
          </div> */}
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
              value={value["Mob.No."]}
              onChange={(e) =>
                setValues({ ...value, "Mob. No.": e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
