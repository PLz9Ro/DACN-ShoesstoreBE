import React from 'react'
import AddressCard from '../Address/AddressCard'
import CartInfo from '../Cart/CartInfo'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard/>
      </div>
      <div>
        <CartInfo/>
      </div>
    </div>

  )
}

export default OrderSummary