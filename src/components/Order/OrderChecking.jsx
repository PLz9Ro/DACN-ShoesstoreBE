import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderChecking = () => {
  return (
    <div className='px-5 lg:px-20 text-start'>
        <div >
        <h1 className='font-semibold text-lg py-10'> Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-10'>
            <OrderTracker activeStep={3}/>
        </div>
        <div>
            <Grid className=' space-y-5' container>
                {[1,1,1,1,1].map((item)=>
                    <Grid item container className='cursor-pointer hover:shadow-lg shadow-xl rounded-md p-5 border' sx={{alignItems:"center" , justifyContent:"space-between"}}>
                        <Grid item xs={6}>
                            <div className='space-y-2 ml-5 flex items-center space-x-4'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' alt='' src='https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/air-jordan-1-retro-high-dark-mocha-575441-105-768x768.jpg'/>
                                <div className='space-y-2 '>
                                    <p className='font-semibold'>Air Jordan 1 Retro High OG – Dark Mocha</p>
                                    <p className='space-x-5 opacity-50 text-sm font-semibold'>
                                        <span>Color: Mocha</span>
                                        <span>Size : 9.5US</span>
                                    </p>
                                    <p>Seller: Phuclam</p>
                                    <p>15.000.000VND</p>
                                </div>
                            </div>    
                        </Grid>

                        <Grid item >
                            <Box sx={{color:deepPurple[500]}}>
                                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
                                <span> Rate & Review Product</span>
                                    
                            </Box>
                        </Grid>
                </Grid>
                )}
                
            </Grid>
        </div>
    </div>
  )
}

export default OrderChecking