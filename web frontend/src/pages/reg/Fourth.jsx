import Job from '@/components/Job'
import Sidebar4 from '@/components/Sidebar4'
import React from 'react'

const Fourth = () => {
  return (
    <div className='flex flex-col md:flex-row '>
        <div className=' flex flex-col w-full md:w-[407px]'>
           <Sidebar4/>
        </div>
        <div className='mx-auto'>
            <Job/>
        </div>
    </div>
  )
}

export default Fourth