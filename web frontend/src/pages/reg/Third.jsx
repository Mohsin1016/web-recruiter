import Profile from '@/components/Profile'
import Sidebar3 from '@/components/Sidebar3'
import React from 'react'

const Third = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
    <div className=' flex flex-col w-full md:w-[407px]'>
       <Sidebar3/>
    </div>
    <div className='mx-auto'>
        <Profile/>
    </div>
</div>
  )
}

export default Third