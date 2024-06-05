import ProfCarrier from '@/components/procomp/ProfCarrier'
import Profbar5 from '@/components/procomp/Profbar5'
import Proother from '@/components/procomp/Proother'
import React from 'react'

const Fifth = () => {
  return (
    <div className='flex flex-col md:flex-row  '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <Profbar5 />
            </div>
            <div className='m-auto '>
                <ProfCarrier />
            </div>

        </div>
  )
}

export default Fifth