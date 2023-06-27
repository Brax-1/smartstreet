import React, { useState } from 'react'
import './auth.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export const Signup = () => {
  const [data,setData] = useState({
    email:"",
    contact:"",
    password:"",
    username:"",
    name:"",
    address: ""
  })

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
    const url = process.env.REACT_APP_API_URL+"/auth/local/register";
    console.log(url)
    try {
      if(data.email && data.password){
        const res = await axios.post(url, data);
        
        // await axios.get(process.env.REACT_APP_API_URL+`/detail`,{
        //   headers: { Authorization: "bearer "+process.env.REACT_APP_API_TOKEN, }
        // })
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
        <div className='Title'>Sign Up</div>
        <input className='Input' type='text' placeholder='User Name' value={data.username} onChange={(e)=>setData({...data,username: e.target.value})} required/>
        <input className='Input' type='text' placeholder='Name' value={data.name} onChange={(e)=>setData({...data,name: e.target.value})} required/>
        <input className='Input' type='number' placeholder='Contact Number' value={data.contact} onChange={(e)=>setData({...data,contact: e.target.value})}  required/>
        <input className='Input' type='text' placeholder='Address' value={data.address} onChange={(e)=>setData({...data,address: e.target.value})}  required/>
        <input className='Input' type='email' placeholder='Email' value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}  required/>
        <input className='Input' type='password' placeholder='Password' value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}  required/>
        <button onClick={handleSubmit} className='Button'>Sign Up</button>
        <div className='Footer'>Already have an account? <Link to="/signin"><div className='ToggleAuth'>Signin</div></Link></div>
        {error && <div className='Error'>{error}</div>}
        
    </div>
  )
}
