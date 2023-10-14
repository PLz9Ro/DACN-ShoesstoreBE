import React from 'react'
import HomeBaner from '../Banner/HomeBaner'
import HomePDSection from '../ProductSection/HomePDSection'
import { Menshoes } from '../../Data/Menshoes'


const Home = () => {
  return (
    <div>
      <div>
        <HomeBaner/>
        <div className='py-20 space-y-10 w-full flex flex-col justify-center'>
          <HomePDSection data={Menshoes} sectionName={"Men Shoes"}/>
          <HomePDSection data={Menshoes} sectionName={"Women Shoes"}/>
          <HomePDSection data={Menshoes} sectionName={"Nike"}/>

        </div>
      </div>
    </div>
  )
}

export default Home