import React from "react";
import Login from "../../components/Login/login";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <div className="titulo-login">
        <h1>
          {" "}
          Retro <br></br>
          Groove{" "}
        </h1>
      </div>
      <div className="login">
        <Login />
      </div>
    </div>
  );
};

export default Home;
