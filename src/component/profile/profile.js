import React from 'react'
import male from '../../assets/male.jpeg' 
import room from '../../assets/house.png'
import bike from '../../assets/bike-rental.png'
import food from '../../assets/diet.png'
import water from '../../assets/water-bottle.png'
import expandIco from '../../assets/expandicon.png'

import './profile.css'

export const ProfileCom = () => {
    const [update,setUpdate] = React.useState(false);
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("tokenSmartStreet")).user)
  return (
    <div className='ProfileCom'>
        <div>
            <img className='User' src={male}/>
        </div>

        <div className='Name'>{user.username}</div>
        <div className='Address'>{user.email}</div>
        <div className='Address'>Alandi Rd, Dighi, Pune, Maharashtra 411015</div>
        <div className='Address'>+91-8053675048</div>
        <div className='Features'>
            <img src={room}/>
            <img src={bike}/>
            <img src={food}/>
            <img src={water}/>
        </div>
        <div className='Details'>
            <button className='Update' onClick={()=>setUpdate(!update)}>{update?'Close':'Expand'}</button>
            <div className='EditTitle'>Edit Profile Section </div>
            <hr/>
            {update && <>
                <div className='Items'>
                    <div>Name</div>
                    <input type='text' value={'Akash Yadav'}/>
                </div>
                <div className='Items'>
                    <div>Email</div>
                    <input type='email' value={'ay701548@gmail.com'}/>
                </div>
                <div className='Items'>
                    <div>Contact No.</div>
                    <input type='number' value={'8053675048'}/>
                </div>
                <div className='Items'>
                    <div>Address</div>
                    <input type='text' value={'Alandi Rd, Dighi, Pune, Maharashtra 411015'}/>
                </div>
            </>}
            
        </div>
    </div>
  )
}
