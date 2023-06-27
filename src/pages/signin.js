import React, { useState } from 'react'
import './auth.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export const Signin = () => {
  const [data,setData] = useState({
    identifier:"",
    password:"",
  })
  const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
    const url = "http://localhost:1337/api/auth/local";
    console.log(url)
    try {
      if(data.identifier && data.password){
        const res = await axios.post(url, data);
        localStorage.setItem("tokenSmartStreet",JSON.stringify(res.data));
        navigate("/");
        console.log(res);
      }
    } catch (error) {
      alert(error)
    }
	};

  return (
    <div className='Auth'>
        <div className='Backlay'></div>
        <div className='Title'>Sign In</div>
        <input className='Input' type='email' placeholder='Email' value={data.identifier} onChange={(e)=>setData({...data,identifier: e.target.value})}  required/>
        <input className='Input' type='password' placeholder='Password' value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}  required/>
        <button onClick={handleSubmit} className='Button'>Sign In</button>
        <div className='Footer'>Doesn't have an account? <Link to="/signup"><div className='ToggleAuth'>Signup</div></Link></div>
        {error && <div className='Error'>{error}</div>}
    </div>
  )
}
