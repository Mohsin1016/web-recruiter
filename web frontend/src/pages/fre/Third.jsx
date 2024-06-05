import FreSidebar3 from '@/components/frecomp/FreSidebar3'
import Fredetails from '@/components/frecomp/Fredetails'
import React from 'react'

const Third = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <FreSidebar3 />
            </div>
            <div className='mx-auto'>
                <Fredetails />
            </div>
        </div>
    )
}

export default Third