import Login from '@/components/Login'
import Siderbar from '@/components/Siderbar'
import React from 'react'

const First = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start '>
        <div className=' flex flex-col w-full md:w-[407px]'>
           <Siderbar/>
        </div>
        <div className='mx-auto '>
            <Login/>
        </div>
    </div>
  )
}

export default First