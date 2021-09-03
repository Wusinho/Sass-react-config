import React, { useState, useEffect } from 'react'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { loadapi } from '../features/session/sessionSlice'

const Sign_in = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const [ data, setData ] = useState({
  email: '',
  password: '',
})

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    dispatch(loadapi(data))
    e.preventDefault();
  }

  if (loggedIn){
    return <Redirect to='/dashboard'/>  

  } 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sing In</h2>
      <input
        type="email"
        name="email"
        placeholder="email@gmail.com"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type='submit'>Log In</button>
    </form>
  )
}

export default Sign_in
