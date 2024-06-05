import FreSidebar4 from '@/components/frecomp/FreSidebar4'
import Fredetails from '@/components/frecomp/Fredetails'
import Freother from '@/components/frecomp/Freother'
import React from 'react'

const Fourth = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <FreSidebar4 />
            </div>
            <div className='mx-auto'>
                <Freother />
            </div>
        </div>
    )
}

export default Fourth