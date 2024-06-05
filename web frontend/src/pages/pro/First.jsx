import ProLogin from '@/components/procomp/ProLogin'
import ProSiderbar from '@/components/procomp/ProSiderbar'
import React from 'react'

const First = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
    <div className=' flex flex-col w-full md:w-[407px]'>
       <ProSiderbar/>
    </div>
    <div className='mx-auto'>
        <ProLogin/>
    </div>
</div>
  )
}

export default First