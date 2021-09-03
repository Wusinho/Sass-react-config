import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut, selectIsLoggedIn } from "../features/session/sessionSlice";


// Import the NavNavLink component.
import { NavLink } from 'react-router-dom'

export default function Header () {
  const loggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch()

  const handleLogout = e => {
    dispatch(logOut())
  }

  // Replace the 4 <a> tags with <NavNavLink> components
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink> 
      {
        loggedIn ?
          <>
            <h2>{currentUser}</h2>
            <button onClick={handleLogout} className="logout"> Log Out </button>
          </> : 
          <>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/sign_in">Sign In</NavLink> 

          </>
      }
    </div>
  )
}
