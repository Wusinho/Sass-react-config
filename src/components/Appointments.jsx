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

  
  const getApointments = () => {
    axios.get(
      'http://localhost:3000/users',
    { headers: headers},
    ).then((response)=>{
      setData(response.data);
    
    }).catch((error)=>{
      console.log('registration error', error.message)
    })
  }
  useEffect(()=>{
    getApointments()
  },[])
  console.log(data)

  // const dataLoop = data.map((item) => {
  //   Object.entries(item).map((nested) => {
  //     console.log(item.id, 'itemd ID ')
  //     console.log(nested[0], '0')
  //     console.log(nested[1], '1')
  //   })
  // })

  return data.map((item) => {
    Object.entries(item).map((nested) => {
      <div key={item.id}>
          <h4>{item.id}</h4>
      </div>
    })
  })
}

export default Registration
