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
    // setCount(result.data.length)
  };

  useEffect(() => {
    loadUsers();
  }, []);

  //   const deleteUser = async (id) => {
  //     await axios.delete(`http://localhost:3003/users/${id}`);
  //     loadUsers();
  //   };

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
      <div className="d-flex justify-content-center mt-2">
        <Link className="btn btn-outline-primary" to="/add">
          Add New User
        </Link>
      </div>
      <div className="container mt-5">
        <div className="row">
          {users.map((emp, index) => (
            <>
              <div className="col-md-4">
                <div class="card">
                  {/* <img src={emp.Img} class="card-img-top" alt="..."/> */}
                  <div class="card-body">
                    <h5 class="card-title">{emp._id}</h5>
                    <p class="card-text">{emp.name}</p>
                    <h1 class="card-text">{emp.email}</h1>
                    <div>
                      <Link
                        className="btn btn-primary ms-2"
                        to={`view/${emp._id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary ms-2"
                        to={`edit/${emp._id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger ms-2"
                        to={`/`}
                        onClick={() => deleteUser(emp._id)}
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
