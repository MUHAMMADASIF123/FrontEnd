import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useNavigate();
  const { name, email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/users/register`, users)
      .then((res) => {
        alert(res.response.message);
        // console.log(res.response.data)
        history("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <section className="mt-5 wraper ">
        <div className="container vh-100">
          <div className="col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center">
            <form className=" shadow p-5 w-100 bg-white mt-5">
              <h1 className="mb-2 text-white rounded">Register Here !</h1>

              <div className="form-floating d-flex justify-content-center">
                {/* <input type="text" className="form-control" id="floatingPassword" placeholder="Last Name"/> */}
                <input
                  type="text"
                  id="floatingPassword"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  className="form-control mt-2  border-warning "
                  style={{ height: "40px" }}
                />
                <label htmlFor="floatingPassword">Your Name</label>
              </div>
              <div className="form-floating  d-flex justify-content-center mt-2 mb-3">
                {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/> */}
                <input
                  type="email"
                  id="floatingInput"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  className="form-control mt-2  border-warning"
                  style={{ height: "40px" }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating d-flex justify-content-center">
                <input
                  type="password"
                  id="floatingPassword"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  className="form-control  mt-2 border-warning"
                  style={{ height: "40px" }}
                />
                {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/> */}
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="information mt-1 text-warning d-inline-block ">
                <p>Use 0 or more characters with a mix of letters,numbers </p>
              </div>

              {/* <button type="submit" className="btn btn-primary w-100 my-4">Continue</button>
               */}
              <button
                type="submit"
                onClick={handleuser}
                className="mt-4 font-weight-bold text-uppercase btn btn-success text-white text-bold shadow w-75 border-0 rounded-pill "
              >
                {" "}
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
