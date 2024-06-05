import Companyprofile from '@/components/Companyprofile'
import Sidebar2 from '@/components/Sidebar2'
import React from 'react'

const Second = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
        <div className=' flex flex-col w-full md:w-[407px]'>
           <Sidebar2/>
        </div>
        <div className='mx-auto'>
            <Companyprofile/>
        </div>
    </div>
  )
}

export default Second