import React, { useState } from 'react'
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
import axios from 'axios'

const Registration = () => {
  const dispatch = useDispatch();
const [ data, setData ] = useState({
  email: '',
  password: '',
  // password_confirmation: ''
})

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // console.log(data)
    axios.post('http://localhost:3000/signup', 
      data
    ,
    // {mode: 'cors'},
    // { withCredentials: true },
    ).then((response)=>{
      axios.post('http://localhost:3000/login', 
      data,
      ).then((res) =>{
        console.log(res)
      })

      dispatch(signUp(response.data));
      console.log('registation res', response)
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
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
          {/* <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            onChange={handleChange}
            required
          /> */}
          <button type='submit'>Register</button>
        </form>
  )
}

export default Registration
