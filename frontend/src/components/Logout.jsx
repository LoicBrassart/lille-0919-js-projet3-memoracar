import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Logout() {
  const dispatch = useDispatch();
  return (
    <div className="logOut">
      <Link to="/Login">
        <p onClick={() => dispatch({ type: "LOGOUT" })}>Me déconnecter</p>
      </Link>
    </div>
  );
}
