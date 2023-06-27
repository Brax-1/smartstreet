import React from 'react'
import './category.css'
import rightArrow from '../../assets/rightArrow.png'

export const Categorycard = (props) => {
  const  {image,title,backimage} = props;
  return (
    <div className='Categorycard' >
        <img src={backimage} className='BackImage'/>
        <div className='Content'>
            <img src={image}/>
            <div>{title}</div>
        </div>
        <div className='Redirect'>
            <img src={rightArrow}/>
        </div>
    </div>
  )
}
