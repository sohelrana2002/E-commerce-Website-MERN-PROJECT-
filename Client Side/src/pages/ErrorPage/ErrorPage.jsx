import React from "react";
import { NavLink } from "react-router-dom";

import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorPage_container">
      <div className="container">
        <h2>ERROR 404</h2>
        <NavLink to="/" className="btn">
          Go To Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
