import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = (props) => {
  return (
    <div className="hero d-flex align-items-center text-center text-light p-5">
      <h1 className="dato">{props.title}</h1>
    </div>
  );
};

export default Hero;
