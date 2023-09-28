import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  return (
    <div className="col-sm-6 mx-auto bg-secondary mt-5">
      <h1 className="text-white font-weight-bolder">Login page</h1>
    </div>
  );
};

export default Register;
