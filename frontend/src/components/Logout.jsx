import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/Login">
        <button onClick={() => dispatch({ type: "LOGOUT" })}>logout</button>
      </Link>
    </div>
  );
}
