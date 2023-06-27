import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logofinal.png'
import logout from '../../assets/logout.png'
import login from '../../assets/login.png'
import { useNavigate } from 'react-router-dom'

let auth;
export const Navbar = () => {
  const navigate = useNavigate()
  function handleAuth() {
    if (localStorage.getItem('tokenSmartStreet')) {
      localStorage.removeItem('tokenSmartStreet')
    } else {
			navigate("/signin");
    }
  }
  return (
    <div className='Navbar'>
        <div><img src={logo}/> Smart Street</div>
        <div onClick={handleAuth}><img className='Authnav' src={localStorage.getItem('tokenSmartStreet') ? logout:login}/></div>
    </div>
  )
}
