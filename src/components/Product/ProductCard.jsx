import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
    const navigate = useNavigate()
    return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[14.5rem] m-3 transition-all cursor-pointer text-start'>
        <div className='h-[20rem]'>
            <img className='w-full h-full  object-fit object-center' src={product.imageUrl} alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60  '>{product.brand}</p>
                <p>{product.title}</p>
            </div>
            <div className=' flex '>
                <p className='font-semibold'>{product.discountedPrice}</p>
                <p className='line-through opacity-50 px-3'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPresent}%Off</p>
            </div>
        </div>
    </div>
    )
}

export default ProductCard