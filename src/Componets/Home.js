import React, { useState, useEffect } from "react";
import axios from "axios";
// import '../App.css';
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result);
    setUser(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center  mt-2"></div>
      <div className="container mt-5">
        <div className="row">
          {users.map((user, index) => (
            <>
              <div className="col-md-4 mb-4">
                <div class="card shadow">
                  {/* <img src={emp.Img} class="card-img-top" alt="..."/> */}
                  <div class="card-body">
                    {/* <h5 class="card-title">{user._id}</h5> */}
                    {user.name && <h1 class="card-text">Name:{user.name}</h1>}

                    {user.email && <p class="card-text">Email:{user.email}</p>}
                    <div>
                      {user.password && (
                        <p class="card-text">Password:{user.password}</p>
                      )}
                      <Link
                        className="btn btn-primary ms-2"
                        to={`view/${user._id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary ms-2"
                        to={`edit/${user._id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger ms-2"
                        to={`/`}
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
