import React from 'react'
import './heading.css'
import rec from '../../assets/expand.png'

export const Heading = (props) => {
  return (
    <div className='Heading'>
        <img src={rec}/>
        <div>{props.title}</div>
    </div>
  )
}
