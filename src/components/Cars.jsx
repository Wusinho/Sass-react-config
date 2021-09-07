import React, { useState, useEffect } from 'react'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { loadlogin } from '../features/session/sessionSlice'

const Registration = () => {
  const [ data, setData ] = useState([])
  const [ booking, setBooking ] = useState()
  const getToken = useSelector((state) => state.entities.session.user.token)
  const getID = useSelector((state) => state.entities.session.user.user.id)

  const headers = {
    "Authorization": `bearer ${getToken}`
  }

  const getCars = () => {
    axios.get(
      'http://localhost:3000/trains',
    { headers: headers},
    ).then((response)=>{
      setData(response.data);
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
  }
  useEffect(()=>{
    getCars()
  },[])

  const handleSubmit = (e) => {
    axios.post(
      'http://localhost:3000/bookings',
      {
        booking :{
          user_id: getID,
          train_id: booking
        }
      }
    ,
    { headers: headers},
    ).then((response)=>{
      console.log(response.data);
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
    e.preventDefault();
  }
  return (
  <div>
   <form onSubmit={handleSubmit}> 
      <select
        className="form-control"
        onChange={(e) => setBooking(e.target.value)}
      >
        <option key="0" disabled> Choose </option>
        {data.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.model}
          </option>
        ))}
      </select>
      <button type='submit'>Add booking</button>
    </form>
  </div>
  )
}

export default Registration
