import React, { useEffect, useState } from 'react'
import './list.css'
import { ListCard } from "./listCard";
import { Heading } from '../heading/heading';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'

let filter = "room"
let headTitle = "Recommendation"
export const List = () => {
  const [product,setProduct] = useState([]);
  const location = useLocation();
  console.log(location)
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        if(location.pathname === "/list/bike"){  filter="bike"; headTitle="List of Bike"; }
        else if(location.pathname === "/list/food"){  filter="food"; headTitle="Food Services"}
        else if(location.pathname === "/list/water"){  filter="water"; headTitle="Water Supplier"}
        else if(location.pathname === "/list/room") { filter="room"; headTitle="List of Rooms"}
        const data = await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters][category][$eq]=${filter}`)
        setProduct(data.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])
  console.log(product)
  return (
    <div className='List'>
      <Heading title={headTitle}/>
      <div className='GridList'>
        {product?.map(product=>(
          <Link to={`/details/${product.id}`} key={product.id}>
            <ListCard data={product.attributes}/>
          </Link>
        ))
        }
      </div>
    </div>
  )
}
