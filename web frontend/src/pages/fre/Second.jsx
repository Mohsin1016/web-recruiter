import FreEducation from '@/components/frecomp/FreEducation'
import FreSidebar2 from '@/components/frecomp/FreSidebar2'
import React from 'react'

const Second = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
    <div className=' flex flex-col w-full md:w-[407px]'>
       <FreSidebar2/>
    </div>
    <div className='mx-auto'>
        <FreEducation/>
    </div>
</div>
  )
}

export default Second