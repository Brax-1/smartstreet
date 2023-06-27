import React from 'react'
import bannerImg from '../../assets/premium_photo-1661963540233-94097ba21f27.png'
import './banner.css'

export const Banner = () => {
  return (
    <div className='Banner'>
        <div className='Image'>
            <img src={bannerImg}/>
            <div className='Backdrop'></div>
        </div>
        <div className='LogoName'>Smart Street</div>
    </div>
  )
}
