import React from 'react'
import room from '../../assets/alen-rojnic-T1Yvmf4oleQ-unsplash.jpeg'
import more from '../../assets/shopping-cart.png'
import { Star } from '../star/star'

export const ListCard = (props) => {
  console.log(process.env.REACT_APP_BASE_URL+props.data.images.data[0].attributes.url)
  return (
    <div className='ListCard'>
        <img className='BackgroundImg' src={process.env.REACT_APP_BASE_URL+props.data.images.data[0].attributes.url}/>
        <img className='ShowImg' src={more}/>
        <div className='CartBack'></div>
        <div className='Overlay'>
            <div className='Content'>
                <div className='Price'>Price: ₹{props.data.price}</div>
                <div className='Title'>{props.data.title.length>30 ? props.data.title.slice(0,15)+"...":props.data.title}</div>
                <div className='Rating'>̐<Star rating={props.data.rating}/></div>
            </div>
        </div>
    </div>
  )
}
