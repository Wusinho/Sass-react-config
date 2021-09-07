import React from 'react'
import { selectIsLoggedIn } from "../features/session/sessionSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Cars from './Cars'


const Dashboard = () => {
const loggedIn = useSelector(selectIsLoggedIn);

  if (!loggedIn){
    return <Redirect to='sign_in'/>  
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Cars/>

    </div>
  )
}

export default Dashboard
