import React from 'react'
import { Categorycard } from './categorycard'
import './category.css'
import room from '../../assets/house.png'
import bike from '../../assets/bike-rental.png'
import food from '../../assets/diet.png'
import water from '../../assets/water-bottle.png'
import roomBack from '../../assets/alen-rojnic-T1Yvmf4oleQ-unsplash.jpeg'
import bikeBack from '../../assets/bike-rental.jpeg'
import foodBack from '../../assets/food.jpeg'
import waterBack from '../../assets/water.jpeg'
import { Heading } from '../heading/heading'
import { Link } from 'react-router-dom'

export const Category = () => {
  return (
    <div className='Category'>
        <Heading title='Services'/>
        <Link to="/list/room"> <Categorycard title='Room Rent' image={room} backimage={roomBack} color='orange'/></Link>
        <Link to="/list/bike"> <Categorycard title='Bike Rent' image={bike} backimage={bikeBack}  color='blue'/></Link>
        <Link to="/list/food"><Categorycard title='Food Service' image={food} backimage={foodBack}  color='red'/></Link> 
        <Link to="/list/water"><Categorycard title='Water Service' image={water} backimage={waterBack}  color='red'/></Link> 
    </div>
  )
}
