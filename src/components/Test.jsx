import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const [input, setInpupt] = useState({
    email: "",
    password: "",
  });

  const onChangeHandle = (e) => {
    setInpupt({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (ee) => {
    ee.preventDefault();

    let getOurItem = JSON.parse(localStorage.getItem("user"));
    console.log(getOurItem);
    if (
      getOurItem.email === input.email &&
      getOurItem.password === input.password
    ) {
      navigate("/home");
    } else {
      alert("please valid input..");
    }
    localStorage.setItem("logedIn", true);
  };
  return (
    <div>
      <form className="vh-100 gradient-custom" onSubmit={onSubmitHandle}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        autoComplete="off"
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        name="email"
                        value={input.email}
                        onChange={onChangeHandle}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        autoComplete="off"
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        name="password"
                        value={input.password}
                        onChange={onChangeHandle}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test;
