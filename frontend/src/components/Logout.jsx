import React from "react";
import "./style/logout.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Logout() {
  const dispatch = useDispatch();
  return (
    <div className="logOut">
      <Link to="/Login">
        <button onClick={() => dispatch({ type: "LOGOUT" })}>
          <img src="./pictures/icons/logout.png" alt="" />
        </button>
      </Link>
    </div>
  );
}
