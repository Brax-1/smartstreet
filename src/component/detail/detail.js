import React, { useState } from 'react'
import home from '../../assets/alen-rojnic-T1Yvmf4oleQ-unsplash.jpeg'
import cart from '../../assets/shopping-cart.png'
import reserve from '../../assets/reserve.png'
import rules from '../../assets/rules.png'
import offers from '../../assets/offers.png'
import './details.css'
import ImageSlider from '../slider/slider'
import { loadStripe } from "@stripe/stripe-js";
import moment from 'moment';
import axios from "axios";
import { Star } from '../star/star'
const stripe = require("stripe")(process.env.STRIPE_KEY);

const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + JSON.parse(localStorage.getItem("tokenSmartStreet")).jwt,
  },
});


const DetailComponent = (props) => {
  const [checkout,setCheckout] = useState(false);
  const [days,setDays] = useState(1);
  const date = new Date();
  const [startDate,setStartDate] = useState(moment().format("YYYY-MM-DD"));
  console.log(startDate)
  let slides = props.data?.attributes.images.data.map(image=> {return {url:process.env.REACT_APP_BASE_URL+image.attributes.url, title:image.name}} )
  
  const handlePayment = async () => {
    try {
      const order = await makeRequest.post("/orders", {
        products:props.data,
        days, startDate
      });
      const res = order.data.order
      var options = {
        "key": ""+res.key_id+"",
        "amount": ""+res.amount+"",
        "currency": "INR",
        "name": ""+"SmartStreet"+"",
        "description": ""+res.description+"",
        "image": "http://localhost:1337/uploads/thumbnail_logofinal_e25948894b.png",
        "order_id": ""+res.order_id+"",
        "handler": function (response){
          alert("Payment Succeeded");
        },
        "prefill": {
          "contact":""+res.contact+"",
          "name": ""+res.name+"",
          "email": ""+res.email+""
        },
        "notes" : {
          "description":""+res.description+""
        },
        "theme": {
          "color": "#ffa500"
        }
      };
      console.log(options)
      var razorpayObject = new window.Razorpay(options);
      razorpayObject.on('payment.failed', function (response){
          alert("Payment Failed");
      });
      razorpayObject.open();

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='DetailComponent'>
      {checkout && <div className='CheckoutOverlay'>
            <div className='Confirm'>Confirm your room</div>
            <input type='number' placeholder='Number of days' value={days} onChange={(e)=>setDays(e.target.value)}/>
            <input type='date' placeholder='Starting Date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            <div className='Button'>
            <button onClick={handlePayment}>Checkout</button>
            <button onClick={()=>setCheckout(false)}>Close</button>
            </div>
            
        </div>}
        
        <ImageSlider data={slides}/>
        <div className='Options'>
          <button className='CartOption'>
            <div>Cart</div>
            <img src={cart} />
          </button>
          <button onClick={()=>setCheckout(true)} className='BookOption'>
            <div>Book</div>
            <img src={reserve} />
          </button>
        </div>
        <div className='Content'>
        <div className='Price'>
          <div>Price: ₹{props.data?.attributes.price}/day</div><Star rating={props.data?.attributes.rating}/>
        </div>
        <div className='Title'>
          {props.data?.attributes.title}
        </div>
        <div className='Location'>{props.data?.attributes.address}</div>
        <div className='Description'>{props.data?.attributes.desc}</div>
        <div className='Offerings'>
          <div>What they are Offerings <img src={offers}/></div>
          <div>{props.data?.attributes.offer}</div>
        </div>
        <div className='HouseRules'>
          {props.data?.desc}
          <div>Rules to follow <img src={rules}/></div>
          <div>You'll be staying in someone's home, so please treat it with care and respect.</div>
          <div className='RulesHead'>Checking in and out</div>
          <div >Check-in after {props.data?.attributes.intime} and Checkout before {props.data?.attributes.outtime} am</div>
          <div className='RulesHead'>During your stay</div>
          <div>{props.data?.attributes.extraRules}</div>
        </div>
        <div className='Offerings'>
          <div>Owner Details</div>
          <div>Name : {props.data?.attributes.owner}</div>
        </div>
        </div>
    </div>
  )
}

export default DetailComponent