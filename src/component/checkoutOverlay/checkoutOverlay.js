import React from 'react'
import './checkoutOverlay.css'

export const CheckoutOverlay = () => {
  return (
    <div className='CheckoutOverlay'>
        <div className='Confirm'>Confirm your room</div>
        <input placeholder='Number of days'/>
        <input placeholder='Starting Date'/>
        <button>Checkout</button>
    </div>
  )
}
