import Profbar4 from '@/components/procomp/Profbar4'
import Profdetails from '@/components/procomp/Profdetails'
import React from 'react'

const Fourth = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <Profbar4 />
            </div>
            <div className='mx-auto'>
                <Profdetails />
            </div>

        </div>
  )
}

export default Fourth