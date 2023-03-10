import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  // const [nameField, setNameField] = useState(true);
  const [nameField, setNameField] = useState(false);
  const [emailField, setEmailField] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [error, setError] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const history = useNavigate();
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
    };
    // console.log(users);

    e.preventDefault();
    if ((!name || !email || !password) && !name && !email && !password) {
      setError(true);
      return false;
    }
    await axios
      .post(`http://localhost:8080/users`, users)
      .then((res) => {
        alert("data is submit successfully");
        console.log(res.data);
        history("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div className="container  mt-5 mb-5  mx-auto ">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Student</h2>
        <button
          onClick={() => setNameField(!nameField)}
          class="btn btn-primary mb-5 me-2"
        >
          Add Name
        </button>
        <button
          onClick={() => setEmailField(!emailField)}
          class="btn btn-primary mb-5 me-2"
        >
          Add Email
        </button>
        <button
          onClick={() => setPasswordField(!passwordField)}
          class="btn btn-primary mb-5 me-2"
        >
          Add Password
        </button>

        <form className="m-5   " onSubmit={handleuser}>
          {nameField && (
            <div class="mb-3">
              <label for="name1" class="form-label">
                Enter your name
              </label>
              <input
                type="text"
                class="form-control"
                id="name1"
                name="name"
                value={name}
                placeholder="Your name"
                onChange={onInputChange}
              />
              {error && !name && (
                <span className="bg-danger text-white">
                  plase Enter Your name
                </span>
              )}
            </div>
          )}
          {emailField && (
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={onInputChange}
              />
              {error && !email && (
                <span className="bg-danger text-white">
                  plase Enter Your Email
                </span>
              )}
            </div>
          )}
          {passwordField && (
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="text"
                id="password"
                class="form-control"
                name="password"
                value={password}
                onChange={onInputChange}
              ></input>
              {error && !password && (
                <span className="bg-danger text-white">
                  plase Enter the Password
                </span>
              )}
            </div>
          )}

          <div className="field">
            <div className="control d-flex justify-content-center">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
