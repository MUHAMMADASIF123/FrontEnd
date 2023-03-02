import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/users/${id}`, user);
    history("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container vh-100 mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Student</h2>
        <form onSubmit={onSubmit}>
          {user.name && (
            <div className="form-group mb-2">
              <input
                type="num"
                className="form-control form-control-lg"
                placeholder="Enter Condidate number"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
          )}

          {user.email && (
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your name"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
          )}
          {user.password && (
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Your Date"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
          )}

          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-warning btn-block">
              Update Student
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
