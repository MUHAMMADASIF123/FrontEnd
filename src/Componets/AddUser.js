import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
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
    await axios
      .post(`http://localhost:8080/users`, users)
      .then((res) => {
        alert("data is submit successfully");
        console.log(res.data);
        history("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="">
      <form className="ms-5 me-5 mt-5 w-50 " onSubmit={handleuser}>
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
        </div>
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
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
