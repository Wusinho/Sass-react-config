import React, { useState, useEffect } from 'react'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { loadlogin } from '../features/session/sessionSlice'

const Registration = () => {
  const [ appointments, setAppointments ] = useState([])
  const [ booking, setBooking ] = useState()
  const getToken = useSelector((state) => state.entities.session.user.token)
  const getID = useSelector((state) => state.entities.session.user.user.id)

  const headers = {
    "Authorization": `bearer ${getToken}`
  }

  const getApointments = () => {
    axios.get(
      `http://localhost:3000/users/${getID}`,
    { headers: headers},
    ).then((response)=>{
      setAppointments(response.data.attendances);
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
  }
  useEffect(()=>{
    getApointments()
  })

  const renderApp = () => 
    appointments.map((book) =>
    <div key={book.id}>
      <h4>{book.id}</h4>
      <h4>{book.country}</h4>
      <h4>{book.date}</h4>
      <h4>{book.car_id}</h4>
    </div>
    )

  return (
    <div>
      { appointments.length ? renderApp() : <h2>Hello</h2> }
    </div>
  )
}

export default Registration
