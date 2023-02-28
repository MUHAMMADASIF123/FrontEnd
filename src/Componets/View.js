import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container vh-100 py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"> Student Name: {user.name}</li>
        <li className="list-group-item">Student_email: {user.email}</li>
        <li className="list-group-item">Password: {user.password}</li>
      </ul>
    </div>
  );
};

export default View;
