import React from 'react';

const HomeItemSection = ({product}) => {
  return (
    <div className='px-2 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3 border-2'>
      <div className='h-[17rem] w-[10rem] '>
        <img src={product.imageUrl}
        alt="" />
        <div className='items-center mt-5'>
          <h2 className='text-lg font-medium text-gray-900'>{product.brand}</h2>
          <h3 className='text-gray-500'>
            {product.title}
          </h3>
        </div>


      </div>

    </div>
  )
}

export default HomeItemSection