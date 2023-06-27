import React from 'react'
import './star.css'

export const Star = (props) => {
    const rating = props.rating ? props.rating : 0;
  return (
    <div className='Star'>
        {/* {props.rating? && [...Array(props.rating)].map(star=> { return "⭐️" }) } */}
        <div className='Active'>{[...Array(rating)].map(star=> { return "⭐️" }) }</div>
        <div className='Inactive'>{[...Array(5 - rating)].map(star=> { return "⭐️" }) }</div>
    </div>
  )
}
