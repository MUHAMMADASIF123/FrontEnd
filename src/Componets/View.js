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
    <>
      <div className="container vh-100 mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4"> Student Detail</h2>

          <div className="form-group mb-2">
            {user.name && <p className="border h-50"> {user.name}</p>}
          </div>
          <div className="form-group mb-2">
            {user.email && <p className="border h-50"> {user.email}</p>}
          </div>

          <div className="form-group mb-2">
            {user.password && <p className="border h-50"> {user.password}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
