import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = ({data}) => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                {/* <Grid item xs={12} sm={6} md={4}>
                <div>
                    <div className='w-[30rem] h-[30rem]'>
                        <img  alt="" />
                    </div>
                </div>
                </Grid> */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >About Us</Typography>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >About</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Jobs</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Service</Typography>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >About</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Blog</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Company</Typography>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >About</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Jobs</Button>
                    </div>
                </Grid>

                <Grid className='pt-20 ' sm={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2023 My Company
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; Make With Love By Me 
                    </Typography>
                    <Link href="" color="inherit" underline='alway'>
                    </Link>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Footer