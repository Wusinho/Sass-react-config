import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { selectCurrentUser, logOut } from "../features/session/sessionSlice";

// Import the NavNavLink component.
import { NavLink } from 'react-router-dom'

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }
  if (currentUser) console.log(currentUser.email)

  // Replace the 4 <a> tags with <NavNavLink> components
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink> 
      {/* <NavLink to="/categories">Categories</NavLink> */}
      {
        currentUser ?
          <>
            <h2>{currentUser.email}</h2>
            <button onClick={handleLogout} className="logout"> Log Out </button>
          </> : 
            <NavLink to="/registration">Registration</NavLink> 
      }
    </div>
  )
}
