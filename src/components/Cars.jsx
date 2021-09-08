import React, { useState, useEffect } from 'react'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { loadlogin } from '../features/session/sessionSlice'

const Registration = () => {
  const [ car, setCar ] = useState([])
  // const [ booking, setBooking ] = useState()
  const getToken = useSelector((state) => state.entities.session.user.token)
  const getID = useSelector((state) => state.entities.session.user.user.id)
  const [ book, setBook ] = useState({
    user_id: getID,
    car_id: '',
    country: '',
    date: '',
  })

  const headers = {
    "Authorization": `bearer ${getToken}`
  }

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }
  const getCars = () => {
    axios.get(
      'http://localhost:3000/cars',
    { headers: headers},
    ).then((response)=>{
      setCar(response.data);
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
  }
  useEffect(()=>{
    getCars()
  },[])

  const handleSubmit = (e) => {
    axios.post(
      'http://localhost:3000/attendances',
       book
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
        onChange={handleChange}
        name='car_id'
      >
        <option key="0" disabled> Choose </option>
        {car.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.model}
          </option>
        ))}
      </select>
      <input type="text" name='country' placeholder="country" onChange={handleChange}/>
      <input type="date" name='date' onChange={handleChange}/>
      <button type='submit'>Add booking</button>
    </form>
  </div>
  )
}

export default Registration
