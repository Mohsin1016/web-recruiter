import React from 'react'
import Profbar6 from '@/components/procomp/Profbar6'
import ProCongrats from '@/components/procomp/ProCongrats'

const Seven = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <Profbar6 />
            </div>
            <div className='mx-auto'>
                <ProCongrats />
            </div>

        </div>
    )
}

export default Seven
