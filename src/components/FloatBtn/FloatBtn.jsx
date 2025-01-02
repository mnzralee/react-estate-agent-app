import React from "react";

import "./FloatBtn.css";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FloatBtn = ({ value, toLink }) => {
  return (
    <Link
    to={toLink}
    className="floating-home-btn btn rounded-5 position-fixed top-0 start-0 m-4 text-light d-flex justify-content-center align-items-center"
    style={{ fontSize: "0.8rem", padding: "9.5px 13px 10px 14px" }}
    >
    <FaChevronLeft className="me-2 m-0 fs-6"/> <span className="d-none d-sm-block">{value}</span>
     
    </Link>
  );
}

export default FloatBtn;