import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import CartInfo from '../components/Cart/CartInfo'
import Product from '../components/Product/Product'
import Footer from '../components/Footer/Footer.'
import HeaderNav from '../components/Hearder/HeaderNav'
import ProductCard from '../components/Product/ProductCard'
import Productdetail from '../components/ProductDetails/Productdetail'
import CheckoutItem from '../components/Checkout/CheckoutItem'
import OrderChecking from '../components/Order/OrderChecking'
import OrderDetail from '../components/Order/OrderDetail'

const CustomRouters = () => {
  return (
    <div>
       <div>
        <HeaderNav/>
       </div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<CartInfo/>}></Route>
            <Route path='/:lavelOne/:lavelTwe/:lavelThre' element={<Product/>}></Route>
            <Route path='/:product/:productId' element={<Productdetail/>}></Route>
            <Route path='/checkout' element={<CheckoutItem/>}></Route>
            <Route path='/account/order' element={<OrderDetail/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderChecking/>}></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomRouters