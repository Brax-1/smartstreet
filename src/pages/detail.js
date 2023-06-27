import React, { useEffect, useState } from 'react'
import DetailComponent from '../component/detail/detail'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const Detail = () => {
  const [data,setData] = useState([]);
  const {id} = useParams()
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters][id][$eq]=${id}`)
        console.log(res,"pop")
        setData(res?.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])
  console.log(data,"lop")
  return (
    <>
        <DetailComponent data={data[0]}/>
    </>
  )
}
