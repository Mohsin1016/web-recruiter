import ProSidebar2 from '@/components/procomp/Probar2'
import ProfEducation from '@/components/procomp/ProfEdu'
import React from 'react'

const Second = () => {
    return (
        <div className='flex flex-col md:flex-row items-center '>
            <div className=' flex flex-col w-full md:w-[407px]'>
                <ProSidebar2 />
            </div>
            <div className='mx-auto'>
                <ProfEducation />
            </div>

        </div>
    )
}

export default Second