import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
       navigate("/add");
    }
  }, [])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      let item = { name, email, password };
      let result = await fetch("http://127.0.0.1:8000/api/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (result.ok) {
        result = await result.json();
  
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
      } else {
  
        console.error("Failed to register:", result.statusText);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  }

  return (
    <div className="col-sm-6 mx-auto bg-secondary mt-5">
      <h1 className="text-white font-weight-bolder">Register page</h1>
      <div className="pt-5 p-2">
        <input
          type="text"
          className="form-control bg-transparent mb-4 text-white"
          placeholder="Write your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          className="form-control mt-2 bg-transparent mb-4 text-white"
          placeholder="Write your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="form-control mt-2 bg-transparent text-white"
          placeholder="Write your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button className="btn btn-dark mt-4 mb-2" onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
};

export default Register;

