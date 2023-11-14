import React from "react";
import { Link } from "react-router-dom";
import "../Style/form.css";

const Login = () => {
  const onClickHandler = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Log the form data
    console.log("Form submitted with data:", { email, password });
  };
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content"></div>
      <form class="form" onSubmit={onClickHandler}>
        <p class="form-title">Login in to your account</p>
        <div class="input-container">
          <input type="email" name="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div class="input-container">
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit" class="submit">
          Login
        </button>
        <p class="signup-link">
          No account?
          <Link
            to="/Register"
            className="ms-2"
            href=""
            style={{ color: "white", textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
