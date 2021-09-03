import React from 'react'
import { selectIsLoggedIn } from "../features/session/sessionSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


const Dashboard = () => {
const loggedIn = useSelector(selectIsLoggedIn);

  if (!loggedIn){
    return <Redirect to='sign_in'/>  
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
