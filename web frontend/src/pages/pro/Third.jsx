import FreSidebar3 from '@/components/frecomp/FreSidebar3'
import ProSiderbar from '@/components/procomp/ProSiderbar'
import Probar3 from '@/components/procomp/Probar3'
import Profemp from '@/components/procomp/Profemp'
import React from 'react'

const Third = () => {
  return (
    <div className='flex md:flex-row flex-col items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <Probar3/>
            </div>
            <div className='mx-auto'>
                <Profemp />
            </div>

        </div>
  )
}

export default Third