import FreSidebar from '@/components/frecomp/FreSidebar'
import Frelogin from '@/components/frecomp/Frelogin'
import React from 'react'

const First = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <FreSidebar />
            </div>
            <div className='mx-auto'>
                <Frelogin />
            </div>
        </div>
    )
}

export default First