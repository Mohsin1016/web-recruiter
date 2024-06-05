import Profbar6 from '@/components/procomp/Profbar6'
import Proother from '@/components/procomp/Proother'
import React from 'react'

const Six = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <Profbar6 />
            </div>
            <div className='mx-auto'>
                <Proother />
            </div>

        </div>
  )
}

export default Six