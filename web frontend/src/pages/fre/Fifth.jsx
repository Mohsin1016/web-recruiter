import React from 'react'
import FreCongrats from '@/components/frecomp/FreCongrats'
import FreSidebar4 from '@/components/frecomp/FreSidebar4'

const Fifth = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <FreSidebar4 />
            </div>
            <div className='mx-auto'>
                <FreCongrats />
            </div>
        </div>
    )
}

export default Fifth
