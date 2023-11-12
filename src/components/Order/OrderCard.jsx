import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
    const naviagte=useNavigate()
    return (
    <div onClick={()=>naviagte(`/account/order/${3}`)} className='p-5 shadow-lg hover:shadow-2xl border'> 
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img  alt='' className='w-[5rem] h-[5rem] object-cover object-top mx-2 my-auto' src='https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/air-jordan-1-retro-high-dark-mocha-575441-105-768x768.jpg'/>
                    <div className='my-2 space-y-2'>
                        <p  className=''>Air Jordan 1 Retro High OG – Dark Mocha</p>
                        <p className='opacity-50 text-sx font-semibold'>Size: 9.5US</p>
                        <p className='opacity-50 text-sx font-semibold'>Color: Mocha</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div className='mt-[1rem]' >
                    <p>3.500.000VND</p>
                </div>
            </Grid>
            <Grid item xs={4} >
                <div className='mt-[1rem]'>
                    <p>Delivered On March 03</p>
                    <p className='text-sm opacity-50' > Your item has been delivered</p>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard