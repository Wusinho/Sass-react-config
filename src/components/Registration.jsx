import React, { useState, useEffect } from 'react'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { loadlogin } from '../features/session/sessionSlice'

const Registration = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [ data, setData ] = useState({
  username: '',
  password: '',
  password_confirmation: ''
})

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    const headers = {
      "Access-Control-Allow-Origin": "*"
    }
    axios.post(
      // 'http://localhost:3000/users',
      // 'https://lit-ridge-70863.herokuapp.com/coaches',
      'https://shielded-waters-88645.herokuapp.com/users/',
      data
    ,
    // { headers: headers},
    {mode:'cors'}
    ).then((response)=>{
      dispatch(signUp(response.data));
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
    e.preventDefault();
  }

  if (loggedIn){
    return <Redirect to='/dashboard'/>  

  } 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <input
        type="username"
        name="username"
        placeholder="username"
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
      <input
        type="password"
        name="password_confirmation"
        placeholder="Password confirmation"
        onChange={handleChange}
        required
      />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Registration
