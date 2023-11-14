import React from "react";
import "../Style/form.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Register = () => {
  const navigate = useNavigate();

  const onClickHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const res = await axios.post("/api/v1/user/Register", data);

      if (res.data.success === true) {
        message.success("Registration Successful");
        navigate("/");
      } else {
        message.error(res.data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred during registration.");
    }
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content"></div>
      <form className="form" onSubmit={onClickHandler}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="text" name="name" placeholder="Enter Username" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="email" name="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
        <p className="signup-link">
          No account?
          <Link
            to="/"
            className="ms-2"
            style={{ color: "white", textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
