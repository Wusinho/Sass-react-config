import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  logOut,
  selectIsLoggedIn,
} from "../features/session/sessionSlice";
import { loadlogin } from '../features/session/sessionSlice'

// Import the NavNavLink component.
import { NavLink } from "react-router-dom";

export default function Header() {
  const loggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logOut());
    axios
      .delete("http://localhost:3000/logout",{mode: 'cors'}, { withCredentials: true })
      .catch((err) => {
        console.log("logout error", err);
      });
  };

  // useEffect(()=>{
  //   dispatch(loadlogin())
  // })

  if (loggedIn) console.log(currentUser)
  // Replace the 4 <a> tags with <NavNavLink> components
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {loggedIn ? (
        <>
          <h2></h2>
          <button onClick={handleLogout} className="logout">
            {" "}
            Log Out{" "}
          </button>
        </>
      ) : (
        <>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/sign_in">Sign In</NavLink>
        </>
      )}
    </div>
  );
}
