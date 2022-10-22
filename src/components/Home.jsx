import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handelsubmitbtn = () => {
    localStorage.removeItem("logedIn");
    navigate("/");
  };
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      <h1>
        welcome <span style={{ color: "green" }}>{userName.name}</span> to home
        page...
      </h1>{" "}
      <br />
      <br />
      <br />
      <button type="submit" className="btn btn-dark " onClick={handelsubmitbtn}>
        log Out
      </button>
    </div>
  );
};

export default Home;
